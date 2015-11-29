import gulp from 'gulp'
import sass from 'gulp-ruby-sass'
import gulpLoadPlugins from 'gulp-load-plugins'
import browserify from 'browserify'
import watchify from 'watchify'
import babelify from 'babelify'
import babel from 'gulp-babel'
import source from 'vinyl-source-stream'
import config from './config'
import electronConnect from 'electron-connect'

const path = config.path;
const $ = gulpLoadPlugins();
const electron = electronConnect.server.create();


/**
 * html
 */
gulp.task('html', () => {
    gulp.src(path.html.src + '/index.html')
        .pipe(gulp.dest(path.html.dist));
});

/**
 * styles
 */
gulp.task('styles', () => {
    return sass(path.style.src + '**/*.scss', {
       style: 'expanded'
    })
    .pipe($.plumber({
        errorHandler: $.notify.onError("Error: <%= error.message %>") //<-
    }))
    .pipe(gulp.dest(path.style.dist));
});

/**
 * serve
 */
gulp.task('serve', () => {
    gulp.src('./main/main.js')
        .pipe($.plumber({
            errorHandler: $.notify.onError("Error: <%= error.message %>")
        }))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./'));

    // Start browser process
    electron.start();

    // Restart browser process
    gulp.watch('main.js', electron.restart);

    // Reload renderer process
    gulp.watch([
        'index.html',
        path.script.dist + '**/*.js',
        path.style.dist + '**/*.css'
    ], electron.reload);
});

/**
 * browserify
 */
gulp.task('browserify', function() {
    return jsCompile(false);
} );

/**
 * watchify
 */
gulp.task('watchify', function() {
    return jsCompile(true);
} );

function jsCompile(isWatch) {
    const props = {
        entries: path.script.src + 'index.js',
        debug: true
    };

    let bundler;

    if ( isWatch ) {
        bundler = watchify(browserify(props).transform(babelify, {presets: ["es2015", "react"]}));
    } else {
        bundler = browserify(props).transform(babelify, {presets: ["es2015", "react"]});
    }

    function rebundle() {
        return bundler
            .bundle()
            .on('error', function(err) {
                console.log($.util.colors.red(err));
                this.emit('end');
            })
            .pipe(source('app.js'))
            .pipe(gulp.dest(path.script.dist));
    }
    bundler.on('update', function() {
        rebundle();
    } );
    bundler.on('log', function( message ) {
        console.log( message );
    } );
    return rebundle();
}


gulp.task('watch', ['watchify'], function() {
    gulp.watch([path.style.src + '/**/*.scss'], ['styles']);
});

gulp.task('default', ['serve', 'html', 'styles', 'browserify', 'watch']);
