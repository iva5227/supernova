$('.header-menu__icon').click(function (event) {
	$(this).toggleClass('active');
	$('.header-menu').toggleClass('active');
	if ($(this).hasClass('active')) {
		$('body').data('scroll', $(window).scrollTop());
	}
	$('body').toggleClass('lock');
	if (!$(this).hasClass('active')) {
		$('body,html').scrollTop(parseInt($('body').data('scroll')));
	}
});
//Adaptive functions
$(window).resize(function (event) {
	adaptive_function();
});
function adaptive_header(w, h) {
	var headerMenu = $('.header-menu');
	var menubody = $('.menu__body');
	if (w < 767) {
		if (!menubody.hasClass('done')) {
			menubody.addClass('done').appendTo(headerMenu);
		}
	} else {
		if (menubody.hasClass('done')) {
			menubody.removeClass('done').appendTo(headerMenu);
		}
	}
}
function adaptive_function() {
	var w = $(window).outerWidth();
	var h = $(window).outerHeight();
	adaptive_header(w, h);
}
adaptive_function();
//SLIDERS
if ($('.slider').length > 0) {
	$('.slider').slick({
		//autoplay: true,
		//infinite: false,
		dots: true,
		arrows: true,
		accessibility: false,
		slidesToShow: 1,
		autoplaySpeed: 1000,
		autoplay: true,
		adaptiveHeight: true,
		nextArrow: '<button type="button" class="slick-next"></button>',
		prevArrow: '<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]
	});
}