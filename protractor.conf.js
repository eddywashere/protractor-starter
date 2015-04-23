var config = {
  directConnect: true,
  firefoxPath: process.env.FIREFOX_BIN || '/usr/local/bin/firefox',
  framework: 'jasmine2',
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['--no-sandbox']
    }
  },
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },
  suites: {
    sample: ['./specs/**/*.js']
  }
};

if(process.env.TRAVIS){
  config.capabilities.browserName = 'firefox';
}

exports.config = config;