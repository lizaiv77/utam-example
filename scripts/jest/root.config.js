module.exports = {
    rootDir: '../..',
    projects: [
        '<rootDir>/packages/@utam/compiler',
        '<rootDir>/packages/@utam/core',
        '<rootDir>/packages/wdio-utam-service',
        '<rootDir>/packages/integration-tests',
    ],

    // Global mono-repo code coverage threshold.
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 85,
            lines: 85,
        },
    },
};
