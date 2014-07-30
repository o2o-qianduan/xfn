
$(".container").load(function(){
var mainheight = $(this).contents().find("body").height()+30;
$(this).height(mainheight);
}); 