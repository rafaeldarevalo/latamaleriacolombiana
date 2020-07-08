$(document).ready(function () {
	setTimeout(() => {
		gsap.to(".instagram-feed ", {duration: 400, x:-13800, ease: "none" });
		gsap.to(".instagram-feedInverse", {duration: 400, x:13800, ease: "none" });
	}, 2000);

	$.instagramFeed({
		'tag': 'latamaleriacolombiana',
		'container': "#instagram-feed",
		'display_profile': false,
		'display_biography': false,
		'display_gallery': true,
		'callback': null,
		'styling': false,
		'items': 50,
		'items_per_row': 10,
		'margin': 1
	}); 
	$.instagramFeed({
		'tag': 'latamaleriacolombiana',
		'container': "#instagram-feedInverse",
		'display_profile': false,
		'display_biography': false,
		'display_gallery': true,
		'callback': null,
		'styling': false,
		'items': 50,
		'items_per_row': 10,
		'margin': 1
	}); 


//open nav
var vw = $(window).width();
		console.log(vw);
		
		if (vw > 575.98) {$(".js-nav").removeClass("js-close-nav")}
$(".js-nav-icon").on("click", function(){
	gsap.to(".js-head", {left: 0, duration: 0.3, ease:"easeInOUt"});
	gsap.from(".nav a", {opacity: 0, left: -50, stagger: 0.2, duration: 0.3, ease:"easeInOUt"});
})
//close nav



$(".js-close-nav").on("click", function(){
	console.log("hola close");
	
	gsap.to(".js-head", {left: "-100%", duration: 0.3, ease:"easeInOUt"})
})


// stager ingredients






	function ingredients() {
		var tl = gsap.timeline();
		tl.from(".js-ingredient", {
			opacity: 0,
			scale: 0,
			stagger: 0.2,
			duration: 0.6,
			ease: "back"
		}, 3.2)
		
		tl.from(".js-arrow", {
			
			scale: 0,
			stagger: 0.2,
			duration: 0.6,
			ease: "back"
		}, 3.2)
		return tl;
	}
/* -------------------------------- MAIN NAV -------------------------------- */

$(".js-nav").on("click", function(e){
	e.preventDefault();
	var attrNav = $(this).attr("data-link");
	
	$('html, body').animate({
		scrollTop: $("#"+attrNav).offset().top
	}, 1000);

})

	/* ------------------------------- SCROLLMAGIC ------------------------------ */

	// logo header
	var tl = gsap.timeline();
	tl.to(".js-logo", 0.2, {
		scale: .56,
		// top: -94
		top: -60
	})
	tl.to(".js-nav-icon", 0.2, {
		// scale: .56,
		// top: -94
		top: -30
	})
	tl.to(".js-head", 0.2, {
		backgroundColor: 'rgba(1,1,1, 1)'
	})

	// menu
	var tlMenu = gsap.timeline();
	tlMenu.from(".js-title-menu", 0.4, {
		scale: 0,
		ease: "back"
	})
	tlMenu.from(".js-menu-envueltos", 0.4, {
		xPercent: -200,
		ease: "easeInOut"
	},0.5)
	tlMenu.from(".js-menu-tamal", 0.4, {
		xPercent: 200,
		ease: "easeInOut"
	},0.5)

	var controller = new ScrollMagic.Controller();
	var scene = new ScrollMagic.Scene({
			triggerElement: "#trigger-logo"
		})
		.setTween(tl) // trigger a TweenMax.to tween
		.addIndicators({
			name: "1 (duration: 0)"
		}) // add indicators (requires plugin)
		.addTo(controller);

	var sceneMenu = new ScrollMagic.Scene({
			triggerElement: '#trigger-menu',  offset: -203
		})
		.setTween(tlMenu) // trigger a TweenMax.to tween
		.addIndicators({
			name: "1 (duration: 0)"
		}) // add indicators (requires plugin)
		.addTo(controller);


	/* -------------------------------- FAST MENU ------------------------------- */

	function icon() {
		var tl = gsap.timeline();
		tl.from(".js-icon", {
			opacity: 0,
			scale: 0,
			stagger: 0.2,
			duration: 0.4,
			ease: "back"
		}, 0.6);
		return tl;
	}
	$(".js-icon").hover(
		function () {

			gsap.to(this, {
				y: -30,
				duration: 0.4
			});
		},
		function () {
			gsap.to(this, {
				y: 0,
				duration: 0.4
			});

		}
	);


	/* ---------------------------------- STEPS --------------------------------- */



	// var tl = gsap.timeline();
	// tl.to(".js-step-1", {
	// 	opacity: 1,
	// 	duration: 1
	// });
	// tl.to(".js-step-1", {
	// 	opacity: 0,
	// 	duration: 0
	// }, 1);
	// tl.to(".js-step-2", {
	// 	opacity: 1,
	// 	duration: 1
	// }, 1);
	// tl.to(".js-step-2", {
	// 	opacity: 0,
	// 	duration: 1
	// }, 2);
	// tl.to(".js-step-3", {
	// 	opacity: 1,
	// 	duration: 1
	// }, 2);
	// tl.to(".js-step-3", {
	// 	y: 170,
	// 	duration: 1,
	// 	ease: "easeInOut"
	// }, 3);








	$(".js-open-tamal").on("click", function () {
		var vw = $(window).width();
		function moveTamal(){
		if (vw > 575.98) {
			
				tl.to(".js-step-3", {
					y: 200,
					duration: 2,
					ease: "back"
				}, 3);
			}
		}
		ingredients();
		gsap.to(".js-anatomy", {
			duration: 0.8,
			ease: "back",
			css: {
				top: 0
			}
		});

		var tl = gsap.timeline();
		tl.to(".js-step-1", {
			opacity: 1,
			duration: 1
		});
		tl.to(".js-step-1", {
			opacity: 0,
			duration: 0
		}, 1);
		tl.to(".js-step-2", {
			opacity: 1,
			duration: 1
		}, 1);
		tl.to(".js-step-2", {
			opacity: 0,
			duration: 1
		}, 2);
		tl.to(".js-step-3", {
			opacity: 1,
			duration: 1
		}, 2);
		moveTamal()
		
	});
	
	/* --------------------------------- SLIDER --------------------------------- */

	var proxyWidth = window.innerWidth;
	var active = 0;

	function addResetHoverFlow() {
		$(".js-banner").addClass("reset-overflow");
	}

	function clearResetHoverFlow() {
		$(".js-banner").removeClass("reset-overflow");
	}

	var goBack = function () {
		var tl = gsap.timeline();
		tl.to(".js-banner", {
			scale: 0.6,
			opacity: 0.4,
			duration: 0.3,
			ease: "power1.easeInOut"
		});
		tl.to(".js-slider-wrapper", {
			x: 0,
			duration: 0.3,
			ease: "power1.easeInOut"
		}, 0.3);
		tl.to(".js-banner", {
			scale: 1,
			opacity: 1,
			duration: 0.3,
			ease: "power1.easeInOut",
			onComplete: clearResetHoverFlow
		}, 0.6);
		active = 0;
	}

	$(".js-prev").on("click", function () {
		$(this).addClass("active");
		$(".js-next").removeClass("active");
		addResetHoverFlow();
		if (active == 1) {
			goBack();
		}


	});

	var goNext = function () {
		icon();
		var tl = gsap.timeline();
		tl.to(".js-banner", {
			scale: 0.6,
			opacity: 0.4,
			duration: 0.3,
			ease: "power1.easeInOut"
		});
		tl.to(".js-slider-wrapper", {
			x: -proxyWidth,
			duration: 0.3,
			ease: "power1.easeInOut"
		}, 0.3);
		tl.to(".js-banner", {
			scale: 1,
			opacity: 1,
			duration: 0.3,
			ease: "power1.easeInOut",
			onComplete: clearResetHoverFlow
		}, 0.6);
		active = 1;
	}
	$(".js-next").on("click", function () {

		$(this).addClass("active");
		$(".js-prev").removeClass("active");
		addResetHoverFlow();
		if (active == 0) {
			goNext();
		}




	});


/* ------------------------------- SLIDER MENU ------------------------------ */

$('.carousel').carousel({
	pause: true,
	interval: false
});

/* -------------------------------- OPEN MENU ------------------------------- */
$(".js-open-menu").on("click", function(e){
		e.preventDefault();	
	gsap.to(".js-menu", {
		duration: 0.4,
		ease: "Power1.easeInOut",
		css: {
			top: 0
		}
	});

	

})
$(".js-close-menu").on("click", function(e){
		e.preventDefault();	
	gsap.to(".js-menu", {
		duration: 0.4,
		ease: "Power1.easeInOut",
		css: {
			top: '-200%'
		}
	});
})

$(".js-close-anatomy").on("click", function(e){
	e.preventDefault();	

	gsap.to(".js-step-3", {
		y: 0,
		opacity: 0,
		duration: 2,
		ease: "back"
	}, 3);


gsap.to(".js-anatomy", {
	duration: 0.4,
	ease: "Power1.easeInOut",
	css: {
		top: '-200%'
	}
});
})

	/* ---------------------------------- TOUCH --------------------------------- */

	document.addEventListener('touchstart', handleTouchStart, false);
	document.addEventListener('touchmove', handleTouchMove, false);

	var xDown = null;
	var yDown = null;

	function getTouches(evt) {
		return evt.touches || // browser API
			evt.originalEvent.touches; // jQuery
	}

	function handleTouchStart(evt) {
		const firstTouch = getTouches(evt)[0];
		xDown = firstTouch.clientX;
		yDown = firstTouch.clientY;
	};

	function handleTouchMove(evt) {
		if (!xDown || !yDown) {
			return;
		}

		var xUp = evt.touches[0].clientX;
		var yUp = evt.touches[0].clientY;

		var xDiff = xDown - xUp;
		var yDiff = yDown - yUp;

		if (Math.abs(xDiff) > Math.abs(yDiff)) {
			/*most significant*/
			if (xDiff > 0) {
				console.log("/* left swipe */");
				goNext();

			} else {
				console.log("/* right swipe */");
				goBack();

			}
		} else {
			if (yDiff > 0) {
				/* up swipe */
			} else {
				/* down swipe */
			}
		}
		/* reset values */
		xDown = null;
		yDown = null;
	};


	/* ---------------------------------- INTRO --------------------------------- */

	function intro() {
		var tl = gsap.timeline();
		tl.from(".js-tamales-colombianos", {
			xPercent: -200,
			duration: 1.8,
			ease: "power4"
		}, 0.2);
		tl.from(".js-tamal", {
			xPercent: 200,
			duration: 1.8,
			ease: "power4"
		}, 0.2);
		tl.from(".js-bg", {
			y: 100,
			duration: 1.8,
			ease: "power4"
		}, 0.2);
		tl.from(".js-bg-base", {
			y: 200,
			duration: 1.8,
			ease: "power4"
		}, 0.2);
		tl.from(".js-head", {
			yPercent: -200,
			duration: 1.8,
			ease: "power4"
		}, 0.2);
		tl.from(".js-icon-usa", {
			yPercent: -200,
			duration: 1.8,
			ease: "power4"
		}, 0.2);
		tl.from(".js-logo", {
			yPercent: -200,
			duration: 1.8,
			ease: "power4"
		}, 0.2);
		tl.from(".js-open-tamal", {
			opacity: 0,
			scale: 0,
			duration: 0.9,
			ease: "back"
		}, 1.2);

		return tl;
	}

	function tooltip() {
		var tl = gsap.timeline();
		tl.from(".js-whatsapp", {
			opacity: 0,
			scale: 0,
			duration: 0.4,
			ease: "back"
		});
		tl.from(".js-tooltip-whatsapp", {
			xPercent: 200,
			duration: 0.4,
			ease: "back"
		}, 0.5);
		tl.from(".js-chat-icon-stagger", {
			opacity: 0,
			stagger: 0.2,
			duration: 0.4,
			ease: "back"
		}, 0.2)
		return tl;
	}

	function tamalesColombianos() {
		var tl = gsap.timeline({
			repeat: -1
		});
		tl.to(".js-tamales-colombianos", {
			y: '-=50',
			duration: 2,
			ease: "Power1.easeInOut"
		});
		tl.to(".js-tamales-colombianos", {
			y: '+=50',
			duration: 2,
			ease: "Power1.easeInOut"
		});

		return tl;
	}


	var master = gsap.timeline();
	master.add(intro())
	master.add(tamalesColombianos(), "2")
	master.add(tooltip(), "5")

	

	function close() {
		var tl = gsap.timeline();
		tl.to(".js-tooltip-whatsapp", {
			x: -100,
			duration: 0.2,
			ease: "back.easeInOut"
		}, 0.2);
		tl.to(".js-tooltip-whatsapp", {
			xPercent: 200,
			duration: 0.4,
			ease: "back.easeInOut"
		}, 0.4);
	}
	$(".js-close").on("click", function () {
		close();
	})
	setTimeout(function () {
		close();
	}, 8000)


	$(".js-open-tamal").hover(
		function () {
			gsap.to(this, {
				scale: 1.3,
				duration: 0.3,
				ease: "power4"
			});
		},
		function () {
			gsap.to(this, {
				scale: 1,
				duration: 0.3,
				ease: "power4"
			});
		}
	);




	/* ----------------------------------- MAP ---------------------------------- */
	const tilesProvider = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
	var map = L.map('mapid').setView([40.6643, -73.9385], 12);

	var IMO_basemap = L.tileLayer(tilesProvider, {
		maxZoom: 15,
		minZoom: 5,
	}).addTo(map);

	var dim = 120;
	let iconMarker = L.icon({
		iconUrl: 'img/pin.svg',
		iconSize: [dim, dim],
		iconAnchor: [(dim / 2), (dim)]

	});
	map._handlers.forEach(function (handler) {
		handler.disable();

	});
	let markerMiami = L.marker([25.7751, -80.2105], {
		icon: iconMarker
	}).addTo(map).bindPopup('<a href="https://www.google.com/maps/place/Element+New+York+Times+Square+West/@40.755841,-73.993978,17z/data=!3m1!4b1!4m8!3m7!1s0x89c259acd8960709:0xffb304788e355070!5m2!4m1!1i2!8m2!3d40.755841!4d-73.991784" target="_blank">Indicaciones</a>').openPopup();
	let markerNewJersey = L.marker([40.7281609, -74.0776367], {
		icon: iconMarker
	}).addTo(map).bindPopup('<a href="https://www.google.com/maps/place/Element+New+York+Times+Square+West/@40.755841,-73.993978,17z/data=!3m1!4b1!4m8!3m7!1s0x89c259acd8960709:0xffb304788e355070!5m2!4m1!1i2!8m2!3d40.755841!4d-73.991784" target="_blank">Indicaciones</a>').openPopup();
	let markerNewYork = L.marker([40.6643, -73.9385], {
		icon: iconMarker
	}).addTo(map).bindPopup('<a href="https://www.google.com/maps/place/Element+New+York+Times+Square+West/@40.755841,-73.993978,17z/data=!3m1!4b1!4m8!3m7!1s0x89c259acd8960709:0xffb304788e355070!5m2!4m1!1i2!8m2!3d40.755841!4d-73.991784" target="_blank">Indicaciones</a>').openPopup();
	

	


	$(".js-newyork").hover(
		
		function () {
			map.flyTo([40.6643, -73.9385], 12, {
				pan: {
					animate: true,
					duration: 200
				}
			});
		}
	);

	$(".js-newjersey").hover(
		function () {
			map.flyTo([40.7281609, -74.0776367], 12, {
				pan: {
					animate: true,
					duration: 200
				}
			});
		}
	);
	$(".js-miami").hover(
		function () {
			map.flyTo([25.7751, -80.2105], 8, {
				pan: {
					animate: true,
					duration: 200
				}
			});
		}
	);

	function mapInit () {
		map.flyTo([40.6643, -73.9385], 12, {
			pan: {
				animate: true,
				duration: 200
			}
		});
	}
	mapInit();



});

/* ------------------------------- END JQUERY ------------------------------- */

bodymovin.loadAnimation({
	
	container: document.querySelector('.js-delivery'), // Required
	path: 'data/data.json', // Required
	renderer: 'svg', // Required
	loop: true, // Optional
	autoplay: true, // Optionalreference. 
})
bodymovin.loadAnimation({
	container: document.querySelector('.js-uber'), // Required
	path: 'data/data.json', // Required
	renderer: 'svg', // Required
	loop: true, // Optional
	autoplay: true, // Optionalreference. 
})
bodymovin.loadAnimation({
	container: document.querySelector('.js-menu'), // Required
	path: 'data/data.json', // Required
	renderer: 'svg', // Required
	loop: true, // Optional
	autoplay: true, // Optionalreference. 
})
bodymovin.loadAnimation({
	container: document.querySelector('.js-map'), // Required
	path: 'data/data.json', // Required
	renderer: 'svg', // Required
	loop: true, // Optional
	autoplay: true, // Optionalreference. 
})


