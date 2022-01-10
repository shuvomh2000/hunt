$(document).ready(function () {
	//banner slider
	$(".image-slider").slick({
		autoplay: true,
		arrows: true,
		infinite: true,
		speed: 1000,
		fade: true,
		cssEase: "linear",
		prevArrow: "<i class='fas fa-arrow-left prev-arw'></i>",
		nextArrow: "<i class='fas fa-arrow-right next-arw'></i>",
	});

	//portfolio slider
	$(".port-footer").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
	});

	//services vertical slider
	$(".service-main").slick({
		arrows: true,
		centerMode: true,
		centerPadding: "0",
		vertical: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: "<i class='fas fa-chevron-up up'></i>",
		nextArrow: "<i class='fas fa-chevron-down down'></i>",
		autoplay: true,
	});

	//testimonial image vertical slider
	$(".testimonial-image-slider").slick({
		arrows: true,
		centerMode: true,
		centerPadding: "0",
		vertical: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: "<i class='fas fa-chevron-up up'></i>",
		nextArrow: "<i class='fas fa-chevron-down down'></i>",
		asNavFor: ".testimonial-text-slider",
		cssEase: "linear",
	});

	//testimonial text vertical slider
	$(".testimonial-text-slider").slick({
		arrows: false,
		vertical: true,
		centerMode: true,
		centerPadding: "0",
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: ".testimonial-image-slider",
		verticalSwiping: true,
		speed: 0.5,
		autoplay: true,
		cssEase: "linear",
	});

	//team slider area
	$(".team-slide").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
	});
	

	//brand slider area
	$(".brand-slider").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		centerMode: true,
		centerPadding: "0",
		autoplay: true,
	});
	
	
	//counter up area
	$(".counter").counterUp({
		delay: 20,
		time: 2000,
	});


	//window scrolling
	$(window).scroll(function () {
		var scrolling = $(this).scrollTop();

		//back to top show & hide
		if (scrolling > 50) {
			$(".back-to-top").fadeIn();
		} else {
			$(".back-to-top").fadeOut();
		}

		//nav fix
		if (scrolling > 50) {
			$(".header-bg").addClass("nav-fix");
		} else {
			$(".header-bg").removeClass("nav-fix");
		}
		//nav fix
		if (scrolling > 50) {
			$(".header-bg").add("nav-fix ul li a::after");
		} else {
			$(".header-bg").remove("nav-fix ul li a::after");
		}

		//logo fix
		if (scrolling > 50) {
			$(".logo").addClass("logo-fix img");
		} else {
			$(".logo").removeClass("logo-fix img");
		}
	});

	//back to top function
	$(".back-to-top").click(function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			1500
		);
	});

	//venobox effect
	$(".venobox").venobox();
	
	
});
