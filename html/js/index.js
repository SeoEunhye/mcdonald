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

/*tab*/
$(function() {
  $('.js-presentation').slick({
      autoplay: false,
      autoplaySpeed: 2000,
	  slideToShow:3,
      fade: false,
      arrows: false,
	  dots:true,
  });

  $('.js-photo').slick({
      autoplay: false,
      autoplaySpeed: 2000,
	  slideToShow:3,
      fade: false,
      arrows: false,
	  dots:true,
  });
  
  $('.js-tabs-item:not(:first)').hide();
	$('.js-tabs-link').on('click', function (e) {
		e.preventDefault();
		var tabLink = $(this);
		var target = $(this.hash);
		$('.js-tabs-text').removeClass('m-active');
		$('.js-tabs-item:visible').fadeOut("100000", function () {
			tabLink.children().addClass('m-active');
			target.fadeIn("100000");
            $('.js-photo').slick("setPosition", 0);
		});
    
    
	});
  
  
  $('.js-presentation').slick("setPosition", 0);
});