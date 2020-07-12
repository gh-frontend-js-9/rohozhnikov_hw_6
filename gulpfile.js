const gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

exports.default = () => {
    browserSync.init({
        server: {
            baseDir: './src/'
        }
    });
    gulp.watch('./src/').on('change', browserSync.reload)

}