
/***********首页最顶端图片向左向右切换**********bing********start************/
$(function(){
    var page = 1;
    var i = 3; //每版放3个图片

    // 点击向后按钮
    $("#next_pic").click(function(){
        var $parent = $(this).parents("div.jscroll");//寻找当前元素的父元素
        var $v_out = $parent.find("div.o-list");//视频外围
        var $v_show = $parent.find("div.v-bot-list");//视频播放区域
        var v_width = $v_out.width();//外围宽度
        var len = $v_show.find("li").length; //图片数量
        var page_count = Math.ceil(len / i) ; //页面数目
         if( !$v_show.is(":animated") ){    //判断“视频内容展示区域”是否正在处于动画
              if( page == page_count ){  //已经到最后一个版面了,如果再向后，必须跳转到第一个版面。
                $v_show.animate({ left : '0px'}, "slow"); //通过改变left值，跳转到第一个版面
                page = 1;
              }else{
                $v_show.animate({ left : '-='+v_width }, "slow");  //通过改变left值，达到每次换一个版面
                page++;
             }
         }

    });

    //点击向前按钮
    $("#prev_pic").click(function(){
        var $parent = $(this).parents("div.jscroll");
        var $v_out = $parent.find("div.o-list");
        var $v_show = $parent.find("div.v-bot-list");
        var v_width = $v_out.width();
        var len = $v_show.find("li").length;
        var page_count = Math.ceil(len / i);
        if(!$v_show.is(":animated")){
            if (page == 1) {
                $v_show.animate({left : "-="+v_width*(page_count-1)},"slow");
                page = page_count;
            }else{
                $v_show.animate({left : '+='+v_width},"slow");
                page--;
            }
        }
    });

    $("#img1").click(function(){

        $parent = $(this).parents("div.right_product");
        $v_out = $parent.find("div.pro");
        $v_show = $parent.find("div.pro2");
        var v_height = $v_out.height();
        var len = $v_show.find("li").length;
        var page_count = Math.ceil(len / i);
        if(!$v_show.is(":animated")){
            if(page==page_count){
                 $v_show.animate({top : '0px'},"slow");
                page=1;
            }else{
                 $v_show.animate({top : '-='+v_height},"slow");
                page++;
            }
        }
    });

      $("#img2").click(function(){
        $parent = $(this).parents("div.right_product");
        $v_out = $parent.find("div.pro");
        $v_show = $parent.find("div.pro2");
        var v_height = $v_out.height();
        var len = $v_show.find("li").length;
        var page_count = Math.ceil(len / i);
        if(!$v_show.is(":animated")){
            if(page==1){
                 $v_show.animate({top :  "-="+v_height*(page_count-1)},"slow");
                page=page_count;
            }else{
                 $v_show.animate({top : '+='+v_height},"slow");
                page--;
            }
        }
    });

})
/***********首页最顶端图片向左向右切换**********bing********end************/

/***产品详情页中图片预览向左向右轮播部分*****june*******start****/
$(function(){
    var page = 1;
    var i = 5; //每版放5个图片

    // 点击向后按钮
    $("#right-choice").click(function(){
        var $parent = $(this).parents("div.left_banner");//寻找当前元素的父元素
        var $v_out = $parent.find("div.i-list");//视频外围
        var $v_show = $parent.find("div.i-bot-list");//视频播放区域
        var v_width = $v_out.width();//外围宽度
        var len = $v_show.find("li").length; //图片数量
        var page_count = Math.ceil(len / i) ; //页面数目
        var yushu=parseInt(i/5);//每5个li为一组，判断出现的组数，觉得空余宽度
        var wid;//空余的宽度
        wid=yushu*40;
         if( !$v_show.is(":animated") ){    //判断“视频内容展示区域”是否正在处于动画
              if( page == page_count ){  //已经到最后一个版面了,如果再向后，必须跳转到第一个版面。
                $v_show.animate({ left : '0px'}, "slow"); //通过改变left值，跳转到第一个版面
                page = 1;
              }else{
                $v_show.animate({ left : '-='+(v_width-wid )}, "slow");  //通过改变left值，达到每次换一个版面
                page++;
             }
         }

    });
 })
$(function(){
    var page = 1;
   var i = 5; //姣忕増鏀¾5涓ª鍥剧墖

    //点击向前按钮
    $("#left-choice").click(function(){
        var $parent = $(this).parents("div.left_banner");
        var $v_out = $parent.find("div.i-list");
        var $v_show = $parent.find("div.i-bot-list");
        var v_width = $v_out.width();
        var len = $v_show.find("li").length;
        var page_count = Math.ceil(len / i);
         var yushu=parseInt(i/5);//每5个li为一组，判断出现的组数，觉得空余宽度
        var wid;//空余的宽度
        wid=yushu*40;
        if(!$v_show.is(":animated")){
            if (page == 1) {
                $v_show.animate({left : "0px"},"slow");
                page = 1;
            }else if(page>1){
                $v_show.animate({left : '+='+(v_width+wid)},"slow");
                page--;
            }
        }
    });

})


/***产品详情页中图片预览向左向右轮播部分*****june*********end*****/


// ***bing***资讯首页图片轮播***start***
$(function(){
    var $imgscroll = $('#img_bottom #slideSpan span');
    var len = $imgscroll.length;
    var index = 0;
    var adTimer = null;
    $imgscroll.mousemove(function(){
        index = $imgscroll.index(this);
        showHomePage(index);
    }).eq(0).mouseover();

    $('#page_left_0').hover(function(){
        if(adTimer){
            clearInterval(adTimer);
          }
        },function(){
            adTimer = setInterval(function(){
                showHomePage(index);
                index++;
                if(index == len){
                    index = 0;
                }
            },3000);     
    }).trigger("mouseleave");
})

function showHomePage(index){
    var $rollobj = $('#page_left_0');
    var $rollList = $rollobj.find("#slideSpan span");
     $('#page_img').find("img").eq(index).stop(true,true).fadeIn("slow").siblings().fadeOut("slow");

    $rollList.removeClass("newBg").eq(index).addClass("newBg");
}
// ***bing***资讯首页图片轮播***end***