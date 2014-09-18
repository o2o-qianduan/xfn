
 
 $(function() {
     $("#tabs").tabs();
 })
 /*****新品推荐、特惠专区、新鲜蔬菜部分 *************june**---start*/
 var tabOptionIndex1 = 0;
 $(function() {
     $(".tabOption span").mouseover(function() {
         tabOptionIndex1 = $(".tabOption span").index(this);
         tabOptionHover1(tabOptionIndex1);
     });
 });
 function tabOptionHover1(tabOptionIndex) {
    var $li_1 = $(".tabOption");
     for (var i = 0; i < $li_1.length; i++) {
         $li_1.eq(tabOptionIndex).addClass('tabOn0').siblings().removeClass('tabOn0');
         $(".tab-0").eq(tabOptionIndex).addClass('tabOn-0').siblings().removeClass('tabOn-0');
     }
 }
 /*****新品推荐、特惠专区、新鲜蔬菜部分 *************june**---end*/ 
 /*****超值抢购、本季热卖、本周推荐、新品上市、限时抢购 *************june**---start*/
 var tabOptionIndex2 = 0; 
 $(function() {  
     var $li_2 = $(".SmenuTitle ul li");
     $li_2.mouseover(function() {
         tabOptionIndex2 = $li_2.index(this);
         tabOptionHover2(tabOptionIndex2);
     });
     $("#assess_nav").children("li").unbind();
 });
 function tabOptionHover2(tabOptionIndex) {
    var $li_2 = $(".SmenuTitle ul li");
    for (var i = 0; i < $li_2.length; i++) {
         $li_2.eq(tabOptionIndex).addClass('SmenuTitleOn0').siblings().removeClass('SmenuTitleOn0');
         $(".SmenuCont").eq(tabOptionIndex).addClass('SmenuContentOn0').siblings().removeClass('SmenuContentOn0');
     }
 }
 /*****超值抢购、本季热卖、本周推荐、新品上市、限时抢购 *************june**---end*/ 
 /***********************首页【最新活动、最新资讯】切换******june******start*/
 var tabOptionIndex3 = 0;
 $(function() {
     $(".newsOption span").mouseover(function() {
         tabOptionIndex3 = $(".newsOption span").index(this);
         tabOptionHover3(tabOptionIndex3);
     });
 });
 function tabOptionHover3(tabOptionIndex) {
    var $li_3 = $(".newsOption")
     for (var i = 0; i < $li_3.length; i++) {
         $li_3.eq(tabOptionIndex).addClass('newsOn0').siblings().removeClass('newsOn0');
         $(".news-0").eq(tabOptionIndex).addClass('newsOn-0').siblings().removeClass('newsOn-0');
     }
 }
 /***********************首页【最新活动、最新资讯】切换******june******end*/
