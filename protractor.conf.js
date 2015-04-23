// An example configuration file.
// https://raw.github.com/angular/protractor/master/example/conf.js
exports.config = {
  framework: 'jasmine2',
  capabilities: {
    'browserName': 'chrome'
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