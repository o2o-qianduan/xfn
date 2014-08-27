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
/***宝贝图片左边切换部分*****june*******start****/
$(function(){
    var page = 1;
    var i = 5; //每版放5个图片
    // 点击向后按钮
    $("#right-1").click(function(){
        var $parent = $(this).parents("div.left_pic");//寻找当前元素的父元素
        var $v_out = $parent.find("div.i-list");//视频外围
        var $v_show = $parent.find("div._downP");//视频播放区域
        var v_width = $v_out.width();//外围宽度
        var len = $v_show.find("li").length; //图片数量
        var page_count = Math.ceil(len / i) ; //页面数目
        var yushu=parseInt(i/5);//每5个li为一组，判断出现的组数，觉得空余宽度
         if( !$v_show.is(":animated") ){    //判断“视频内容展示区域”是否正在处于动画
             if( page == page_count ){  //已经到最后一个版面了,如果再向后，必须跳转到第一个版面。
                $v_show.animate({ left : '5px'}, "slow"); //通过改变left值，跳转到第一个版面
                page = 1;
              }else{
                $v_show.animate({ left : '-='+(v_width-28) }, "slow");  //通过改变left值，达到每次换一个版面
                page++;
             }
         }
    });

    //点击向前按钮
    $("#left-1").click(function(){
       var $parent = $(this).parents("div.left_pic");//寻找当前元素的父元素
        var $v_out = $parent.find("div.i-list");//视频外围
        var $v_show = $parent.find("div._downP");//视频播放区域
        var v_width = $v_out.width();
        var len = $v_show.find("li").length;
        var page_count = Math.ceil(len / i);
/*        page=page_count;*/
        if(!$v_show.is(":animated")){
            if (page == 1) {
                /*$v_show.animate({left : "5px"},"slow");*/
                $v_show.animate({left : "-="+((v_width-28)*(page_count-1))},"slow");
                page = page_count;
            }else{
                 $v_show.animate({left : '+='+(v_width-28)},"slow");
                page--;
            }
        }
    });
})
/***宝贝图片左边切换部分*****june*********end*****/     
/***宝贝图片右边切换部分*****june*******start****/
$(function(){
    var page = 1;
    var i = 5; //每版放5个图片
    // 点击向后按钮
    $("#right-2").click(function(){
        var $parent = $(this).parents("div.right_pic");//寻找当前元素的父元素
        var $v_out = $parent.find("div.r-list");//视频外围
        var $v_show = $parent.find("div._rightP");//视频播放区域
        var v_width = $v_out.width();//外围宽度
        var len = $v_show.find("li").length; //图片数量
        var page_count = Math.ceil(len / i) ; //页面数目
        var yushu=parseInt(i/5);//每5个li为一组，判断出现的组数，觉得空余宽度
         if( !$v_show.is(":animated") ){    //判断“视频内容展示区域”是否正在处于动画
             if( page == page_count ){  //已经到最后一个版面了,如果再向后，必须跳转到第一个版面。
                $v_show.animate({ left : '3px'}, "slow"); //通过改变left值，跳转到第一个版面
                page = 1;
              }else{
                $v_show.animate({ left : '-='+(v_width-38) }, "slow");  //通过改变left值，达到每次换一个版面
                page++;
             }
         }
    });
    //点击向前按钮
    $("#left-2").click(function(){
       var $parent = $(this).parents("div.right_pic");//寻找当前元素的父元素
        var $v_out = $parent.find("div.r-list");//视频外围
        var $v_show = $parent.find("div._rightP");//视频播放区域
        var v_width = $v_out.width();
        var len = $v_show.find("li").length;
        var page_count = Math.ceil(len / i);
        if(!$v_show.is(":animated")){
            if (page == 1) {
                /*$v_show.animate({left : "5px"},"slow");*/
                $v_show.animate({left : "-="+((v_width-38)*(page_count-1))},"slow");
                page = page_count;
            }else{
                 $v_show.animate({left : '+='+(v_width-38)},"slow");
                page--;
            }
        }
    });
})
/***宝贝图片右边切换部分*****june*********end*****/     
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


//<![CDATA[订单走势选项卡
  $(function(){
      var $div_li =$("div.tab_menu ul li");
      $div_li.click(function(){
      $(this).addClass("selected")            //当前<li>元素高亮
           .siblings().removeClass("selected");  //去掉其它同辈<li>元素的高亮
            var index =  $div_li.index(this);  // 获取当前点击的<li>元素 在 全部li元素中的索引。
      $("div.tab_box > div")    //选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
          .eq(index).show()   //显示 <li>元素对应的<div>元素
          .siblings().hide(); //隐藏其它几个同辈的<div>元素
    }).hover(function(){
      $(this).addClass("hover");
    },function(){
      $(this).removeClass("hover");
    })
  })
//]]>
/******商品分类*****june****start*/
/*$(".btn-edit").live('click',function(){
      $("#c1").show();
     })*/
/******商品分类*****june****end*/



