//渲染功能：渲染图片，音乐信息，是否喜欢
(function(root){

  // 渲染图片
  function renderImg(src) {
    root.blurImg(src);//添加背景
    var img = document.querySelector(".songImg img");
    img.src = src;
  }
  // 渲染音乐信息
  function renderInfo(data) {
    var songInfoChildren = document.querySelector('.songInfo').children;;
    songInfoChildren[0].innerHTML = data.name;
    songInfoChildren[1].innerHTML = data.singer;
    songInfoChildren[2].innerHTML = data.album;

  }
  // 渲染是否喜欢图标
  function renderIsLike(isLike) {
    var lis = document.querySelectorAll('.control li');
    lis[0].className = isLike ? "liking" : ''
  }
  
// 里面的data是数组中的每一项的值
  root.render = function(data){
    renderImg(data.image);
    renderInfo(data);
    renderIsLike(data.isLike);
    
  }
})(window.player || (window.player = {}))//后面是为了容错