'use strict';
var gulp = require('gulp'),
    browserSync = require('browser-sync');

var path = {
    html: '**/*.html',
    js: '**/*.js',
    css: '**/*.css'
};


var serverConfig = {
    server: {},
    host: 'localhost',
    port: 9000,
    logPrefix: 'NASA',
    notify: false
};

// html
gulp.task('bundleHtml', function () {
    gulp.src(path.html)
        .pipe(browserSync.reload({stream: true}))
});

// sass to css
gulp.task('bundleCSS', function () {
    return gulp.src(path.css)
        .pipe(browserSync.reload({stream: true}));
});

//js

gulp.task('bundleJs', function () {
    return gulp.src([path.js, '!js/modul8-9/js/lodash.js'])
        .pipe(browserSync.reload({stream: true}));
})

// img
gulp.task('bundleImg', function () {
    return gulp.src(path.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.dist.img))
        .pipe(browserSync.reload({stream: true}));
})

// fonts
gulp.task('bundleFont', function () {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.dist.fonts))
})

// watch
gulp.task('watch', function () {
    gulp.watch(path.html, {cwd: './'}, ['bundleHtml']);
    // gulp.watch(path.src.sass, {cwd: './'}, ['bundleCSS']);
    gulp.watch(path.js, {cwd: './'}, ['bundleJs']);
    gulp.watch(path.css, {cwd: './'}, ['bundleCSS']);
    // gulp.watch(path.src.img, ['bundleImg']);
    // gulp.watch(path.src.fonts, ['bundleFont']);
});

// BrowserSync server
gulp.task('webServer', function () {
    browserSync(serverConfig);
});

// clean dist dir
gulp.task('clean', function () {
    return del.sync(path.clean);
});

// Build task
gulp.task('build', ['bundleHtml', 'bundleCSS', 'bundleJs', 'bundleImg', 'bundleFont']);

// Default task
gulp.task('default', ['webServer', 'watch']);
