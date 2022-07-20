/// <reference types="vite/client" />

// temp fix until issue 1256 is given the Petrov treatment
declare const __RAMPVERSION__: {
    major: string;
    minor: string;
    patch: string;
    timestamp: string;
    hash: string;
};
