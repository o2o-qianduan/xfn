

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


