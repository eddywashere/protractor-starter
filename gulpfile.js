var gulp = require('gulp');

// The protractor task
var protractor = require('gulp-protractor').protractor;

// Start a standalone server
var webdriver_standalone = require('gulp-protractor').webdriver_standalone;

// Download and update the selenium driver
var webdriver_update = require('gulp-protractor').webdriver_update;

// Downloads the selenium webdriver
gulp.task('webdriver_update', webdriver_update);

// Start the standalone selenium server
gulp.task('webdriver_standalone', webdriver_standalone);


// Setting up the test task
gulp.task('protractor', ['webdriver_update'], function(cb) {
  gulp.src([]).pipe(protractor({
    configFile: './protractor.conf.js',
    args: process.argv.slice(2,-1) || ''
  })).on('error', function(e) {
    console.log(e);
  }).on('end', cb);
});