/* eslint no-unused-vars: 0 */
const path = require('path');
const { UtamWdioService } = require('wdio-utam-service');

exports.config = {
    runner: 'local',
    specs: ['./src/__tests__/*.spec.ts'],
    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
        },
    ],
    logLevel: 'trace',
    bail: 0,
    waitforTimeout: 20000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 0,
    automationProtocol: 'webdriver',
    services: ['chromedriver', [UtamWdioService, {}]],
    framework: 'jasmine',
    reporters: ['spec'],
    jasmineNodeOpts: {
        helpers: [path.join(__dirname, 'src/jasmine.js')], // transpiles(es6 modules)
        requires: ['ts-node/register'], // trasnpile ts
        // script execution timeout
        defaultTimeoutInterval: 1000 * 60 * 30, //30 min
        expectationResultHandler: function (passed, assertion) {
            // intercept assertion
        },
    },
    before: function () {
        require('ts-node').register({ files: true });
        require('./src/jasmine')();
    },
};
