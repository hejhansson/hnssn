
!function() {
	'use strict';

	var info = $('.information_item');
	var windowWidth = getWidth();

	if(windowWidth > 980) {
		$( '.portfolio_item' ).hover(function() {
			info.find('h2').html($(this).data('client'));
			info.find('p').html($(this).data('info'));
			info.find('span').html('<small>Tryck på bilden för att besöka sidan.</small>');
		});

		$( '.portfolio_item' ).mouseout(function() {
			info.find('h2').html('');
			info.find('p').html('');
			//info.find('p').html('Håll musen över en bild för att se mer information om projektet.');
			info.find('span').html('');
		});
	}

	if(windowWidth > 11980) {
		var lastScrollTop = 0;
		$(window).scroll(function(event){
		   var st = $(this).scrollTop();
		   if (st > lastScrollTop){
		       console.log('down');
					 $('.site-header .col-sm-3').css('width', '5%');
					 $('.site-header .col-sm-3 a').html('AH');
					 $('.site-header').addClass('lighter');

		   } else {

					setTimeout(function(){
						$('.site-header').removeClass('lighter');
			      $('.site-header .col-sm-3 a').html('Alexander Hansson');
					}, 200);
					$('.site-header .col-sm-3').css('width', '25%');
		   }
		   lastScrollTop = st;
		});
	}



}();


function getWidth() {
	return $( window ).innerWidth();
}
