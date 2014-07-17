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
})