/*********************** 产品详情页“搭配、套餐”的切换******june******start*/
 var tabOptionIndex4 = 0;
 $(function() {
     $(".daOption span").mouseover(function() {
         tabOptionIndex4 = $(".daOption span").index(this);
         tabOptionHover4(tabOptionIndex4);
     });
 });
 function tabOptionHover4(tabOptionIndex) {
     var  $li_4 = $(".daOption");
     for (var i = 0; i < $li_4.length; i++) {
         $li_4.eq(tabOptionIndex).addClass('daOn0').siblings().removeClass('daOn0');
         $(".da-0").eq(tabOptionIndex).addClass('daOn-0').siblings().removeClass('daOn-0');
     }
 }
 /*********************** 产品详情页“搭配、套餐”的切换******june******end*/
 /*********************** 产品详情页“商品详情、评价、成交记录”的切换******june******start*/
 var tabOptionIndex5 = 0;
 $(function() {
     $(".proOption span").mouseover(function() {
         tabOptionIndex5 = $(".proOption span").index(this);
         tabOptionHover5(tabOptionIndex5);
     });
 });
 function tabOptionHover5(tabOptionIndex) {
     var $li_5 = $(".proOption");
     for (var i = 0; i < $li_5.length; i++) {
         $li_5.eq(tabOptionIndex).addClass('proOn0').siblings().removeClass('proOn0');
         $(".pro-0").eq(tabOptionIndex).addClass('proOn-0').siblings().removeClass('proOn-0');
         $(".pro-ass-0").eq(tabOptionIndex).addClass('proOn-0').siblings().removeClass('proOn-0');
     }
 }
 var tabOptionIndex50 = 0;
 $(function() {
     $(".proOption-ass span").mouseover(function() {
         tabOptionIndex50 = $(".proOption-ass span").index(this);
         tabOptionHover50(tabOptionIndex50);
     });
 });
 function tabOptionHover50(tabOptionIndex) {
     var $li_5 = $(".proOption-ass");
     for (var i = 0; i < $li_5.length; i++) {
         $li_5.eq(tabOptionIndex).addClass('pro_ass_selected').siblings().removeClass('pro_ass_selected');
         // $(".pro-0").eq(tabOptionIndex).addClass('proOn-0').siblings().removeClass('proOn-0');
         $(".pro-ass-0").eq(tabOptionIndex).addClass('proOn-ass-0').siblings().removeClass('proOn-ass-0');
     }
 }

 /*********************** 产品详情页“商品详情、评价、成交记录”的切换******june******end*/ 
 /*************资讯列表页“排行榜、问答”切换*****june*************start******/
 var tabOptionIndex6 = 0;
 $(function() {
     $(".rankOption span").mouseover(function() {
         tabOptionIndex6 = $(".rankOption span").index(this);
         tabOptionHover6(tabOptionIndex6);
     });
 })
 function tabOptionHover6(tabOptionIndex) {

     var $li_6 = $(".rankOption");
     for (var i = 0; i < $li_6.length; i++) {
         $li_6.eq(tabOptionIndex).addClass('rankOn0').siblings().removeClass('rankOn0');
         $(".rank-0").eq(tabOptionIndex).addClass('rankOn-0').siblings().removeClass('rankOn-0');
     }
 
 }
 /*************资讯列表页“排行榜、问答”切换**********june******end*/
/*************"激活礼品卡"页“未用完、已用完、已过期”切换*****june******start******/
 var tabOptionIndex7 = 0;
 $(function() {
     $(".useOption span").mouseover(function() {
         tabOptionIndex7 = $(".useOption span").index(this);
         tabOptionHover7(tabOptionIndex7);
     });
 })
 function tabOptionHover7(tabOptionIndex) {
     var $li_7 = $(".useOption");
     for (var i = 0; i < $li_7.length; i++) {
         $li_7.eq(tabOptionIndex).addClass('useOn0').siblings().removeClass('useOn0');
         $(".use-0").eq(tabOptionIndex).addClass('useOn-0' ).siblings().removeClass('useOn-0');
     }
 }
/*************"激活礼品卡"页“未用完、已用完、已过期”切换*****june******end******/


 /**************首页顶部广告可关闭部分******************june**************start**************/
 $(function() {
     $(".bg_button").bind("click", function() {
         $(".bg").css({
             "display": "none"
         });
     });
 })
 /*************首页顶部广告可关闭部分结束***************june**************end*******************/


 /*首页"全部产品分类"部分在首页时其菜单固定显示，在其它页面时鼠标一移过才显示***june*******start******/
