/**june***首页图片轮播***start***/
$(document).ready(function(){
    var num=$('.slide_span span').length;
    var i_mun=0;
    var timer_banner=null;
    $('.slide_ul li:gt(0)').hide();//页面加载隐藏所有的li 除了第一个   
//底下小图标点击切换
    $('.slide_span span').click(function(){
        $(this).addClass('slide_span_one')
               .siblings('span').removeClass('slide_span_one');
        var i_mun1=$('.slide_span span').index(this);
        $('.slide_ul li').eq(i_mun1).fadeIn('slow')
                               .siblings('li').fadeOut('slow');
        i_mun=i_mun1;
    });   
//左边箭头点击时切换
    $('.slide_left').click(function(){
        if(i_mun==0){
            i_mun=num
        }
        //大图切换
        $('.slide_ul li').eq(i_mun-1).fadeIn('slow')
                                   .siblings('li').fadeOut('slow');
        //小图切换
        $('.slide_span span').eq(i_mun-1).addClass('slide_span_one')
                   .siblings('span').removeClass('slide_span_one');
        i_mun--
    });
//鼠标移动到幻灯片上时 显示左右切换案例
    $('.slide').mouseover(function(){
        $('.slide_left').show();
        $('.slide_right').show();
    });
//鼠标离开幻灯片上时 隐藏左右切换案例
    $('.slide').mouseout(function(){
        $('.slide_left').hide();
        $('.slide_right').hide();
    });   
    //自动播放函数
    function bannerMoveks(){
        timer_banner=setInterval(function(){
            move_banner()
        },4000)
    };
    bannerMoveks();//开始自动播放
    //鼠标移动到banner上时停止播放
    $('.slide').mouseover(function(){
        clearInterval(timer_banner);
    });
    //鼠标离开 banner 开启定时播放
    $('.slide').mouseout(function(){
        bannerMoveks();
    });
//banner 右边点击执行函数
   function move_banner(){
            if(i_mun==num-1){
                i_mun=-1
            }
            //大图切换
            $('.slide_ul li').eq(i_mun+1).fadeIn('slow')
                                       .siblings('li').fadeOut('slow');
            //小图切换
            $('.slide_span span').eq(i_mun+1).addClass('slide_span_one')
                       .siblings('span').removeClass('slide_span_one');
            i_mun++    
        }
})
/****june***首页图片轮播***end***/

// bing***价格，销售量，时间选择项****
$(function(){
    $('.choice li').click(function(){
        $(this).find('a').addClass('active-chioce').end().siblings().find('a').removeClass('active-chioce');
        $(this).find('span').removeClass('current').end().siblings().find('span').addClass('current');
    })
})