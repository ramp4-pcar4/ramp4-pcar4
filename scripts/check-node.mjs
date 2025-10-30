import fs from 'fs';
import { promises as fsPromises } from 'fs';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
import semver from 'semver';
import { parse as parseYaml } from 'yaml';

const COLORS = {
    reset: '\u001b[0m',
    bold: '\u001b[1m',
    green: '\u001b[32m',
    yellow: '\u001b[33m',
    red: '\u001b[31m'
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');

const ARG_FLAGS = new Set(process.argv.slice(2));
const NO_CACHE = ARG_FLAGS.has('--no-cache');
const DEBUG = ARG_FLAGS.has('--debug');

const DEFAULT_OPTIONS = {
    requireConfirmOnUnknown: true,
    allowProceedInCI: true,
    cacheConsentTtlHours: 24,
    cacheFile: '.node-compat-cache.json'
};

const PACKAGE_JSON_PATH = path.join(repoRoot, 'package.json');

async function loadPackageJson() {
    try {
        const raw = await fsPromises.readFile(PACKAGE_JSON_PATH, 'utf8');
        return JSON.parse(raw);
    } catch (err) {
        if (DEBUG) {
            console.error(`${COLORS.yellow}[node-compat] Unable to read package.json: ${err.message}${COLORS.reset}`);
        }
        return {};
    }
}

function resolveConfigPath(overridePath) {
    if (!overridePath) {
        return path.join(repoRoot, 'node-compat.yml');
    }
    return path.isAbsolute(overridePath) ? overridePath : path.join(repoRoot, overridePath);
}

async function loadConfig(pkgJson) {
    const override = process.env.NODE_COMPAT_CONFIG;
    const configPath = resolveConfigPath(override);
    let source = 'node-compat.yml';
    let configData = null;

    if (fs.existsSync(configPath)) {
        try {
            const raw = await fsPromises.readFile(configPath, 'utf8');
            configData = parseYaml(raw) || {};
            source = configPath;
        } catch (err) {
            console.error(`${COLORS.red}Failed to parse ${configPath}: ${err.message}${COLORS.reset}`);
            process.exit(1);
        }
    } else if (pkgJson && pkgJson.nodeCompat) {
        configData = pkgJson.nodeCompat;
        source = 'package.json#nodeCompat';
    } else {
        configData = {};
        source = 'defaults';
    }

    const config = {
        prod: normalizeVersionList(configData.prod),
        likely: normalizeVersionList(configData.likely),
        options: {
            ...DEFAULT_OPTIONS,
            ...(configData.options || {})
        }
    };

    if (DEBUG) {
        console.error(`${COLORS.yellow}[node-compat] Config source: ${source}${COLORS.reset}`);
        console.error(
            `${COLORS.yellow}[node-compat] Normalized config: ${JSON.stringify(config, null, 2)}${COLORS.reset}`
        );
    }

    return { config, source };
}

function normalizeVersionList(value) {
    if (!value) {
        return [];
    }
    if (Array.isArray(value)) {
        return value.map(v => String(v).trim()).filter(Boolean);
    }
    return [String(value).trim()].filter(Boolean);
}

function matchesAny(version, entries) {
    if (!entries || entries.length === 0) {
        return false;
    }
    return entries.some(entry => {
        const target = entry.trim();
        if (!target) {
            return false;
        }
        if (semver.valid(target)) {
            return semver.eq(version, target, { loose: true });
        }
        if (semver.validRange(target, { loose: true })) {
            return semver.satisfies(version, target, { includePrerelease: false, loose: true });
        }
        return false;
    });
}

async function loadCache(cachePath) {
    if (NO_CACHE || !cachePath) {
        return { entries: [] };
    }
    if (!fs.existsSync(cachePath)) {
        return { entries: [] };
    }
    try {
        const raw = await fsPromises.readFile(cachePath, 'utf8');
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
            return { entries: parsed };
        }
        if (parsed && Array.isArray(parsed.entries)) {
            return { entries: parsed.entries };
        }
        return { entries: [] };
    } catch (err) {
        if (DEBUG) {
            console.error(`${COLORS.yellow}[node-compat] Failed to read cache: ${err.message}${COLORS.reset}`);
        }
        return { entries: [] };
    }
}

