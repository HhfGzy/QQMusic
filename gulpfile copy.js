// const gulp = require('gulp')
// console.log(gulp);
// function defaultTask(cb) {
//     console.log(gulp);
//     cb();
//   }
  
//   exports.default = defaultTask
// const {series,parallel} = require('gulp');
// function a(cb) {
//     console.log('a执行');
//     cb()
// }
// function b(cb) {
//     console.log('b执行');
//     cb()
// };
// function c(cb) {
//     console.log('c执行');
//     cb()
// };
// exports.a = a
// exports.b = b;
// exports.default = a;
// exports.default = series(a,b);
// exports.default = parallel(a,b,c);
// exports.default = series(a,parallel(b,c))

const {series,src,dest,watch} = require('gulp')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')


function a() {
    return src('./src/js/*.js')
        .pipe(dest('dist/js'))
        .pipe(uglify())
        .pipe(rename('.min.js'))
        .pipe(dest('dist/js'))
  }
  watch('./src/css/index.less',{
      delay:2000
  },function (cb) {
      console.log('css文件被改动');
      cb()
    })
exports.default = a;
