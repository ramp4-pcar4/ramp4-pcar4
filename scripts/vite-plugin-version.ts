import { execSync } from 'child_process';
import type { Plugin } from 'vite';
import pkg from '../package.json';

export default (): Plugin => {
    return {
        name: 'vite-plugin-version',
        config(config) {
            const hash = JSON.stringify(
                execSync('git rev-parse HEAD').toString().trim()
            );
            const timestamp = JSON.stringify(
                execSync('git log -1 --format=%cd').toString().trim()
            );

            const [major, minor, patch] = pkg.version.split('.');

            config.define
                ? (config.define.__VERSION__ = {
                      major,
                      minor,
                      patch,
                      timestamp,
                      hash
                  })
                : null;
        }
    };
};
