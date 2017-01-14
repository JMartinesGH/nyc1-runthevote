var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');

var config = {
    sassPath: "./assets/sass/",
    cssPath: "./assets/css/",
    jsPath: "./assets/js/"
};

gulp.task('css', function(){
    return gulp
        .src(config.sassPath+"style.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'})
            .on("error", notify.onError(function(error){
                return "Error: " + error.message;
            })))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer())
        .pipe(gulp.dest(config.cssPath));

});

gulp.task('css-min', ['css'], function(){
    return gulp
        .src(config.cssPath+"style.css")
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.cssPath));
});

gulp.task('watch', function(){
    gulp.watch([config.sassPath+"/**/*"], ['css', 'css-min']);
});

gulp.task('default', ["css", "css-min"]);