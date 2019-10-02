const { SpecReporter } = require('jasmine-spec-reporter');

// Protractor e2e tests
exports.config = {
    allScriptsTimeout: 11000,
    specs: [
        './**/*.spec.ts'
    ],
    capabilities: {
        'browserName': 'chrome'
    },
    baseUrl: 'http://localhost:5000',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function () {
        }
    },
    onPrepare() {
        browser.ignoreSynchronization = true;
        jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}));
    }
}
