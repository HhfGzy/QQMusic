# gulp 
 ## 下载
  - npm i -D gulp 
  - npm i -g gulp-cli

 ## 导入 
  > require('gulp'),是一个对象，因此可以用解构方法导入对应的方法
   - series(任务1,任务2):任务会依次执行
   - parallel(任务1,任务2)：任务会一起执行
   - src(输入文件)
   - dest(输出文件夹)
   - watch(文件,{配置},处理函数):监听文件变化

 ## 插件
  - gulp-uglify : 压缩js文件
  - gulp-rename : 重命名文件
  - gulp-strip-debug : js去除调试代码(console.log(),debug)
  - gulp-htmlclean : 压缩html文件   
  - gulp-imagemin  : 压缩图片
  - gulp-clean-css : 压缩css
  - gulp-connect : 服务器
    - connect.server({port:}):开启服务器
    - connect.reload():开启热加载
  - gulp-less : 将less文件转化成css文件
  