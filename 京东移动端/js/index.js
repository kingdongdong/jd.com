/**
 * Created by HiWin10 on 2017/9/18.
 */
//����ߴ�����
var doc = document,
    win = window,
    oBody = doc.documentElement || doc.body,
    resize = "onorientationchange" in win ? "orientationchange" : "resize";
rem();
addEventListener(resize, rem, false);
function rem() {
    /*doc.body.clientWidth�ǻ�ȡ��ǰ��body�Ŀ�ȣ�640�����ǵ��ƶ��˵�����ȣ�����ͻ�ó�һ���������ڳ���100px���ͻ�ó����ǵ�ǰ��1rem���ڶ���px*/
    oBody.style.fontSize = 100 * (doc.body.clientWidth / 640) + "px";
    console.log(oBody.style.fontSize);
};

 var mySwiper = new Swiper ('#swiper1', {
	
	keyboard: {
    enabled: true,
    onlyInViewport: false,
	},
    loop: true,
	
    // �����Ҫ��ҳ��
    pagination: {
      el: '.swiper-pagination',
	  clickable :true,
	  dynamicBullets: true,
	  dynamicMainBullets: 2
    },

	effect : 'cube',
	  cubeEffect: {
		slideShadows: false,
		shadow: false,
		shadowOffset: 0,
	  },
	 autoplay:true,
	 speed:5000,
	  })  
	  mySwiper.el.onmouseover = function(){
		mySwiper.autoplay.stop();
	}
		mySwiper.el.onmouseout = function(){
		  mySwiper.autoplay.start();
		}
	var mySwiper2 = new Swiper ('#swiper2', {
    direction: 'vertical',
		
    autoplay:true,
    loop: true,
   
  }) 
  var mySwiper3 = new Swiper ('#swiper3', {
    loop: false,
	freeMode: true,
	mousewheel: {
		sensitivity : 0.1,
	},
  })  
  //header����
	var oHeader = document.getElementsByClassName("header")[0];
	
	window.onscroll = function () {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollTop>220){
			oHeader.style.background = "transparent";
		}else{
			oHeader.style.background = "#e4393c";
		}
	};
 