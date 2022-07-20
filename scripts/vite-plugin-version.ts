import { execSync } from 'child_process';
import type { Plugin } from 'vite';
import pkg from '../package.json';

export default (): Plugin => {
    return {
        name: 'vite-plugin-version',
        config(config) {
            const hash = execSync('git rev-parse HEAD').toString().trim();
            const timestamp = execSync('git log -1 --format=%cd')
                .toString()
                .trim();

            const [major, minor, patch] = pkg.version.split('.');

            // temp fix until issue 1256 is given the Petrov treatment
            config.define
                ? (config.define.__RAMPVERSION__ = {
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
