
!function() {
	'use strict';

	var info = $('.information_item');
	var windowWidth = getWidth();

	if(windowWidth > 98110) {
		console.log("hej");

		$('.portfolio_item').find('.image').click(function() {
			$(this).toggleClass('active');
			$('.portfolio').toggleClass('active');
				$('.portfolio_item').each(function() {
						$(this).toggleClass('hidden');
				});

				$('.heading').toggle();

				$(this).parent().toggleClass('hidden');
				$(this).parent().toggleClass('col-md-12');

			if($(this).parent().find('.portfolio_item__info').is(":visible")) {
				$(this).parent().find('.portfolio_item__info').hide();

			}
			else {

				$(this).parent().find('.portfolio_item__info').show();
			}

		});
	}



}();


function getWidth() {
	return $( window ).innerWidth();
}
