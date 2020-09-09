(function (root) {
    function listControl(data, wrap) {


        var list = document.createElement("div"), //list主盒子
            dl = document.createElement('dl'),
            dt = document.createElement('dt'),
            close = document.createElement("div"),
            musicList = []; //装所有的曲目

        list.className = "list";
        dt.innerText = "播放列表";
        close.className = "close";
        close.innerText = "关闭";
        dl.appendChild(dt)
        data.forEach(function (ele, index) {
            var dd = document.createElement("dd");
            dd.addEventListener('touchend',function () {
            changeSelect(index)
              })
            dd.innerText = ele.name;
            dl.appendChild(dd);
            musicList.push(dd);

        });
        list.appendChild(dl);
        list.appendChild(close);
        wrap.appendChild(list);

        var disY = list.offsetHeight;
        list.style.transform = "translateY(" + disY + "px)";
        // 点击关闭按钮
        close.addEventListener('touchend',slideDown);

        function slideUp() {
            list.style.transition = ".7s";
            list.style.transform = "translateY(0)"
        };

        function slideDown() {
            list.style.transition = ".7s";
            list.style.transform = "translateY(" + disY + "px)"
        };
        changeSelect(0)

        function changeSelect(index) {
            for (var i = 0; i < musicList.length; i++) {
                musicList[i].className = ""
                
            }
            musicList[index].className = "active";
            
        }



        return {
            musicList:musicList,
            slideUp: slideUp,
            slideDown: slideDown,
            changeSelect:changeSelect
        }


    }


    root.listControl = listControl;

})(window.player || (window.player = {}))