async function saveCache(cachePath, entries) {
    if (NO_CACHE || !cachePath) {
        return;
    }
    try {
        await fsPromises.writeFile(cachePath, JSON.stringify({ entries }, null, 2), 'utf8');
    } catch (err) {
        console.error(`${COLORS.red}Failed to write cache file ${cachePath}: ${err.message}${COLORS.reset}`);
    }
}

function getDisplayVersion() {
    return process.version.replace(/^v/, '');
}

function getCoercedVersion() {
    const coerced = semver.coerce(process.version);
    return coerced ? coerced.version : null;
}

function isPrereleaseVersion() {
    return semver.prerelease(process.version) !== null;
}

function getUsername() {
    try {
        const info = os.userInfo();
        return info.username || 'unknown';
    } catch (err) {
        if (DEBUG) {
            console.error(`${COLORS.yellow}[node-compat] Unable to determine username: ${err.message}${COLORS.reset}`);
        }
        return 'unknown';
    }
}

function buildHintLines({ pkgJson, nvmrcVersion, recommendedVersion }) {
    const hints = [];

    if (nvmrcVersion) {
        const trimmed = nvmrcVersion.trim();
        if (process.env.NVS_HOME) {
            hints.push(`Hint: .nvmrc detected. Run: nvs add ${trimmed} && nvs use ${trimmed}`);
        } else if (process.env.NVM_DIR) {
            hints.push('Hint: .nvmrc detected. Run: nvm install && nvm use');
        } else {
            hints.push(
                `Hint: .nvmrc detected. Install nvm or nvs, then run: nvm install && nvm use (or nvs add ${trimmed} && nvs use ${trimmed})`
            );
        }
    }

    const toolVersionsPath = path.join(repoRoot, '.tool-versions');
    if (fs.existsSync(toolVersionsPath)) {
        hints.push('Hint: .tool-versions detected. Run: asdf install && asdf shell nodejs latest');
    }

    if (pkgJson && pkgJson.volta) {
        const target = recommendedVersion || nvmrcVersion;
        const version = target ? target.trim() : '22.12.0';
        hints.push(`Hint: Volta detected. Run: volta install node@${version} && volta pin node@${version}`);
    }

    return hints;
}

function buildPatchHint(currentVersion, prodList) {
    if (!currentVersion || !prodList || prodList.length === 0) {
        return null;
    }
    const exactProdVersions = prodList.filter(v => semver.valid(v));
    if (exactProdVersions.length === 0) {
        return null;
    }
    const targetVersion = exactProdVersions[0];
    if (!semver.valid(targetVersion)) {
        return null;
    }
    const diff = semver.diff(currentVersion, targetVersion, { loose: true });
    if (!diff || (diff !== 'patch' && diff !== 'prepatch')) {
        return null;
    }
    return `You're on ${currentVersion}; prod is ${targetVersion}. Consider: nvm install ${targetVersion} && nvm use`;
}

