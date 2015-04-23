// An example configuration file.
// https://raw.github.com/angular/protractor/master/example/conf.js
exports.config = {
  directConnect: true,
  firefoxPath: process.env.FIREFOX_BIN || '/usr/local/bin/firefox',
  framework: 'jasmine2',
  capabilities: {
    'browserName': 'firefox'
  },
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },
  suites: {
    sample: ['./specs/**/*.js']
  }
};