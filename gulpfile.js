var gulp = require('gulp'),
    rjs = require('gulp-requirejs')
    sourcemaps = require('gulp-sourcemaps');

gulp.task('build', function() {
    return rjs({
        baseUrl: 'src/base/custom.js',
        out: 'custom.js',
        generateSourceMaps: true,
        shim: {
            // standard require.js shim options
        },
        // ... more require.js options
    })
    .pipe(sourcemaps.init({loadMaps: true})) // initialize gulp-sourcemaps with the existing map
    .pipe(sourcemaps.write()) // write the source maps
    .pipe(gulp.dest('./deploy/')); // pipe it to the output DIR
});

gulp.task('default', [ 'build' ]);