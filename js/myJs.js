
 
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

  /****结算2结算信息************************/
  $(function(){
    function account2(){
        var $item2 = $('.settle').find('.pri_b');
        var len2 = $item2.length;
        var total2 = 0,temp=0;
        for(var j = 0; j<len2; j++){
            temp = $item2.eq(j).text();
            total2 += parseFloat(temp);
        }
        $('.pri_r').text(total2.toFixed(2));
        return total2;
    }
    account2();
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
        var $span = $(this).find('span');
         if ($span.hasClass("sort-up")){
            $span.removeClass("sort-up");
            $span.addClass("sort-down");
         }
         else
         {
            $span.removeClass("sort-down");
            $span.addClass("sort-up");
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
// bing***结算页效果***start***
$(function(){

    // 删除地址
    $(".del_address").live('click',function(){
        var r = confirm("确定删除吗？");
        if(r){
            var $parent = $(this).parent("li");
            $parent.css("display","none");
        }
    })

    // 修改地址

    $(".modify_address").live('click',function(){
        $.XYTipsWindow({
        ___title:"修改地址",
        ___content:"iframe:new_address.html",
        ___width:"780",
        ___height:"260",
        ___showbg:true,
        ___drag:"__boxTitle"

        })
    });


    // 收缩
    $(".apimg").toggle(function(){
        var $parent = $(this).parents(".offset");
        var $samebg = $parent.find(".same_bg");             
        $samebg.css("display","none");
        $(this).attr("src","images/plus.png");
    },function(){
        var $parent = $(this).parents(".offset");
        var $samebg = $parent.find(".same_bg"); 
        $samebg.css("display","block");
        $(this).attr("src","images/add.png");
    });

        
    // 将新地址添加到收货人地址
    $(".save_send").click(function(){
        var $parent = $(this).parent();
        var $consignee = $parent.find("input#consignee");
        var $selProvince = $parent.find("#selProvince option:selected");    
        var $selCity = $parent.find("#selCity option:selected");
        var $selRegion = $parent.find("#selRegion option:selected");
        var $detail_address = $parent.find("input#detail_address");
        var $phone_num = $parent.find("input#phone_num");
        // 获取收货人地址的值
        var $name_val = $consignee.val();
        var $province = $selProvince.val();
        var $city = $selCity.val();
        var $region = $selRegion.val();
        var $detail_val = $detail_address.val();
        var $phone_val = $phone_num.val();
/*
        var $first_li = $(".old_address ul li:eq(0)");  //获取第一个li元素
        var $append_li = $("<li></li>");
        var $two_li = $append_li.insertBefore($first_li); //将添加的li元素插入到第一个li元素之前
*/
        var  $append_li =  $(".old_address ul").append("<li></li>");
        var $two_li = $(".old_address ul li:last");   //获取最后一个li元素

        var $append_a1 = $two_li.append( "<a class='modify_address' href='#old_address'>修改</a>");
        var $append_a2 = $two_li.append( "<a class='del_address' href='#old_address'>删除</a>");
        var $append_input = $two_li.append("<input name='address' class='ss' type='radio'  />")
        var $append_label = $two_li.append("<label class='default fontway'>"+$name_val+"  "+$province+$city+$region+$detail_val+"  "+$phone_val+"</label>");     
    });
    
})
// bing***结算页效果***end***

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
// 会员页效果***bing***start***
$(function(){

    // 绑定手机
    $("#binding_mobile").click(function(){
        $(".mobile_info").css("display","block");
    });

    // 绑定邮箱
    $("#binding_email").click(function(){
        $('.Email_info').css("display","block");
    });

    // 确定绑定手机
    $("#confirm_info").click(function(){
        $("#info3 img").attr("src","images/lock.png");
        $("#lock_img1").text("已绑定");
        $("#lock_img1").css("color","#A4A4A4");
        $("#info3 a").css("display","none");

    });

    // 确定绑定邮箱
    $("#send_email").click(function(){
        $("#info4 img").attr("src","images/lock.png");
        $("#lock_img2").text("已绑定");
        $("#lock_img2").css("color","#A4A4A4");
        $("#info4 a").css("display","none");

    });

    // 提交推荐人会员号
    $("#commitBtn").click(function(){
        $("#memNum1 input#mem_num").css("background-color","#ECECEC")
                                   .attr("disabled","disabled");
        $(this).css("background-color","#B8B8B8");
    });

    // 评价弹出框***bing***begin***
 $(".reply_btn").live('click',function(){
        $.XYTipsWindow({
        ___title:"回复",
        ___content:"iframe:answer.html",
        ___width:"460",
        ___height:"200",
        ___showbg:true,
        ___drag:"__boxTitle"

        })
    });
// 评价弹出框***bing***end***
})

//跟踪包裹弹出框
$.ui.tooltip.prototype._create = function() {
  this._on({
    click: "open",      //覆盖tooltip的原型使打开由原本的hover变成click
    focusin: "open"
  });
  this.tooltips = {};
  this.parents = {};
  if ( this.options.disabled ) {
    this._disable();
  }
}
$(function(){
  var content = renderTooltip();
  var tooltipCtl = $(".myorder_state a").tooltip({  //初始化tooltip
    content: content,
    tooltipClass: "my_tooltip",         //这个框容器的css的class， 内容的css可以自己写在外面那个content
    position: {                 //定位
      my: "right top+10",
      at: "right bottom",
      collision: "flipfit flip"
    },
    open: function() {    //每次显示tooltip的时候触发的函数
        $(".tooltipClose").unbind("click").bind("click",function() {
          tooltipCtl.tooltip( "close" );    //绑定关闭按钮  绑定前要先unbind解除绑定
        })
     }
  })
})

function renderTooltip(){
  var content = '<div class="fr tooltipClose" style="margin-top: -20px;">\
                    <img src="images/deletebtn.jpg">\
                 </div><!-- / -->\
                 <div style="margin: 20px 15px auto 7px;">\
                    <ul>\
                    <li>2014-07-09 15:59:12 提交订单</li>\
                    <li>2014-07-14 03:00:00 用户取消了订单</li>\
                    </ul>\
                 </div><!-- / -->';        //那个框里面要什么内容加在这里
  return content;
}
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

        var $parent = $(this).parents("div.right_product");
        var $v_out = $parent.find("div.pro");
        var $v_show = $parent.find("div.pro2");
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
        var $parent = $(this).parents("div.right_product");
        var $v_out = $parent.find("div.pro");
        var $v_show = $parent.find("div.pro2");
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
         if( !$v_show.is(":animated") ){    //判断“视频内容展示区域”是否正在处于动画
              if( page == page_count ){  //已经到最后一个版面了,如果再向后，必须跳转到第一个版面。
                $v_show.animate({ left : '0px'}, "slow"); //通过改变left值，跳转到第一个版面
                page = 1;
              }else{
                $v_show.animate({ left : '-='+(v_width-38)}, "slow");  //通过改变left值，达到每次换一个版面
                page++;
             }
         }
    });
    //点击向前按钮
    $("#left-choice").click(function(){
        var $parent = $(this).parents("div.left_banner");
        var $v_out = $parent.find("div.i-list");
        var $v_show = $parent.find("div.i-bot-list");
        var v_width = $v_out.width();
        var len = $v_show.find("li").length;
        var page_count = Math.ceil(len / i);
        if(!$v_show.is(":animated")){
            if (page == 1) {
                $v_show.animate({left : "-="+(v_width-37)*(page_count-1)},"slow");
                page = page_count;
            }else{
                $v_show.animate({left : '+='+(v_width-36)},"slow");
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
    });
    // eq(0).mouseover()用来初始化，让第一个文字高亮并显示第一张图

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
     $('#page_img').find("img").eq(index).stop(true,true).fadeIn().siblings().fadeOut();

    $rollList.removeClass("newBg").eq(index).addClass("newBg");
}
// ***bing***资讯首页图片轮播***end***

// bing***产品列表页底部图片切换***start****
$(function(){

    var page = 1;
    var i = 5; //每版放5个图片

    $('#bot_prev').click(function(){
        var $parent = $(this).parents("div.pro_bottom_pic01");
        var $v_out = $parent.find("div.proBot_slide0");
        var $v_show = $parent.find("div.proBot_slide01");
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


    $('#bot_Next').click(function(){
        var $parent = $(this).parents("div.pro_bottom_pic01");//寻找当前元素的父元素
        var $v_out = $parent.find("div.proBot_slide0");//视频外围
        var $v_show = $parent.find("div.proBot_slide01");//视频播放区域
        var v_width = $v_out.width();//外围宽度
        var len = $v_show.find("li").length; //图片数量
        var page_count = Math.ceil(len / i) ; //页面数目
         if( !$v_show.is(":animated") ){    //判断“视频内容展示区域”是否正在处于动画
              if( page == page_count ){  //已经到最后一个版面了,s如果再向后，必须跳转到第一个版面。
                $v_show.animate({ left : '0px'}, "slow"); //通过改变left值，跳转到第一个版面
                page = 1;
              }else{
                $v_show.animate({ left : '-='+v_width }, "slow");  //通过改变left值，达到每次换一个版面
                page++;
             }
         }
    });
}) 
