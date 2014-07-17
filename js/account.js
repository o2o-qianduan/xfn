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
		___drag:"___boxTitle"

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
