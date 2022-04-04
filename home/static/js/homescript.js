$(function(){

	var PlatformLink = $('.platform-a-link');
	var PlatformSection = $('#section_platform');

	$('.platform-a-link').click(function() {
		var scrollName = $(this).attr('data-scroll');
		scrollElem = $(scrollName);
		scrollTop = scrollElem.offset().top;

		$('html, body').animate({
			scrollTop: scrollTop - 180,
		}, 500);
	});

});