'use strict'

const { src, dest } = require('gulp')
const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const cssbeautify = require('gulp-cssbeautify')
const removeComments = require('gulp-strip-css-comments')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const cssnano = require('gulp-cssnano')
const rigger = require('gulp-rigger')
const uglify = require('gulp-uglify')
const plumber = require('gulp-plumber')
const imagemin = require('gulp-imagemin')
const del = require('del')
const livereload = require('gulp-livereload')
const panini = require('panini')
const browsersync = require('browser-sync').create()


/* Paths */
var path = {
   build: {
      html: 'dist/',
      js: 'dist/assets/js/',
      scss: 'dist/assets/css/',
      css: 'dist/assets/css/',
      images: 'dist/assets/img/'
   },
   src: {
      html: 'src/*.html',
      js: 'src/assets/js/*.js',
      scss: 'src/assets/sass/style.scss',
      css: 'src/assets/css/*.css',
      images: 'src/assets/img/**/*.{jpg,png,svg,gif,ico}'
   },
   watch: {
      html: 'src/**/*.html',
      js: 'src/assets/js/**/*.js',
      scss: 'src/assets/sass/**/*.scss',
      css: 'src/assets/css/**/*.css',
      images: 'src/assets/img/**/*.{jpg,png,svg,gif,ico}'
   },
   clean: './dist'
}


/* Tasks */
function browserSync(done) {
   browsersync.init({
      server: {
         baseDir: './dist/'
      },
      port: 3000
   })
}


function browserSyncReload(done) {
   browsersync.reload()
}


function html() {
   return src(path.src.html, { base: 'src/' })
      .pipe(plumber())
      .pipe(dest(path.build.html))
      .pipe(browsersync.reload({ stream: true }))
}

function scss() {
   return src(path.src.scss, { base: 'src/assets/sass/' })
      .pipe(plumber())
      .pipe(sass())
      .pipe(autoprefixer({
         Browserslist: ['last 8 versions'],
         cascade: true
      }))
      .pipe(cssbeautify())
      .pipe(dest(path.build.scss))
      .pipe(cssnano({
         zindex: false,
         discardComments: {
            removeAll: true
         }
      }))
      .pipe(removeComments())
      .pipe(rename({
         suffix: '.min',
         extname: '.css'
      }))
      .pipe(dest(path.build.scss))
      .pipe(browsersync.reload({ stream: true }))
   // .pipe(livereload());

}

function css() {
   return src(path.src.css, { base: 'src/assets/css/' })
      .pipe(plumber())
      .pipe(sass())
      .pipe(autoprefixer({
         Browserslist: ['last 8 versions'],
         cascade: true
      }))
      .pipe(cssbeautify())
      .pipe(dest(path.build.css))
      .pipe(cssnano({
         zindex: false,
         discardComments: {
            removeAll: true
         }
      }))
      .pipe(removeComments())
      .pipe(rename({
         suffix: '.min',
         extname: '.css'
      }))
      .pipe(dest(path.build.css))
      .pipe(browsersync.reload({ stream: true }))
}

function js() {
   return src(path.src.js, { base: './src/assets/js/' })
      .pipe(plumber())
      .pipe(rigger())
      .pipe(gulp.dest(path.build.js))
      .pipe(uglify())
      .pipe(rename({
         suffix: '.min',
         extname: '.js'
      }))
      .pipe(dest(path.build.js))
      .pipe(browsersync.reload({ stream: true }))
}

function images() {
   return src(path.src.images)
      .pipe(imagemin())
      .pipe(dest(path.build.images))
      .pipe(browsersync.reload({ stream: true }))
}

function clean() {
   return del(path.clean)
}

function watchFiles() {
   gulp.watch([path.watch.html], html)
   gulp.watch([path.watch.scss], scss)
   gulp.watch([path.watch.css], css)
   gulp.watch([path.watch.js], js)
   gulp.watch([path.watch.images], images)
}

const build = gulp.series(clean, gulp.parallel(html, scss, css, js, images))
const watch = gulp.parallel(build, watchFiles, browserSync)


/* Exports Tasks */
exports.html = html
exports.scss = scss
exports.css = css
exports.js = js
exports.images = images
exports.clean = clean
exports.browserSync = browserSync
exports.browserSyncReload = browserSyncReload
exports.build = build
exports.watch = watch
exports.default = watch
