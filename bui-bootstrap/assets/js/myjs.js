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
// /******添加新商品-编辑商品************june**********end*******************/                                                                   bing****商品批量导出**start***
 $(function(){
         
          //向右移动
           $("#right").live('click',function (){
              var left = $("#select1")[0].options;
              $(left).each(function (index,domEle){
                   if(domEle.selected){               
                       $("#select2")[0].appendChild(domEle);    
                    }     
                });
            
           });

          //全部向右
          $("#allright").live('click',function (){
                var left = $("#select1")[0].options;      
                $(left).each(function (index,domEle){              
                    $("#select2")[0].appendChild(domEle);           
                });     
          });
               
          //向左移动
         $("#left").live('click',function (){
              var right = $("#select2")[0].options;
          
              $(right).each(function (index,domEle){         
                 if(domEle.selected){            
                    $("#select1")[0].appendChild(domEle);
                  }
              });   
           });

         //全部向左
         $("#allleft").live('click',function (){
             var right = $("#select2")[0].options;
             $(right).each(function (index,domEle){
                   $("#select1")[0].appendChild(domEle);
              }); 
         });
    })


// 优惠券弹出框****bing****start***
$(function(){
	$("#batch01").live('click',function(){
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
})

// 创建专题弹出框****bing****
$(function(){
	$("#subject_1").live('click',function(){
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
})

// 评论有礼弹出框***bing***
$(function(){
	$("#gift_1").live('click',function(){
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
})