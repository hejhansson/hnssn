
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




}();


function getWidth() {
	return $( window ).innerWidth();
}
