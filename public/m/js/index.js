(function(window){

    //1.mui轮播图初始化
    var gallery = mui('.mui-slider');
    gallery.slider({
    interval:2000//自动轮播周期，若为0则不自动播放，默认为0
});
// swiper轮播图初始化
var swiper = new Swiper('.slide .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay:true
  });



 //2.scroll 控件初始化
 mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});

// swiper区域滚动
var swiper = new Swiper('#main>.swiper-container ', {
    direction: 'vertical',
    slidesPerView: 'auto',
    freeMode: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    mousewheel: true,
  });


})(window)