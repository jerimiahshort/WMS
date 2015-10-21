var gulp = require('gulp');
// SASS/CSS
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
// JS/Minification
var uglify = require('gulp-uglify');

// Compile, minify, and move our SASS/CSS in one fell swoop
gulp.task('css', function() {
    gulp.src('resources/assets/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer('last 10 version'))
        .pipe(gulp.dest('public/css'));
});

// Minify and move our Javascript
gulp.task('js:min', function() {
    gulp.src('resources/assets/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/js'));
});

// Copy our Javascript libraries
gulp.task('js:lib', function() {
    gulp.src('node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js')
        .pipe(gulp.dest('public/js'));
    gulp.src('node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('public/js'));
});

gulp.task('default', ['css', 'js:lib', 'js:min']);