/*****个人中心根据左边导航切换右边区域内容 *************june**---start*/
 /*var $div_ul = $(".current_list ul"); //获取类current_list中的ul
        $div_ul.click(function () {
            var index = $div_ul.index(this); //获取当前点击的<ul>元素在全部<ul>元素中的索引
            $("要显示的div元素")//选取要显示的div区域元素
            .eq(index).show();//显示<li>元素对应的<div>元素
            .siblings().hide();//隐藏其他几个同辈的<div>元素
        });*/
var $div_li = $(".current_list ul li"); //获取ul中的li元素
        $div_li.click(function () {
            $(".right_div").html("");
            var index = $div_li.index(this)+1; //获取当前单机的<li>元素在全部<li>元素中的索引
            var Pindex=$div_li.parent().index;//获取父元素的索引
            $('#tab-'+Pindex"-"+index)//选取要显示的div区域元素
            .eq(index).show();//显示<li>元素对应的<div>元素
            .siblings().hide();//隐藏其他几个同辈的<div>元素
        });
 /*****个人中心根据左边导航切换右边区域内容*************june**---end*/