$(".all_classify").live("mouseenter",function() {
         $(".no-mainpage").css({
             "display": "block",
             "z-index": "230",
             "background-color": "#ffffff",
             "position": "absolute"
         });
})
 $('.no-mainpage,.all_classify').live("mouseleave", function() {
     if ($('.no-mainpage').is(":visible")) {
         stc = setTimeout(function() {
             $(".no-mainpage").hide();
             clearTimeout(stc);
         }, 10);
     } else {
         $('.no-mainpage').show();
     }
})
 /*******************首页"全部产品分类"部分**************************june*******end********/
 
 $(function() {
     $("#assess_nav").children('li').each(function(idx, e) {
         var index = idx;
         $(this).mouseover(function() {
             $all = $("#assess_nav").children('li');
             $all.removeClass('SmenuTitleOn10');
             $(this).addClass('SmenuTitleOn10');
             showBox(index);
         }).mouseout(function() {
             $all = $("#assess_nav").children('li');
             var index = $all.index('.selected_li');
             $all.removeClass('SmenuTitleOn10');
             $all.eq(index).addClass('SmenuTitleOn10');
             showBox(index);
         })
     })

     $("#assess_nav").children('li').each(function(idx, e) {
         var index = idx;
         $(this).click(function() {
             $all = $("#assess_nav").children('li');
             $all.removeClass('selected_li');
             $(this).addClass('selected_li');
             showBox(index);
         })
     })

     function showBox(idx) {
         $("#assess_content").children('.SmenuConnt').hide().eq(idx).show();
     }
 })

// *****登录、注册选项卡*****bing****start****
 
  var tabOptionIndex8 = 0;
 $(function() {
     $(".TmenuTitle ul li").mouseover(function() {
         tabOptionIndex8 = $(".TmenuTitle ul li").index(this);
         tabOptionHover8(tabOptionIndex8);
     });

 });
 function tabOptionHover8(tabOptionIndex) {
     var $li_8 = $(".TmenuTitle ul li");
     for (var i = 0; i < $li_8.length; i++) {
         $li_8.eq(tabOptionIndex).addClass('TmenuTitleOn0 fontcolor').siblings().removeClass('TmenuTitleOn0 fontcolor');
         $(".TmenuCont").eq(tabOptionIndex).addClass('TmenuContentOn0').siblings().removeClass('TmenuContentOn0');
     }
 }

