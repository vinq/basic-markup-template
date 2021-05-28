'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var ts = require('gulp-typescript');
var minify = require("gulp-minify");
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('prod', function () {
  return gulp.src(['./js/libs/**/*.js', './js/**/*.ts'])
  	.pipe(ts({
          "noImplicitAny": false,
        	"module": "none",
          "target": "es5",
        	"lib": ["es6", "es5", "es7", "dom"],
        	"allowSyntheticDefaultImports": true,
        	"removeComments": true,
        	"allowJs": true
        }))
  	.pipe(concat("all.js"))
  	.pipe(minify())
    .pipe(gulp.dest('.'));
});