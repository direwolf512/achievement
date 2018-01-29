/**
 * @fileOverview
 * @author ISS
 */
var gulp = require('gulp'),
    stylus  = require('gulp-stylus'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

gulp.task('stylus', function () {
  return gulp
    .src('./public/stylesheets/*.styl')
    .pipe(stylus({
      compress: true,  //压缩
      'include css': true
    }))
    .pipe(gulp.dest('./build/css'))
});

gulp.task('uglify', function () {
  return gulp
    .src('./public/javascripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'))
});

gulp.task('serve', function () {
  gulp.watch('./views/*.ejs').on('change', reload);
  gulp.watch('./public/stylesheets/*.styl', ['stylus']);
  gulp.watch('./public/javascripts/*.js', ['uglify']);
});

gulp.task('default', ['stylus', 'uglify', 'serve']);