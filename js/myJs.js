 $(function(){
  $( "#tabs" ).tabs();
})


/*****新品推荐、特惠专区、新鲜蔬菜部分 *************june**---start*/
var tabOptionIndex1=0;
$(function(){
	$(".tabOption span").mouseover(function(){
		tabOptionIndex1=$(".tabOption span").index(this);
		tabOptionHover1(tabOptionIndex1);

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
/*****新品推荐、特惠专区、新鲜蔬菜部分 *************june**---end*/

/**************首页顶部广告可关闭部分******************june**************start**************/
$(function(){
$(".bg_button").bind("click",function(){
    $(".bg").css({"display":"none"});
  });	
})
/*************首页顶部广告可关闭部分结束***************june**************end*******************/


/*首页"全部产品分类"部分在首页时其菜单固定显示，在其它页面时鼠标一移过才显示**********start******/
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
/*******************首页"全部产品分类"部分**************************june*******end********/



/*****超值抢购、本季热卖、本周推荐、新品上市、限时抢购 *************june**---start*/
var tabOptionIndex2=0;
 $(function(){
     $(".SmenuTitle ul li").mouseover(function(){
         tabOptionIndex2=$(".SmenuTitle ul li").index(this);
         tabOptionHover2(tabOptionIndex2);

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

 /***********************首页最顶部轮播******june******start*/
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
 /***********************首页最顶部轮播*****june******end*/

  /***********************首页【最新活动、最新资讯】切换******june******start*/
var tabOptionIndex3=0;
$(function(){
	$(".newsOption span").mouseover(function(){
		tabOptionIndex3=$(".newsOption span").index(this);
		tabOptionHover3(tabOptionIndex3);

	});
});
function tabOptionHover3(tabOptionIndex){
	for(var i=0;i<2;i++){
		$(".newsOption").removeClass('newsOn'+i);
		$(".news-0").removeClass('newsOn-'+i);
		}
	$(".newsOption").eq(tabOptionIndex).addClass('newsOn'+tabOptionIndex);
	$(".news-0").eq(tabOptionIndex).addClass('newsOn-'+tabOptionIndex);
}
 /***********************首页【最新活动、最新资讯】切换******june******end*/

 /******************结算页面1*****龚颖******start*********/
window.onload = function () {
    if (!document.getElementsByClassName) {
        document.getElementsByClassName = function (cls) {
            var ret = [];
            var els = document.getElementsByTagName('*');
            for (var i = 0, len = els.length; i < len; i++) {
                if (els[i].className === cls
                    || els[i].className.indexOf(cls + ' ') >= 0
                    || els[i].className.indexOf(' ' + cls + ' ') >= 0
                    || els[i].className.indexOf(' ' + cls) >= 0) {
                    ret.push(els[i]);
                }
            }
            return ret;
        }
    }

    var cartTable = document.getElementById('cartTable');
    var tr = cartTable.children[1].rows;
    var checkInputs = document.getElementsByClassName('check');
    var checkAllInputs = document.getElementsByClassName('check-all');
    var selectedTotal = document.getElementById('selectedTotal');
    var priceTotal = document.getElementById('priceTotal');
    var intergralTotal = document.getElementById('intergralTotal');
    var selected = document.getElementById('selected');
    var cart_foot = document.getElementById('cart_foot');
    var deleteAll = document.getElementById('deleteAll');
    var tip = document.getElementById('tip');
    var diff = document.getElementById('diff');
    var sum = 0;
    var count=0;


    //计算
    function getTotal() {
        var seleted = 0;
        var price = 0;
        var HTMLstr = '';
        var trprice =0;
        var trcount=0;
        var SubTotal=0;
        for (var i = 0, len = tr.length; i < len; i++) {
            if (tr[i].getElementsByTagName('input')[0].checked) {
                tr[i].className = 'on';
                trprice = parseFloat(tr[i].cells[4].innerHTML);
                trcount = parseInt(tr[i].getElementsByTagName('input')[1].value);
                SubTotal = parseFloat(trprice * trcount);
                seleted += trcount;
                price += SubTotal;
            }
            else {
                tr[i].className = '';
            }
        }
  

        priceTotal.innerHTML = "￥"+price.toFixed(2);
        sum = price;
        count = seleted;
        intergralTotal.innerHTML = "￥"+price.toFixed(0);

        if (seleted == 0) {
            cart_foot.className = 'cart_foot';
        }
    }
    // 判定是否出现满118包邮
    function isShowTip(){
        getTotal();
        var differ = 0;
        if(sum < 118){
            differ = 118 - sum;
            diff.innerHTML = differ.toFixed(2);
            tip.className="fr tip_show";
        }
        else{
            tip.className="fr tip";
        }
    }

    for (var i = 0 , len = checkInputs.length; i < len; i++) {
        checkInputs[i].onclick = function () {
            if (this.className === 'check-all check') {
                for (var j = 0; j < checkInputs.length; j++) {
                    checkInputs[j].checked = this.checked;
                }
            }
            if (this.checked == false) {
                for (var k = 0; k < checkAllInputs.length; k++) {
                    checkAllInputs[k].checked = false;
                }
            }
            getTotal();
        }
    }

    for (var i = 0; i < tr.length; i++) {
        tr[i].onclick = function (e) {
            e = e || window.event;
            var el = e.srcElement;
            var cls = el.className;
            var input = this.getElementsByTagName('input')[1];
            var val = parseInt(input.value);
            var reduce = this.getElementsByTagName('span')[1];
            switch (cls) {
                case 'add':
                    input.value = val + 1;
                    break;
                case 'reduce':
                    if (val > 1) {
                        input.value = val - 1;
                    }
                    break;
                case 'delete':
                    var conf = confirm('确定要删除吗？');
                    if (conf) {
                        this.parentNode.removeChild(this);
                    }
                    break
                default :
                    break;
            }
            getTotal();
            isShowTip();
        }
        tr[i].getElementsByTagName('input')[1].onkeyup = function () {
            var val = parseInt(this.value);
            var tr = this.parentNode.parentNode
            var reduce = tr.getElementsByTagName('span')[1];
            if (isNaN(val) || val < 1) {
                val = 1;
            }
            this.value = val;
            if (val <= 1) {
                reduce.innerHTML = '';
            }
            else {
                reduce.innerHTML = '-';
            }
            getSubTotal(tr);
            getTotal();
            isShowTip();
        }
    }

    deleteAll.onclick = function () {
        if (selectedTotal.innerHTML != '0') {
            var conf = confirm('确定删除吗？');
            if (conf) {
                for (var i = 0; i < tr.length; i++) {
                    var input = tr[i].getElementsByTagName('input')[0];
                    if (input.checked) {
                        tr[i].parentNode.removeChild(tr[i]);
                        i--;
                    }
                }
            }
        }
    }

    checkAllInputs[0].checked = true;
    checkAllInputs[0].onclick();
    isShowTip();
}

 /*******************结算页面1****龚颖*************end*****/


 /********首页购物车加减***************************june*/

$(function(){
   $(".num-each").each(function(index){ //取得整个页面的input值
$(this).attr("value","0");
 }); 
})
 
$(function(){
    $(".num-option").click(function(){
var num=0;
 num = $(this).parent().find(".num-each").val();
num = parseInt(num,10);
if($(this).hasClass("minus"))
{
if(num >=1 )
{
num--;
}
}
else{
//缺少获取仓库的数量
num++;
}
$(this).parent().find(".num-each").val(num);
})
})
function getBuyNum(target){
var num = $(target).next(".buyNum").find(".num-each").val();
num = parseInt(num,10);
return num;
}
 /******************首页购物车加减******june*****end******************/

/*********************** 产品详情页“搭配、套餐”的切换******june******start*/
var tabOptionIndex4=0;
$(function(){
    $(".daOption span").mouseover(function(){
        tabOptionIndex4=$(".daOption span").index(this);
        tabOptionHover4(tabOptionIndex4);

    });
});
function tabOptionHover4(tabOptionIndex){
    for(var i=0;i<2;i++){
        $(".daOption").removeClass('daOn'+i);
        $(".da-0").removeClass('daOn-'+i);
        }
    $(".daOption").eq(tabOptionIndex).addClass('daOn'+tabOptionIndex);
    $(".da-0").eq(tabOptionIndex).addClass('daOn-'+tabOptionIndex);
}
 /*********************** 产品详情页“搭配、套餐”的切换******june******end*/

 /*********************** 产品详情页“商品详情、评价、成交记录”的切换******june******start*/
var tabOptionIndex5=0;
$(function(){
    $(".proOption span").mouseover(function(){
        tabOptionIndex5=$(".proOption span").index(this);
        tabOptionHover5(tabOptionIndex5);

    });
});
function tabOptionHover5(tabOptionIndex){
    for(var i=0;i<3;i++){
        $(".proOption").removeClass('proOn'+i);
        $(".pro-0").removeClass('proOn-'+i);
        }
    $(".proOption").eq(tabOptionIndex).addClass('proOn'+tabOptionIndex);
    $(".pro-0").eq(tabOptionIndex).addClass('proOn-'+tabOptionIndex);
}
 /*********************** 产品详情页“商品详情、评价、成交记录”的切换******june******end*/


 /**************产品详情页宝贝预览图放大效果******june****start**************/
(function($){

    $.fn.imagezoom = function(options){

        var settings = {
            xzoom: 310,
            yzoom: 310,
            offset: 10,
            position: "BTR",
            preload: 1
        };

        if(options) {
            $.extend(settings, options);
        }

        var noalt = '';

        var self = this;

        $(this).bind("mouseenter", function(ev){

            var imageLeft = $(this).offset().left;//元素左边距
            var imageTop = $(this).offset().top;//元素顶边距


            var imageWidth = $(this).get(0).offsetWidth;//图片宽度
            var imageHeight = $(this).get(0).offsetHeight;//图片高度

            var boxLeft = $(this).parent().offset().left;//父框左边距
            var boxTop = $(this).parent().offset().top;//父框顶边距
            var boxWidth = $(this).parent().width();//父框宽度
            var boxHeight = $(this).parent().height();//父框高度

            noalt= $(this).attr("alt");//图片标题
            var bigimage = $(this).attr("rel");//大图地址
            $(this).attr("alt",'');//清空图片alt


            if($("div.zoomDiv").get().length == 0){
                $(document.body).append("<div class='zoomDiv'><img class='bigimg' src='"+bigimage+"'/></div><div class='zoomMask'>&nbsp;</div>");//放大镜框及遮罩
            }


            if(settings.position == "BTR"){
                //如果超过了屏幕宽度 将放大镜放在右边
                if(boxLeft + boxWidth + settings.offset + settings.xzoom > screen.width){
                    leftpos = boxLeft  - settings.offset - settings.xzoom;
                }else{
                    leftpos = boxLeft + boxWidth + settings.offset;
                }
            }else{
                leftpos = imageLeft - settings.xzoom - settings.offset;
                if(leftpos < 0){
                    leftpos = imageLeft + imageWidth  + settings.offset;
                }
            }

            $("div.zoomDiv").css({ top: boxTop,left: leftpos });
            $("div.zoomDiv").width(settings.xzoom);
            $("div.zoomDiv").height(settings.yzoom);
            $("div.zoomDiv").show();

            $(this).css('cursor','crosshair');

            $(document.body).mousemove(function(e){

                mouse = new MouseEvent(e);
                if(mouse.x<imageLeft || mouse.x>imageLeft+imageWidth || mouse.y<imageTop || mouse.y>imageTop+imageHeight){
                    mouseOutImage();
                    return;
                }

                var bigwidth = $(".bigimg").get(0).offsetWidth;
                var bigheight = $(".bigimg").get(0).offsetHeight;

                var scaley ='x';
                var scalex ='y';


                //设置遮罩层尺寸
                if(isNaN(scalex)|isNaN(scaley)){
                    var scalex = (bigwidth/imageWidth);
                    var scaley = (bigheight/imageHeight);
                    $("div.zoomMask").width((settings.xzoom)/scalex );
                    $("div.zoomMask").height((settings.yzoom)/scaley);
                    $("div.zoomMask").css('visibility','visible');
                }



                xpos = mouse.x- $("div.zoomMask").width()/2 ;
                ypos = mouse.y- $("div.zoomMask").height()/2 ;
                
                xposs = mouse.x- $("div.zoomMask").width()/2 - imageLeft;
                yposs = mouse.y- $("div.zoomMask").height()/2 - imageTop ;
                
                xpos = (mouse.x - $("div.zoomMask").width()/2 < imageLeft ) ? imageLeft : (mouse.x + $("div.zoomMask").width()/2 > imageWidth + imageLeft ) ?  (imageWidth + imageLeft -$("div.zoomMask").width()): xpos;
                ypos = (mouse.y - $("div.zoomMask").height()/2 < imageTop ) ? imageTop : (mouse.y + $("div.zoomMask").height()/2  > imageHeight + imageTop ) ?  (imageHeight + imageTop - $("div.zoomMask").height()) : ypos;


                $("div.zoomMask").css({ top:ypos,left:xpos});
                $("div.zoomDiv").get(0).scrollLeft = xposs * scalex;
                $("div.zoomDiv").get(0).scrollTop  = yposs * scaley;


            });

        });


        function mouseOutImage(){
            $(self).attr("alt",noalt);
            $(document.body).unbind("mousemove");
            $("div.zoomMask").remove();
            $("div.zoomDiv").remove();
        }

        //预加载
        count = 0;
        if(settings.preload){
            $('body').append("<div style='display:none;' class='jqPreload"+count+"'></div>");

            $(this).each(function(){

                var imagetopreload= $(this).attr("rel");

                var content = jQuery('div.jqPreload'+count+'').html();

                jQuery('div.jqPreload'+count+'').html(content+'<img src=\"'+imagetopreload+'\">');

            });

        }

    }

})(jQuery);


function MouseEvent(e) {
    this.x = e.pageX;
    this.y = e.pageY;
}

  /**************产品详情页宝贝预览图放大效果******june****end**************/

/*悬浮购物车*/ 
$(function(){

    $(".count").each(function(){
        var $reduce = $(this).children('.reduce');
        var $countInput = $(this).children('input');
        var $add = $(this).children('.add');
        $add.click(function(){
            //绑定添加按钮事件
            var val = parseInt($countInput.val()) + 1;
            $countInput.val(val);
            getTotal()
        });

        $reduce.click(function(){
            //绑定减少按钮事件
            var val = parseInt($countInput.val()) - 1;
            if(val < 1){
                val = 1;
            }
            $countInput.val(val);
            getTotal()
        })
    })

    function getTotal(){
        //设置总价
        var $items = $("#cart_table").find("tr");
        var $item;
        var len = $items.length;
        var num,price,total = 0, totalNum = 0;
        for(var i=0; i<len; i++){
            $item = $items.eq(i);
            num = $item.find("input.count-input").val();
            price = $item.find("div.cart_click").find("em").text();
            total += num*price;
            totalNum += parseInt(num);
        }
        total = total.toFixed(2);
        $("#pro_num").text(totalNum);
        $("#pro_count").text(totalNum);
        $("#priceTotal").text("￥" + total);
        $("#priceAll").text("￥" + total);
        return total;

    }

    $(".cart_delete").children("img").click(function(){
        var c = confirm("确定删除？");
        if(c == false){
            return;
        }
        $(this).parents("tr").remove();
        getTotal();
        isEmpty();
    })

    $("#cart_icon").click(function(){
        showCart();
    })

    getTotal();
})

function closeCart(){
    $("#cart").hide();
}
function showCart(){
    isEmpty();
    $("#cart").show();
}
function isEmpty(){
    var num = $("#cart_table").find("tr").length;
    if(num > 0){
        $("#cart").show();
        $("#fullcart").show();
        $("#emptycart").hide();
    }else {
        $("#cart").show();
        $("#fullcart").hide();
        $("#emptycart").show();
    }
}

