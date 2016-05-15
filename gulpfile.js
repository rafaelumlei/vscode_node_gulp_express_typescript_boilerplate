var gulp = require('gulp');
var gutil = require('gulp-util');
var ts = require('gulp-typescript');
var clean = require('gulp-clean');
var server = require('gulp-develop-server');
var mocha = require('gulp-mocha');
var sourcemaps = require('gulp-sourcemaps');

var serverTS = ["**/*.ts", "!node_modules/**", '!bin/**'];

gulp.task('ts', ['clean'], function () {
    return gulp
        .src(serverTS, { base: './' })
        .pipe(sourcemaps.init())
        .pipe(ts({ module: 'commonjs', noImplicitAny: true }))
        .pipe(sourcemaps.write('./', {
            includeContent: false,
            sourceRoot: function(fileObj) {
                var sourceRoot = '';
                var depth = fileObj.sourceMap.file.split('/').length - 1;
                
                for (var index = 0; index < depth; index++) 
                    sourceRoot = sourceRoot + '../';
                
                return sourceRoot;
            }
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('clean', function () {
    return gulp
        .src([
            'app.js',
            '**/*.js',
            '**/*.js.map',
            '!node_modules/**',
            '!gulpfile.js',
            '!bin/**'
        ], { read: false })
        .pipe(clean())
});

gulp.task('load:fixtures', function (cb) {
    var load = require('./fixtures/load');
    return load.loadData(cb);
});

gulp.task('server:start', ['ts'], function () {
    server.listen({ path: 'bin/www' }, function (error) {
        console.log(error);
    });
});

gulp.task('server:restart', ['ts'], function () {
    server.restart();
});

gulp.task('default', ['server:start'], function () {
    gulp.watch(serverTS, ['server:restart']);
});

gulp.task('test', ['ts', 'load:fixtures'], function () {
    return gulp
        .src('test/*.js', { read: false })
        // wait for dev server to start properly :(
        //.pipe(wait(600))
        .pipe(mocha())
        .once('error', function () {
            process.exit(1);
        })
        .once('end', function () {
            process.exit();
        });
});
