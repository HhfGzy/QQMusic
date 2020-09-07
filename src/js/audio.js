(function (root) {
    function AudioManage() {
        this.audio = new Audio();
        this.status = 'pause'
    }
    AudioManage.prototype = {
        // 加载音乐
        load: function (src) {
            this.audio.src = src; //设置音乐的路径
            this.audio.load(); //加载音乐
        },

        // 播放音乐
        play: function () {
            this.audio.play();//调用内置方法
            this.status = "play"//将值状态设置成播放
        },

        // 暂停音乐
        pause: function () {
            this.audio.pause();
            this.status = "pause"
        },

        // 音乐播放结束
        end: function (fn) {
            this.audio.onended = fn;//当音乐播放结束后调用的方法
        },
        //音乐跳转到某个节点
        playTo: function (time) {
            this.audio.currentTime = time
        }
    };
    root.music = new AudioManage();
})(window.player || (window.player = {}))//容错处理