// Karma configuration

//jshint strict: false
module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '.',

    files: [
      'test/components/angular/angular.js',
      'test/components/angular-mocks/angular-mocks.js',
      'app/scripts/*.js',
      'app/scripts/**/*.js',
      'test/spec/**/*.js'
    ],

    autoWatch: true,

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 10000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    // test results reporter to use
    // possible values: dots || progress || growl
    reporters: ['progress'],

    frameworks: ['jasmine'],

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    // browsers: ['Chrome', 'Firefox', 'Opera'],
    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-opera-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test/unit.xml',
      suite: 'unit'
    }

  });
};
