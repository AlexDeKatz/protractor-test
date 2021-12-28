
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts


var HtmlReporter = require('protractor-beautiful-reporter');

// const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
    allScriptsTimeout: 60000,
    specs: [
        "./e2e/keycloak.e2e-spec.ts",
    ],
    params: {
        login: {
            user: "",
            password: ""
        },
        index: 1
    },
    capabilities: {
        'browserName': 'chrome'
    },
    directConnect: true,
    baseUrl: 'https://wms-dev-ugwpui.msiidcugwpdevgateway.com/',
    userName: "",
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 60000,
        print: function () { }
    },
    onPrepare() {
        require('ts-node').register({
            project: 'e2e/tsconfig.e2e.json'
        });
        // jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));

        jasmine.getEnv().addReporter(new HtmlReporter({ baseDirectory: 'Reports', preserveDirectory: false }).getJasmine2Reporter());

    }
};