var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
// var sass = require('gulp-sass');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
// var sh = require('shelljs');
var chmod = require('gulp-chmod');

var paths = {
    sass: ['./scss/**/*.scss'],
    less: ['./www/styles/*.less']
};

gulp.task('default', ['less']);

gulp.task('sass', function(done) {
    gulp.src('./scss/ionic.app.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('./www/styles/'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./www/styles/'))
        .on('end', done);
});

gulp.task('less', function() {
    return gulp.src('./www/styles/config.less')
        .pipe(less())
        .pipe(rename('styles.css'))
        .pipe(chmod(755))
        .pipe(gulp.dest('./www/styles/'));
});

gulp.task('watch', function() {
    gulp.watch(paths.less, ['less']);
    //gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function() {
    return bower.commands.install()
        .on('log', function(data) {
            gutil.log('bower', gutil.colors.cyan(data.id), data.message);
        });
});

gulp.task('git-check', function(done) {
    if (!sh.which('git')) {
        console.log(
          '  ' + gutil.colors.red('Git is not installed.'),
          '\n  Git, the version control system, is required to download Ionic.',
          '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
          '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
        );
        process.exit(1);
    }
    done();
});