// *****登录、注册选项卡*****bing****end****
 /***********************首页最顶部轮播******june******start*/
 $(function() {
     var banner = $("#banner-left");
     var imgs = $("#banner-left a");
     var len = imgs.length;
     var index = 0;
     var adTimer;
     $(".points").mouseover(function() {
         index = $(".points").index(this);
         showImg(index);
     }).eq(0).mouseover();
     // 滑入停止播放幻灯片，滑出循环播放
     banner.hover(function() {
         clearInterval(adTimer);
     }, function() {
         adTimer = setInterval(function() {
             showImg(index);
             index++;
             if (index == len) {
                 index = 0;
             }
         }, 3000);
     }).trigger("mouseleave");
 })
 // 显示不同幻灯片
 function showImg(index) {
     var adwidth = $("#banner-left").width();
     $("#banner-wrap").stop(true, false).animate({
         left: -adwidth * index
     }, 1000);
     $(".points").removeClass('cupoint')
         .eq(index).addClass('cupoint');
 }
 /***********************首页最顶部轮播*****june******end*/
 /********首页购物车加减***************************june*/
 /*$(function(){
   $(".num-each").each(function(index){ //取得整个页面的input值
$(this).attr("value","0");
 }); 
})
 */
 $(function() {
     $(".num-option").click(function() {
         var num = 0;
         num = $(this).parent().find(".num-each").val();
         num = parseInt(num, 10);
         if ($(this).hasClass("minus")) {
             if (num >= 1) {
                 num--;
             }
         } else {
             //缺少获取仓库的数量
             num++;
         }
         $(this).parent().find(".num-each").val(num);
     })
 })
 function getBuyNum(target) {
     var num = $(target).next(".buyNum").find(".num-each").val();
     num = parseInt(num, 10);
     return num;
 }
 /******************首页购物车加减******june*****end******************/
 /**************产品详情页宝贝预览图放大效果******june****start**************/
 (function($) {
     $.fn.imagezoom = function(options) {
         var settings = {
             xzoom: 310,
             yzoom: 310,
             offset: 10,
             position: "BTR",
             preload: 1
         };
         if (options) {
             $.extend(settings, options);
         }
         var noalt = '';
         var self = this;
         $(this).bind("mouseenter", function(ev) {
             var imageLeft = $(this).offset().left; //元素左边距
             var imageTop = $(this).offset().top; //元素顶边距
             var imageWidth = $(this).get(0).offsetWidth; //图片宽度
             var imageHeight = $(this).get(0).offsetHeight; //图片高度
             var boxLeft = $(this).parent().offset().left; //父框左边距
             var boxTop = $(this).parent().offset().top; //父框顶边距
             var boxWidth = $(this).parent().width(); //父框宽度
             var boxHeight = $(this).parent().height(); //父框高度
             noalt = $(this).attr("alt"); //图片标题
             var bigimage = $(this).attr("rel"); //大图地址
             $(this).attr("alt", ''); //清空图片alt
             if ($("div.zoomDiv").get().length == 0) {
                 $(document.body).append("<div class='zoomDiv'><img class='bigimg' src='" + bigimage + "'/></div><div class='zoomMask'>&nbsp;</div>"); //放大镜框及遮罩
             }
             if (settings.position == "BTR") {
                 //如果超过了屏幕宽度 将放大镜放在右边
                 if (boxLeft + boxWidth + settings.offset + settings.xzoom > screen.width) {
                     leftpos = boxLeft - settings.offset - settings.xzoom;
                 } else {
                     leftpos = boxLeft + boxWidth + settings.offset;
                 }
             } else {
                 leftpos = imageLeft - settings.xzoom - settings.offset;
                 if (leftpos < 0) {
                     leftpos = imageLeft + imageWidth + settings.offset;
                 }
             }
             $("div.zoomDiv").css({
                 top: boxTop,
                 left: leftpos
             });
             $("div.zoomDiv").width(settings.xzoom);
             $("div.zoomDiv").height(settings.yzoom);
             $("div.zoomDiv").show();
             $(this).css('cursor', 'crosshair');
             $(document.body).mousemove(function(e) {
                 mouse = new MouseEvent(e);
                 if (mouse.x < imageLeft || mouse.x > imageLeft + imageWidth || mouse.y < imageTop || mouse.y > imageTop + imageHeight) {
                     mouseOutImage();
                     return;
                 }
                 var bigwidth = $(".bigimg").get(0).offsetWidth;
                 var bigheight = $(".bigimg").get(0).offsetHeight;
                 var scaley = 'x';
                 var scalex = 'y';
                 //设置遮罩层尺寸
                 if (isNaN(scalex) | isNaN(scaley)) {
                     var scalex = (bigwidth / imageWidth);
                     var scaley = (bigheight / imageHeight);
                     $("div.zoomMask").width((settings.xzoom) / scalex);
                     $("div.zoomMask").height((settings.yzoom) / scaley);
                     $("div.zoomMask").css('visibility', 'visible');
                 }
                 xpos = mouse.x - $("div.zoomMask").width() / 2;
                 ypos = mouse.y - $("div.zoomMask").height() / 2;
                 xposs = mouse.x - $("div.zoomMask").width() / 2 - imageLeft;
                 yposs = mouse.y - $("div.zoomMask").height() / 2 - imageTop;
                 xpos = (mouse.x - $("div.zoomMask").width() / 2 < imageLeft) ? imageLeft : (mouse.x + $("div.zoomMask").width() / 2 > imageWidth + imageLeft) ? (imageWidth + imageLeft - $("div.zoomMask").width()) : xpos;
                 ypos = (mouse.y - $("div.zoomMask").height() / 2 < imageTop) ? imageTop : (mouse.y + $("div.zoomMask").height() / 2 > imageHeight + imageTop) ? (imageHeight + imageTop - $("div.zoomMask").height()) : ypos;
                 $("div.zoomMask").css({
                     top: ypos,
                     left: xpos
                 });
                 $("div.zoomDiv").get(0).scrollLeft = xposs * scalex;
                 $("div.zoomDiv").get(0).scrollTop = yposs * scaley;
             });
         });

         function mouseOutImage() {
             $(self).attr("alt", noalt);
             $(document.body).unbind("mousemove");
             $("div.zoomMask").remove();
             $("div.zoomDiv").remove();
         }
         //预加载
         count = 0;
         if (settings.preload) {
             $('body').append("<div style='display:none;' class='jqPreload" + count + "'></div>");
             $(this).each(function() {
                 var imagetopreload = $(this).attr("rel");
                 var content = jQuery('div.jqPreload' + count + '').html();
                 jQuery('div.jqPreload' + count + '').html(content + '<img src=\"' + imagetopreload + '\">');
             });
         }
     }
 })(jQuery);

 function MouseEvent(e) {
     this.x = e.pageX;
     this.y = e.pageY;
 }

 $(function() {
     $(".jqzoom").imagezoom();
     $("#thumblist li a").click(function() {
         $(".jqzoom").attr('src', $(this).find("img").attr("mid"));
         $(".jqzoom").attr('rel', $(this).find("img").attr("big"));
     });
 });
 /**************产品详情页宝贝预览图放大效果******june****end**************/

 /*悬浮购物车*/
 $(function() {
     $(".count").each(function() {
         var $reduce = $(this).children('.cart_reduce');
         var $countInput = $(this).children('input');
         var $add = $(this).children('.cart_add');
         $add.click(function() {
             //绑定添加按钮事件
             var val = parseInt($countInput.val()) + 1;
             $countInput.val(val);
             getTotal()
         });

         $reduce.click(function() {
             //绑定减少按钮事件
             var val = parseInt($countInput.val()) - 1;
             if (val < 1) {
                 val = 1;
             }
             $countInput.val(val);
             getTotal()
         })
     })

     function getTotal() {
         //设置总价
         var $items = $("#cart_table").find("tr");
         var $item;
         var len = $items.length;
         var num, price, total = 0,
             totalNum = 0;
         for (var i = 0; i < len; i++) {
             $item = $items.eq(i);
             num = $item.find("input.count_input").val();
             price = $item.find("div.cart_click").find("em").text();
             total += num * price;
             totalNum += parseInt(num);
         }
         total = total.toFixed(2);
         $("#pro_num").text(totalNum);
         $("#pro_count").text(totalNum);
         $("#priceTotal").text("￥" + total);
         $("#priceAll").text("￥" + total);
         return total;

     }

     $(".cart_delete").children("img").click(function() {
         var c = confirm("确定删除？");
         if (c == false) {
             return;
         }
         $(this).parents("tr").remove();
         getTotal();
         isEmpty();
     })

     $("#cart_icon").click(function() {
         showCart();
     })
     getTotal();
 })

 function closeCart() {
     $("#cart").hide();
 }

 function showCart() {
     isEmpty();
     $("#cart").show();
 }

 function isEmpty() {
     var num = $("#cart_table").find("tr").length;
     if (num > 0) {
         $("#cart").show();
         $("#fullcart").show();
         $("#emptycart").hide();
     } else {
         $("#cart").show();
         $("#fullcart").hide();
         $("#emptycart").show();
     }
 }
 /****结算2商品清单*************************/
 $(function() {
     function account() {
         var $item = $("#list_table").children('tbody').children('tr');
         var total = 0,
             temp, len = $item.length;
         var sum = 0;
         for (var i = 0; i < len; i++) {
             temp = $item.eq(i).find('.price').children('span').text() * $item.eq(i).find('.count').text();
             $item.eq(i).find('.subTotal').text("￥" + temp.toFixed(2));
             $item.eq(i).find('.goods_integral').text(parseInt(temp));
             sum += temp;
         }
         $('.summary').children('span').text("￥" + sum.toFixed(2));
         return total;
     }
     account();
 })
 /*************************************************************************************************/
 // 收缩--个人中心
 $(function() {
     $('.current').find('h4').toggle(function() {
         var $parent = $(this).parents('.current');
         var $dips = $parent.find('.current_list');
         $dips.css("display", "none");
         $parent.find('img').attr("src", "images/triangle.png");
     }, function() {
         var $parent = $(this).parents('.current');
         var $dips = $parent.find('.current_list');
         $dips.css("display", "block");
         $parent.find('img').attr("src", "images/boult3.png");
     });
 })
 // 收缩--产品列表
 $(function() {
     $('.current2').find('h4').toggle(function() {
         var $parent = $(this).parents('.current2');
         var $dips = $parent.find('.current_list');
         $dips.css("display", "none");
         $parent.find('h4').css("background", "url(./images/listup.png)");
     }, function() {
         var $parent = $(this).parents('.current2');
         var $dips = $parent.find('.current_list');
         $dips.css("display", "block");
         $parent.find('h4').css("background", "url(./images/listdown.png)");
     });
 })

