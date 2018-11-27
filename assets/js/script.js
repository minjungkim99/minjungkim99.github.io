$(document).ready(function() {
	const distanceToNextImage = -900;
	let currentImageNumber = 0;

	//hides about box
	$("#overlay, #about-box").hide();

	// prevents user from scrolling
	// note: not the best solution but i couldn't get fullpage.js to work lol
	// reference: https://stackoverflow.com/questions/8701754/just-disable-scroll-not-hide-it
	$('body').on('mousewheel touchmove', function(e) {
      e.preventDefault();
	});

	$('.big-plant-button').click(function() {
		// scrolls down to card view when click on big plant button
		// ref: stackoverflow
		$('html, body').animate({
        scrollTop: $("#card-view").offset().top
    	}, 1000);
		// moves carousel to corresponding card
		// ref: lab11 (?)
		currentImageNumber = parseInt($(this).attr('id'));
		$('#strip').css('left', currentImageNumber * distanceToNextImage);
	});

	$('.small-plant-button').click(function() {
		currentImageNumber = parseInt($(this).attr('id'));
		$('#strip').css('left', currentImageNumber * distanceToNextImage);
	});

	$('#home-button').click(function() {
		// scrolls up to card view when click on home button
		// ref: stackoverflow
		$('html, body').animate({
        scrollTop: $("#home").offset().top
    	}, 1000);
	});

	//closes about box
	$("#overlay, #close").click(function() {
		$("#overlay, #about-box").fadeOut(200);
	});
	//opens about box
	$("#about-button").click(function() {
		$("#overlay, #about-box").fadeIn(200);
	});


});