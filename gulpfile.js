var gulp = require('gulp');
var stylus = require('gulp-stylus');
var connect = require('gulp-connect');

var paths = {
    css: 'styles/*.styl',
    html: 'index.html'
};

gulp.task('watch', function () {
    gulp.watch(paths.css, ['stylus']);
    gulp.watch(paths.html, ['reload']);
});

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('stylus', function () {
    gulp.src('styles/app.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./'))
        .pipe(connect.reload());
});

gulp.task('reload', function() {
    gulp.src('index.html')
        .pipe(connect.reload());
});

gulp.task('default', ['connect', 'watch']);

