const {
    series,
    src,
    dest,
    watch
} = require('gulp')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const htmlClean = require('gulp-htmlclean'); //压缩html
const less = require('gulp-less'); //转化less代码
const cssClean = require('gulp-clean-css'); //压缩css代码
const stripDebug = require("gulp-strip-debug"); //去除调试代码
const imgMin = require('gulp-imagemin'); //压缩图片
const connect = require("gulp-connect");//服务器
const folder = {
    src: 'src/',
    dist: 'dist/'
}

function html() {
    return src(folder.src + "/html/*.html")
        .pipe(htmlClean())
        .pipe(dest(folder.dist + '/html'))
        .pipe(connect.reload());
}

function css() {
    return src(folder.src + 'css/*.less')
        .pipe(less())
        .pipe(cssClean())
        .pipe(dest(folder.dist + "css"))
        .pipe(connect.reload());

}

function js() {
    return src(folder.src + "js/*.js")
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(dest(folder.dist + 'js/'))
        .pipe(connect.reload());

}

function img() {
    return src(folder.src + 'images/*')
        .pipe(imgMin())
        .pipe(dest(folder.dist + "images/"))
}

// 开启服务器
function server(cb) {
    connect.server({
        port: '5002',
        livereload: true //自动更新，需要配合文件监听
    })
    cb()
};

watch(folder.src + "html/*", {}, function (cb) {
    html();
    cb();
})
watch(folder.src + "css/*", {}, function (cb) {
    css();
    cb();
})
watch(folder.src + "js/*", {}, function (cb) {
    js();
    cb();
})


exports.default = series(html, css, js, img, server)