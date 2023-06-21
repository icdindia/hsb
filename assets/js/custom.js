// var btnToggle = document.getElementsByClassName("hamburger");
// btnToggle[0].addEventListener("click", function () {
// 	$(this).toggleClass('open');
// 	$('.menu-header-container').toggleClass('d-sm-block');
// 	//  $('.menu li:nth-child(1)').toggleClass('o-show');
// });



$('#fullpage').fullpage({
	sectionSelector: '.section',
	// scrollBar: true,
	normalScrollElements: '.scrolldiv',
	// scrollOverflow: true,
	// offsetSections: true,
	scrollingSpeed: 800,
	easing: 'easeOut',
}
);

$(document).on('click', '#moveUp', function(){
	$.fn.fullpage.moveSectionDown();
  });

image_height =  520;

setInterval(function () {


		if ($('body').hasClass('fp-viewing-0')) {
			$('.main-site').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -' + (image_height * 0) + 'px, 0px)', 'transform-style': 'preserve-3d' });
		}
		if ($('body').hasClass('fp-viewing-1')) {
			$('.main-site').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -' + (image_height) + 'px, 0px)', 'transform-style': 'preserve-3d' });
		}
		if ($('body').hasClass('fp-viewing-2')) {
			$('.main-site').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -' + (image_height * 2) + 'px, 0px)', 'transform-style': 'preserve-3d' });
		}
		if ($('body').hasClass('fp-viewing-3')) {
			$('.main-site').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -' + (image_height * 3) + 'px, 0px)', 'transform-style': 'preserve-3d' });
		}
		if ($('body').hasClass('fp-viewing-4')) {
			$('.main-site').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -' + (image_height * 4) + 'px, 0px)', 'transform-style': 'preserve-3d' });
		}
		if ($('body').hasClass('fp-viewing-5')) {
			$('.main-site').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -' + (image_height * 5) + 'px, 0px)', 'transform-style': 'preserve-3d' });
		}
		if ($('body').hasClass('fp-viewing-6')) {
			$('.main-site').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -' + (image_height * 6) + 'px, 0px)', 'transform-style': 'preserve-3d' });
		}
		if ($('body').hasClass('fp-viewing-7')) {
			$('.main-site').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -' + (image_height * 7) + 'px, 0px)', 'transform-style': 'preserve-3d' });
		}
		if ($('body').hasClass('fp-viewing-8')) {
			$('.main-site').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -' + (image_height * 8) + 'px, 0px)', 'transform-style': 'preserve-3d' });
		}
		if ($('body').hasClass('fp-viewing-9')) {
			$('.main-site').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -' + (image_height * 9) + 'px, 0px)', 'transform-style': 'preserve-3d' });
		}
		if ($('body').hasClass('fp-viewing-10')) {
			$('.main-site').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -' + (image_height * 10) + 'px, 0px)', 'transform-style': 'preserve-3d' });
		}
		if ($('body').hasClass('fp-viewing-11')) {
			$('.main-site').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -' + (image_height * 11) + 'px, 0px)', 'transform-style': 'preserve-3d' });
		}
		if ($('body').hasClass('fp-viewing-12')) {
			$('.main-site').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -' + (image_height * 12) + 'px, 0px)', 'transform-style': 'preserve-3d' });
		}
		if ($('body').hasClass('fp-viewing-13')) {
			$('.main-site').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -' + (image_height * 13) + 'px, 0px)', 'transform-style': 'preserve-3d' });
		}
		if ($('body').hasClass('fp-viewing-14')) {
			$('.main-site').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -' + (image_height * 14) + 'px, 0px)', 'transform-style': 'preserve-3d' });
		}
		if ($('body').hasClass('fp-viewing-15')) {
			$('.main-site').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -' + (image_height * 15) + 'px, 0px)', 'transform-style': 'preserve-3d' });
		}
		if ($('body').hasClass('fp-viewing-16')) {
			$('.main-site').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -' + (image_height * 16) + 'px, 0px)', 'transform-style': 'preserve-3d' });
		}
		if ($('body').hasClass('fp-viewing-17')) {
			$('.main-site').css({ 'will-change': 'transform', 'transform': 'translate3d(0px, -' + (image_height * 17) + 'px, 0px)', 'transform-style': 'preserve-3d' });
		}


	


}, 200);