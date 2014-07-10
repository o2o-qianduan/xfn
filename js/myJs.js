 $(function(){
  $( "#tabs" ).tabs();
})


/*****新品推荐、特惠专区、新鲜蔬菜部分 *************june**---start*/
var tabOptionIndex=0;
$(function(){
	$(".tabOption span").mouseover(function(){
		tabOptionIndex=$(".tabOption span").index(this);
		tabOptionHover1(tabOptionIndex);

	});
});
function tabOptionHover1(tabOptionIndex){
	for(var i=0;i<2;i++){
		$(".tabOption").removeClass('tabOn'+i);
		$(".tab-0").removeClass('tabOn-'+i);
		}
	$(".tabOption").eq(tabOptionIndex).addClass('tabOn'+tabOptionIndex);
	$(".tab-0").eq(tabOptionIndex).addClass('tabOn-'+tabOptionIndex);
}

/**************首页顶部广告可关闭部分******************june****************************/
$(function(){
$(".bg_button").bind("click",function(){
    $(".bg").css({"display":"none"});
  });	
})
/*************首页顶部广告可关闭部分结束***************june*********************************/


/*首页"全部产品分类"部分在首页时其菜单固定显示，在其它页面时鼠标一移过才显示*/
$(function(){
	$(".no-mainpage").css({"display":"none"});
});
$(function(){
	$(".all_classify").mouseover(function(){
		$(".no-mainpage").css({"display":"block",
								"z-index":"230",
								"background-color":"#ffffff",
								"position":"absolute"})
	});
	$("#YMenu").mouseover(function(){
		 $(this).find(">ul").css({"display":"block",
							 "z-index":"2300",
							 "background-color":"#ffffff",
							 "position":"absolute"})
	});
	$(".no-mainpage >li").mouseover(function(){
		 $(".no-mainpage >li>ul").css({"display":"block"})
	});
	$("#YMenu").mouseout(function(){
		 $(".no-mainpage").css({"display":"none"})
	});
	
})
/*首页"全部产品分类"部分**************************june*/



/*****超值抢购、本季热卖、本周推荐、新品上市、限时抢购 *************june**---start*/
 $(function(){
     $(".SmenuTitle ul li").mouseover(function(){
         tabOptionIndex=$(".SmenuTitle ul li").index(this);
         tabOptionHover2(tabOptionIndex);

     });
 });
 function tabOptionHover2(tabOptionIndex){
     for(var i=0;i<5;i++){
         $(".SmenuTitle ul li").removeClass('SmenuTitleOn'+i);
         $(".SmenuCont").removeClass('SmenuContentOn'+i);
     }
     $(".SmenuTitle ul li").eq(tabOptionIndex).addClass('SmenuTitleOn'+tabOptionIndex);
     $(".SmenuCont").eq(tabOptionIndex).addClass('SmenuContentOn'+tabOptionIndex);
 }
 /*****超值抢购、本季热卖、本周推荐、新品上市、限时抢购 *************june**---end*/

 /*----轮播----start*/
$(function(){
	var banner=$("#banner-left");
	var imgs=$("#banner-left a");
	var len=imgs.length;
	var index=0;
	var adTimer;
	$(".points").mouseover(function(){
		index=$(".points").index(this);
		showImg(index);
	}).eq(0).mouseover();
	// 滑入停止播放幻灯片，滑出循环播放
	banner.hover(function(){
			clearInterval(adTimer);
	},function(){
		adTimer=setInterval(function(){
			showImg(index);
			index++;
			if(index==len){index=0;}
		},3000);
	}).trigger("mouseleave");
})
// 显示不同幻灯片
function showImg(index){
	var adwidth=$("#banner-left").width();
	$("#banner-wrap").stop(true,false).animate({left:-adwidth*index},1000);
	$(".points").removeClass('cupoint')
	            .eq(index).addClass('cupoint');
}
/*----轮播----end*/