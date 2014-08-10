/*$('.selectlist2 #shift_1').live('click',function(){
              var myoption =  $('#multiple1 option:selected').text();     
              var $newoption = $('#multiple2').append('<option></option>');
              var $lastoption = $('#multiple2 option:last');
              var $optionvalue = myoption;
              var $appendop = $('#multiple2 option:last').append($optionvalue);      
              $('#multiple1 option:selected').remove();
})*/
/******添加新商品-编辑商品************june**********start*******************/
/****宝贝图片部分****start**/ 
$(function(){
	$(".left_ul li img").live("mouseenter",function(){
		$(this).css({'border':'#1111EE'});
		var road=$(this).attr("src");
		$("._top img").attr("src",road);
	})
})
/****宝贝图片部分******end**/
/****可选商品-跟该商品关联的商品****start***/
$('#2_right').live('click',function(){
		        var opt1="";
				 $('#opt_1 option:selected').each(function(){		
				 	opt1+='<option>'+ $(this).val()+'</option>';
				 	$(this).remove();
				 })   
				 
				$('#opt_2').append(opt1);      
 })
$('#2_left').live('click',function(){
		        var opt1="";
				 $('#opt_2 option:selected').each(function(){		
				 	opt1+='<option>'+ $(this).val()+'</option>';
				 	$(this).remove();
				 })   
				$('#opt_1').append(opt1);      
 })
/****可选商品-跟该商品关联的商品****end***/        
/******添加新商品-编辑商品************june**********end*******************/                                                                     