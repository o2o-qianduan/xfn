$(function(){
	$(".del").click(function(){
		var r = confirm("确定删除吗？");
		if(r){
			var $parent = $(this).parent("li");
			$parent.css("display","none");
		}
	})

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
	})
})