async function main() {
    const pkgJson = await loadPackageJson();
    const { config } = await loadConfig(pkgJson);
    const options = { ...DEFAULT_OPTIONS, ...config.options };
    const displayVersion = getDisplayVersion();
    const coercedVersion = getCoercedVersion();

    if (!coercedVersion) {
        console.error(`${COLORS.red}Unable to determine your Node version from ${process.version}.${COLORS.reset}`);
        process.exit(1);
    }

    const isPrerelease = isPrereleaseVersion();
    const inProd = !isPrerelease && matchesAny(coercedVersion, config.prod);
    const inLikely = !isPrerelease && matchesAny(coercedVersion, config.likely);

    if (DEBUG) {
        console.error(
            `${COLORS.yellow}[node-compat] Node version: ${displayVersion} (coerced: ${coercedVersion})${COLORS.reset}`
        );
        console.error(
            `${COLORS.yellow}[node-compat] Classification: ${inProd ? 'prod' : inLikely ? 'likely' : 'unknown'}${COLORS.reset}`
        );
    }

    if (inProd) {
        console.log(`${COLORS.green}[OK] Using supported production Node version ${coercedVersion}.${COLORS.reset}`);
        return;
    }

    if (inLikely) {
        console.log(
            `${COLORS.yellow}[WARN] Using a non-production Node version ${coercedVersion} (likely supported).${COLORS.reset}`
        );
        return;
    }

    const recommendedTargets = [...config.prod, ...config.likely].filter(Boolean);
    const nvmrcPath = path.join(repoRoot, '.nvmrc');
    let nvmrcVersion = null;
    if (fs.existsSync(nvmrcPath)) {
        try {
            nvmrcVersion = fs.readFileSync(nvmrcPath, 'utf8').trim();
        } catch (err) {
            if (DEBUG) {
                console.error(`${COLORS.yellow}[node-compat] Failed to read .nvmrc: ${err.message}${COLORS.reset}`);
            }
        }
    }

    console.error(`${COLORS.red}[ERROR] Node ${displayVersion} has not been tested with this project.${COLORS.reset}`);
    if (recommendedTargets.length > 0) {
        console.error(`   Recommended: ${recommendedTargets.join(', ')}`);
    }

    const hints = buildHintLines({
        pkgJson,
        nvmrcVersion,
        recommendedVersion: config.prod.find(v => semver.valid(v)),
        options
    });
    hints.forEach(line => console.error(`   ${line}`));

    const patchHint = buildPatchHint(coercedVersion, config.prod);
    if (patchHint) {
        console.error(`   ${patchHint}`);
    }

    const cachePath = options.cacheFile ? path.join(repoRoot, options.cacheFile) : null;
    const parsedTtl = Number(options.cacheConsentTtlHours);
    const ttlHours = Number.isFinite(parsedTtl) && parsedTtl > 0 ? parsedTtl : DEFAULT_OPTIONS.cacheConsentTtlHours;
    const ttlMs = ttlHours * 60 * 60 * 1000;
    const username = getUsername();
    const cacheKey = JSON.stringify({
        nodeVersion: coercedVersion,
        username,
        repoPath: repoRoot
    });

    const cache = await loadCache(cachePath);
    const now = Date.now();

    let cached = null;
    if (!NO_CACHE && cache.entries.length > 0) {
        cached = cache.entries.find(entry => entry && entry.key === cacheKey && now - entry.timestamp <= ttlMs);
    }

    if (cached) {
        console.log(
            `${COLORS.yellow}[WARN] Node ${displayVersion} is untested. Cached consent found within ${ttlHours}h; continuing.${COLORS.reset}`
        );
        return;
    }

    const inCI = Boolean(process.env.CI);
    if (!options.requireConfirmOnUnknown) {
        console.log(
            `${COLORS.yellow}[WARN] Node ${displayVersion} is untested, but confirmations are disabled; continuing.${COLORS.reset}`
        );
        return;
    }

    if (inCI && options.allowProceedInCI) {
        console.log(`${COLORS.yellow}[WARN] Node ${displayVersion} is untested, continuing in CI.${COLORS.reset}`);
        return;
    }

    if (inCI && !options.allowProceedInCI) {
        console.error(
            `${COLORS.red}CI environments must use a supported Node version. Failing per configuration.${COLORS.reset}`
        );
        process.exit(1);
    }

    if (!process.stdin.isTTY || !process.stdout.isTTY) {
        console.error(`${COLORS.red}Cannot prompt for confirmation in non-interactive mode. Aborting.${COLORS.reset}`);
        process.exit(1);
    }

    const readline = await import('node:readline/promises');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let consent = false;
    try {
        const answer = await rl.question('Proceed anyway? Type Y to continue: ');
        if (typeof answer === 'string' && answer.trim().toLowerCase() === 'y') {
            consent = true;
        }
    } finally {
        rl.close();
    }

    if (!consent) {
        console.error(`${COLORS.red}Aborting. Please switch Node versions and try again.${COLORS.reset}`);
        process.exit(1);
    }

    if (!NO_CACHE && cachePath) {
        const filtered = cache.entries.filter(
            entry => entry && now - entry.timestamp <= ttlMs && entry.key !== cacheKey
        );
        filtered.push({ key: cacheKey, timestamp: now });
        await saveCache(cachePath, filtered);
    }

    console.log(
        `${COLORS.yellow}[WARN] Node ${displayVersion} is untested. Consent recorded; continuing.${COLORS.reset}`
    );
}

await main();