// 评价弹出框***bing***begin***
 $(".reply_btn").live('click',function(){
        $.XYTipsWindow({
        ___title:"回复",
        ___content:"iframe:answer.html",
        ___width:"780",
        ___height:"260",
        ___showbg:true,
        ___drag:"__boxTitle"

        })
    });
// 评价弹出框***bing***end***
/**********产品列表页排序*********june*******start***/
$(function(){
 $('.sort-item').live('click',function() {
         if ($(this).hasClass("sort-up")){
            $(this).removeClass("sort-up");
            $(this).addClass("sort-down");
         }
         else
         {
            $(this).removeClass("sort-down");
            $(this).addClass("sort-up");
         }
});   
})
/***个人中心页面根据左边菜单点击在右边区域显示相应的内容*****june*****start***/
 $(function() {
     var alen = $(".per_center ul li").length;
     $('.per_center ul li a').click(function() {
         var href = $(this).attr("href").toString();
         for (var i = 0; i < alen; i++) {
             var a_ = $(".per_center ul li a").eq(i);
             var a_text = $(a_).attr("href").toString()
             if (a_text != href)
                 $(a_text).css("display", "none"); //非当前点击对象则隐藏
         } 
       /*   $('body,html').animate({scrollTop:0},1000); */  
              $(href).css("display", "block"); //为当前点击对象则展示 var hLen=$(href).offset().top;         
             /* var page = href.substr(href.length-3,3);
            $.ajax({
                        url:'http://127.0.0.1/TShop/index.php/Home/customers',
                        dataType:'html',
                        type:'get',
                        data:'customer_page='+page,
                         success:function(html){
                            $("#tab-"+page).html(html);
                        }
            });*/
     })
 })
