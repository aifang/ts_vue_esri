var gulp = require('gulp'),
    // watch = require('gulp-watch'),
    ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig_gulp.json');

gulp.task('ts', function () {
    var tsResult = tsProject.src()
        .pipe(tsProject());

    return tsResult.js.pipe(gulp.dest('dist/gis'));
});

gulp.task('watch',function(){
    gulp.watch('./src/gis/**/*.ts',['ts']);
})
 
gulp.task('default',['ts']);

// gulp.task('stream', function () {
//     // Endless stream mode 
//     return watch('css/**/*.css', { ignoreInitial: false })
//         .pipe(gulp.dest('build'));
// });
 
// gulp.task('callback', function () {
//     // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event 
//     return watch('css/**/*.css', function () {
//         gulp.src('css/**/*.css')
//             .pipe(gulp.dest('build'));
//     });
// });