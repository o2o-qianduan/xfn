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

	     $("#prompt_msg1").show();
	     $('.bgg').show();
	});
	$("#dlg-close1").live('click',function(){
	    $("#prompt_msg1").hide();
	    $('.bgg').hide();
	});


   // 创建专题弹出框****bing****
	$("#subject_1").live('click',function(){
		   
		    $("#prompt_msg2").show();
		    $('.bgg').show();
		   
		})
		$("#dlg-close2").live('click',function(){
		    $("#prompt_msg2").hide();
		    $('.bgg').hide();
		});


		// 评论有礼弹出框***bing***
		$("#gift_1").live('click',function(){
	
		     $("#prompt_msg3").show();
		     $('.bgg').show();
		})
		$("#dlg-close3").live('click',function(){
		    $("#prompt_msg3").hide();
		    $('.bgg').hide();
		});	

		// 团购设置弹出框
		$("#groupPurchase").live('click',function(){
	   
		     $("#prompt_msg4").show();
		     $('.bgg').show();
	   
		})
		$("#dlg-close4").live('click',function(){
		    $("#prompt_msg4").hide();
		    $('.bgg').hide();
		});

		// 秒杀设置弹出框
		$("#sniping").live('click',function(){
		   
		     $("#prompt_msg5").show();
		     $('.bgg').show();
		})
		$("#dlg-close5").live('click',function(){
		    $("#prompt_msg5").hide();
		    $('.bgg').hide();
		});	

		// 添加类型弹出框

		$("#addtype01").live('click',function(){
	   
		     $("#prompt_msg6").show();
		     $('.bgg').show();
		})
		$("#dlg-close6").live('click',function(){
		    $("#prompt_msg6").hide();
		    $('.bgg').hide();
		});

		// 发放优惠券弹出框
		$("#issueCoupon").live('click',function(){
	   
		     $("#prompt_msg7").show();
		     $('.bgg').show();
		})
		$("#dlg-close7").live('click',function(){
		    $("#prompt_msg7").hide();
		    $('.bgg').hide();
		});

		// 发红包弹出框
		$("#issuePacket").live('click',function(){
	   
		     $("#prompt_msg8").show();
		     $('.bgg').show();
		})
		$("#dlg-close8").live('click',function(){
		    $("#prompt_msg8").hide();
		    $('.bgg').hide();
		});

		// 批量充值弹出框
		$("#batchRecharge").live('click',function(){
	   
		     $("#prompt_msg10").show();
		     $('.bgg').show();
		})
		$("#dlg-close10").live('click',function(){
		    $("#prompt_msg10").hide();
		    $('.bgg').hide();
		});

		// 密码修改弹出框
		$("#complime_02").live('click',function(){
	   
		     $("#prompt_msg11").show();
		     $('.bgg').show();
		})
		$("#dlg-close11").live('click',function(){
		    $("#prompt_msg11").hide();
		    $('.bgg').hide();
		});

		// 添加等级组弹出框
		$("#grade_1").live('click',function(){
	   
		     $("#prompt_msg12").show();
		     $('.bgg').show();
		})
		$("#dlg-close12").live('click',function(){
		    $("#prompt_msg12").hide();
		    $('.bgg').hide();
		});

		// 添加等级弹出框
		$("#grade_2").live('click',function(){
	   
		     $("#prompt_msg13").show();
		     $('.bgg').show();
		})
		$("#dlg-close13").live('click',function(){
		    $("#prompt_msg13").hide();
		    $('.bgg').hide();
		});

		// 新增标签弹出框
		$("#label_1").live('click',function(){
	   
		     $("#prompt_msg14").show();
		     $('.bgg').show();
		})
		$("#dlg-close14").live('click',function(){
		    $("#prompt_msg14").hide();
		    $('.bgg').hide();
		});

		// 新增标签弹出框
		$("#setUpActi").live('click',function(){
	   
		     $("#prompt_msg15").show();
		     $('.bgg').show();
		})
		$("#dlg-close15").live('click',function(){
		    $("#prompt_msg15").hide();
		    $('.bgg').hide();
		});

		// 复制弹出框
		$("#copy_1").live('click',function(){
	   
		     $("#prompt_msg16").show();
		     $('.bgg').show();
		})
		$("#dlg-close16").live('click',function(){
		    $("#prompt_msg16").hide();
		    $('.bgg').hide();
		});

		// 移动弹出框
		$("#move_1").live('click',function(){
	   
		     $("#prompt_msg17").show();
		     $('.bgg').show();
		})
		$("#dlg-close17").live('click',function(){
		    $("#prompt_msg17").hide();
		    $('.bgg').hide();
		});

		// 会员详情点击编辑显示按钮
		$('#complime_01').click(function(){
			$('#messBtn01').show();
			var $table = $(this).parents('.usertable');
			var $input = $table.find('input');
			$input.removeAttr("disabled");
	
		});
		$('#complime_03').click(function(){
			$('#messBtn02').show();
		});
		
})







