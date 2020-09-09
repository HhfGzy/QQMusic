(function (root) {

    function Index(len) {
        this.index = 0; //默认index当前索引值
        this.len = len ;
    }
    Index.prototype = {
        prev: function () { //向前切歌
           return this.get(-1)
        },
        next: function () { //向下切歌
           return this.get(1)
        },
        get: function (val) {
            return this.index = (this.index + val + this.len) % this.len;
        }
    }
    root.controlIndex = Index

})(window.player || (window.player = {}))