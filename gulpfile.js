var gulp = require('gulp'), // Подключаем Gulp
    browserSync = require('browser-sync'), // Подключаем Browser Sync
    fileSystem = require('fs');


gulp.task('browser-sync', function () { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'html-css_home-works' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch('**/**/**/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('**/**/**/*.css', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    // Наблюдение за другими типами файлов
});

gulp.task('default', ['watch']);
