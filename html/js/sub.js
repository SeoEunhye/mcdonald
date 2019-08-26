/*pannel*/
$(document).ready(function(){

	//right 메뉴 펼쳤다가 끄기	
	$(".rightMenuBg").hide();
	$(".panel").click(function(){
		$(".rightmenu").animate({
			"width":"200px"
		},500)
		$(".rightMenuBg").fadeIn()
	})
	$(".closeBtn,.rightMenuBg").click(function(){
		$(".rightmenu").animate({
			"width":"0"
		},500)
		$(".rightMenuBg").fadeOut()
	})
})
/*pannel*/