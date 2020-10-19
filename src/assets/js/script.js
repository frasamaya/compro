/*
Theme Name: Exvox - MULTIPURPOSE Angular 9 Template.
Author: Metropolitanthemes
Author URL: https://themeforest.net/user/metrotpolitanthemes
Version: 1.0.0
*/
$(function () {
	'use strict';
	$(window).on('load', function () {
		$('.progress-circle-prog').addClass('fill-mode');
	});
	
	//-------- Navigation on scroll----// 
	function navScroll() {
		var nav = $(".start-style");
		var pos = nav.position();
		var windowpos = $(window).scrollTop();
		if (windowpos > pos.top) {
			nav.addClass('scroll-on');
		} else {
			nav.removeClass('scroll-on');
		}
	}
	$(window).scroll(function () {
		navScroll();
	});
	
	

	//*---------------------Tab------------------*//
	$('#Monthly-tab').on('click', function () {
		$('.monthly-txt').addClass('active-color');
		$('.annualy-txt').removeClass('active-color');
	});
	$('#Annualy-tab').on('click', function () {
		$('.monthly-txt').removeClass('active-color');
		$('.annualy-txt').addClass('active-color');
	});
	
	//----------------Homepage 1 Slider------------//
	$('.exp-home1-slider').not('.slick-initialized').slick({
		dots: true,
		dotsClass: 'slick-modified-dots container',
		infinite: true,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1
	});
	
});