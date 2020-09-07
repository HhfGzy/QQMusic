(function ($, player) {

    function MusicPlayer(dom) { //构造函数，并且传入的dom是主容器
        this.dom = dom; //播放器的容器 
        this.dataList = []; //用于装请求到的数据
        this.now = 1; //表示现在正在运行的值
        this.rotateTimer = null; //用于清除定时器，在设置图片旋转时候的值
    }
    MusicPlayer.prototype = { //在原型上定义方法
        init: function () { //初始化函数
            this.getDom(); //获取所有的元素
            this.getData("../mock/data.json"); //获取数据

        },
        getDom: function () { //获取dom元素的方法
            this.record = document.querySelector('.songImg img'); //获取img图片
            this.controlBtns = document.querySelectorAll('.control li'); //获取所有的下方按钮
            this.wrapper = document.querySelector('#wrap'); //获取主容器
        },
        getData: function (url) { //获取数据的方法
            var This = this; //绑定this
            $.ajax({ //ajax请求数据
                url: url,
                method: "get",
                success: function (data) { //当数据请求到之后的处理函数
                    This.dataList = data; //数据保存
                    console.log(data);
                    This.loadMusic(This.now); //渲染页面
                    This.musicControl(); //所有点击事件可以执行
                    // This.imgRotate(0);//转动图片
                },
                error: function () {
                    console.log("失败");
                }
            });
        },
        loadMusic: function (index) { //当请求到数据的时候再加载音乐
            var This = this; //绑定this
            player.render(this.dataList[index]); // 渲染页面
            player.music.load(this.dataList[index].audioSrc); // 加载音乐
            // 播放音乐
            if (player.music.status === "play") {
                player.music.play(); //调用play方法
                // 让按钮变化
                this.controlBtns[2].className = 'playing'; //改变class
            } else {
                this.controlBtns[2].className = ''; //默认是停止的按钮
            }

        },
        musicControl: function () { // 控制音乐,上下切歌曲，和暂停
            var This = this; //绑定this指向
            // 前一首按键
            This.controlBtns[1].addEventListener('touchend', function () {
                player.music.status = 'play';
                This.loadMusic(--This.now); //再次渲染页面
                This.imgRotate(0); //点击时候转动图片

            });
            // 后一首按键
            This.controlBtns[3].addEventListener('touchend', function () {
                player.music.status = 'play';
                This.loadMusic(++This.now); //再次渲染页面
                This.imgRotate(0); //点击时候转动图片
            });
            // 暂停、播放按键
            This.controlBtns[2].addEventListener('touchend', function () {
                if (player.music.status === "play") { // 播放状态
                    This.controlBtns[2].className = ''; // 让按钮变化成关闭状态
                    player.music.pause(); //停止播放
                    This.imgStop();
                } else { //停止状态
                    This.controlBtns[2].className = 'playing'; //按钮变成关闭状态
                    player.music.play(); //继续播放
                    var deg = This.record.dataset.rotate || 0; //记录deg的值,如果之前没有就使用默认的值
                    This.imgRotate(+deg); //点击时候转动图片
                }
            })
        },
        imgRotate: function (deg) { //图片旋转
            var This = this;
            clearInterval(this.rotateTimer); //清空定时器
            this.rotateTimer = setInterval(function () { //没隔一定事件加一个角度
                deg = deg + 0.3;
                This.record.style.transform = 'rotate(' + deg + 'deg)';
                This.record.dataset.rotate = deg; //添加自定义属性用来保存角度
            }, 1000 / 60); //这个时间是计算机能渲染的最流畅的时间

        },
        imgStop: function () {
            clearInterval(this.rotateTimer);
        }

    }



    var musicPlayer = new MusicPlayer(document.querySelector('#wrap'));
    musicPlayer.init();



})(window.Zepto, window.player)