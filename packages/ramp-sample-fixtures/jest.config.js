module.exports = {
    moduleFileExtensions: ['js', 'ts', 'vue'],
    modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
    transform: {
        '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
        '.*\\.(ts)$': 'ts-jest'
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    globals: {
        'vue-jest': {
            tsConfigFile: 'tsconfig.json'
        }
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$'
};
