var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

const reload = browserSync.reload;

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch("src/*.scss", ['sass']);
    gulp.watch("index.html").on('change', reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/*.scss")
        .pipe(sass())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);