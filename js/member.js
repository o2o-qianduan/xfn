

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
