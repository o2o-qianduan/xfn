/*****个人中心根据左边导航切换右边区域内容 *************june**---start*/
var tabOptionIndex8=0;
var len=$(".current_list ul li").length;
 $(function(){
     $(".current_list ul li").live('click',(function(){
         tabOptionIndex8=$(".current_list ul li").index(this);
         tabOptionClick8(tabOptionIndex8);
     });
 });
 function tabOptionClick8(tabOptionIndex){
     for(var i=0;i<len;i++){
         $(".SmenuTitle ul li").removeClass('SmenuTitleOn'+i);
         $(".SmenuCont").removeClass('SmenuContentOn'+i);
     }
     $(".SmenuTitle ul li").eq(tabOptionIndex).addClass('SmenuTitleOn'+tabOptionIndex);
     $(".SmenuCont").eq(tabOptionIndex).addClass('SmenuContentOn'+tabOptionIndex);
 }
 /*****个人中心根据左边导航切换右边区域内容*************june**---end*/