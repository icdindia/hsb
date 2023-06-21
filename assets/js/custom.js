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


