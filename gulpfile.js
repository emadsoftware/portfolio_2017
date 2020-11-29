const { watch, src, dest, series, parallel } = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const del = require('del');
const minifyHTML = require('gulp-minify-html');
const gulpCleanCss = require('gulp-clean-css');

const clean = () => del([ 'docs' ]);

function html(){
    return src('src/**/*.{htm,html}')
        .pipe(minifyHTML())
        .pipe(dest('docs/'));
}

function imgs(){
    return src('src/images/**/*')
        .pipe(dest('docs/images'));
}

function styles() {
    return src('src/lib/style.css', { allowEmpty: true })
        .pipe(cleanCSS())
        .pipe(rename({
            basename: 'main',
            suffix: '.min'
        }))
        .pipe(dest('docs/lib/styles'))
}

function scripts() {
    return src('src/lib/*.js', { allowEmpty: true })
        .pipe(minify({noSource: true}))
        .pipe(dest('docs/lib/js'))
}

const build = series(clean, parallel(html, imgs, styles, scripts));

exports.styles = styles;
exports.scripts = scripts;
exports.clean = clean;
exports.blean = build;

exports.default = build;