/***个人中心页面根据左边菜单点击在右边区域显示相应的内容*****june*****end***/
/****个人中心【收货地址、修改地址】点击删除****june***************start****/
//Usercenter用户删除地址
$(".receive_del").live('click',function(){
    var k=0;
    $("input[name='receiver']").each(function(){
        if ($(this).attr("checked")){
            alert("后台在此实现删除功能");
            k=1;     
        }
    })
    if(k==0){
        $("#prompt_msg").show();
    } 
})
$("#dlg-close").live('click',function(){
    $("#prompt_msg").hide();
})
/*点击编辑时，切换页面到【修改地址】*/
$(".modifyAdd").live('click',function(){
    $("#tab-3-2").hide();
    $("#modifyAdd").show();
})
/*点击保存时，切换页面到【收货地址】*/
$("#addressBtnSave").live('click',function(){
    alert("此处与后台交互保存数据");//纯提醒效果，删除
    $("#modifyAdd").hide();
    $("#tab-3-2").show();
})
/****个人中心【收货地址、修改地址】****june***************end****/
 /**************首页顶部广告可关闭部分******************june**************start**************/
/***********产品列表页排序*********june*******end***/
 $(function(){
    YAO.YTabs({
    tabs: YAO.getElByClassName('YM-Tab', 'li', 'YMenu-side'),
    contents: YAO.getElByClassName('YM-submnu', 'ul', 'YMenu-side'),
    hideAll: true
  });
 })
/*************产品页评论柱形图******eles*****************start*******************/ 
$(function() {
     $(".ass_rate_border").each(function(){
        var ratewidth = $(this).next("span").text();
        $(this).children('div').css("width", ratewidth);
     })
 })
/*************产品页评论柱形图******eles*************end***********************/ 
