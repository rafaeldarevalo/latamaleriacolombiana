$(document).ready(function () {

    //general variables

    var windowWidth = $(window).width();
    // console.log(windowWidth);


    //initial center pin map
    setTimeout(() => {
        gsap.to(".instagram-feed ", {
            duration: 400,
            x: -13800,
            ease: "none"
        });
        gsap.to(".instagram-feedInverse", {
            duration: 400,
            x: 13800,
            ease: "none"
        });
    }, 2000);

    //Gallery instagram
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

    if (windowWidth > 575.98) {
        $(".js-nav").removeClass("js-close-nav")
    }
    $(".js-nav-icon").on("click", function () {
        $(this).hide();
        $(".js-nav-icon-close").fadeIn();
        gsap.to(".js-head", {
            left: 0,
            duration: 0.3,
            ease: "easeInOUt"
        });
        gsap.from(".nav a", {
            opacity: 0,
            left: -50,
            stagger: 0.2,
            duration: 0.3,
            ease: "easeInOUt"
        });
    })
    //close nav

    $(".js-close-nav").on("click", function () {
        $(".js-nav-icon-close").fadeOut();
        $(".js-nav-icon").fadeIn();
        gsap.to(".js-head", {
            left: "-100%",
            duration: 0.3,
            ease: "easeInOUt"
        })
    })
    $(".js-nav-icon-close").on("click", function () {
        $(this).hide();
        $(".js-nav-icon").fadeIn();
        gsap.to(".js-head", {
            left: "-100%",
            duration: 0.3,
            ease: "easeInOUt"
        })
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

    $(".js-nav").on("click", function (e) {
        e.preventDefault();
        var attrNav = $(this).attr("data-link");

        $('html, body').animate({
            scrollTop: $("#" + attrNav).offset().top
        }, 1000);

    })

    /* ------------------------------- SCROLLMAGIC ------------------------------ */

    // logo header
    var tl = gsap.timeline();
    tl.to(".js-logo", 0.2, {
        scale: .80,
        // top: -94
        top: -60
    })
    tl.to(".js-nav-icon", 0.2, {
        // scale: .56,
        // top: -94
        top: -20
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
    }, 0.5)
    tlMenu.from(".js-menu-tamal", 0.4, {
        xPercent: 200,
        ease: "easeInOut"
    }, 0.5)

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
        triggerElement: '#trigger-menu',
        offset: -203
    })
        .setTween(tlMenu) // trigger a TweenMax.to tween
        .addIndicators({
            name: "1 (duration: 0)"
        }) // add indicators (requires plugin)
        .addTo(controller);


    /* -------------------------------- FAST MENU ------------------------------- */

    function icon() {
        var windowWidth = $(window).width();

        if (windowWidth > 575.98) {

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
        var windowWidth = $(window).width();

        function moveTamal() {
            if (windowWidth > 575.98) {

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

    $(".js-open-anatomy").on("click", function () {
        var windowWidth = $(window).width();

        function moveTamal() {
            if (windowWidth > 575.98) {

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
    $(".js-open-menu").on("click", function (e) {
        e.preventDefault();
        gsap.to(".js-menu", {
            duration: 0.4,
            ease: "Power1.easeInOut",
            css: {
                top: 0
            }
        });


    })
    $(".js-close-menu").on("click", function (e) {
        e.preventDefault();
        gsap.to(".js-menu", {
            duration: 0.4,
            ease: "Power1.easeInOut",
            css: {
                top: '-200%'
            }
        });
    })

    $(".js-close-modal").on("click", function (e) {
        e.preventDefault();
       
        gsap.to(".js-modal-team", {
            duration: 0.4,
            ease: "Power1.easeInOut",
            css: {
                top: '-200%'
            }
        });
    })
    $(".js-open-trabaja").on("click", function (e) {
        e.preventDefault();
       
        gsap.to(".js-modal-team", {
            duration: 0.4,
            ease: "Power1.easeInOut",
            css: {
                top: '0'
            }
        });
    })

    $(".js-close-anatomy").on("click", function (e) {
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
    var map = L.map('mapid').setView([40.6670, -73.8478], 12);

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
    let markerNewJersey = L.marker([40.7200, -74.2582], {
        icon: iconMarker
    }).addTo(map).bindPopup('<a href="https://www.google.com/maps/place/LA+TAMALERIA+COLOMBIANA+NJ+%F0%9F%87%A8%F0%9F%87%B4%F0%9F%87%BA%F0%9F%87%B8/@40.7200482,-74.2582011,10z/data=!4m8!1m2!2m1!1sla+tamaleria+colombiana+NEWJERSEY!3m4!1s0x89c2f7c40bb63677:0x65f62fc4d1d3e8b0!8m2!3d40.7198664!4d-73.9780035" target="_blank">Indicaciones</a>').openPopup();
    let markerNewYork = L.marker([40.6643, -73.9385], {
        icon: iconMarker
    }).addTo(map).bindPopup('<a href="https://www.google.com/maps/place/LA+TAMALERIA+COLOMBIANA+USA/@40.7582726,-91.8098624,4z/data=!4m8!1m2!2m1!1sla+tamaleria+colombiana+usa!3m4!1s0x89c25f766eb86a07:0xe7ff942f8e2b4c3c!8m2!3d40.7582726!4d-73.8801749" target="_blank">Indicaciones</a>').openPopup();


    $(".js-newyork").on("click", function () {
            map.flyTo([40.6643, -73.9385], 12, {
                pan: {
                    animate: true,
                    duration: 200
                }
            });
        }

    );

    $(".js-newjersey").on("click",
        function () {
            map.flyTo([40.7200, -74.2582], 12, {
                pan: {
                    animate: true,
                    duration: 200
                }
            });
        }
    );
    $(".js-miami").on("click",
        function () {
            map.flyTo([25.7751, -80.2105], 8, {
                pan: {
                    animate: true,
                    duration: 200
                }
            });
        }
    );

    function mapInit() {
        map.flyTo([40.6643, -73.9385], 12, {
            pan: {
                animate: true,
                duration: 200
            }
        });
    }

    mapInit();

    $(".js-item").on("click", function() {
             $(".js-item").removeClass("active");
            $(this).addClass("active");



        }
    );


    let svg = {
        arrow: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <g> <path class="arrow" d="M1.35,18.17c2.51,2.84,5.6,5.16,8.96,6.91c3.36,1.76,7.02,2.92,10.74,3.54l1.4,0.2l0.7,0.1l0.35,0.05 l0.35,0.03l1.41,0.1l0.7,0.05c0.23,0.02,0.47,0.03,0.7,0.03c0.94-0.01,1.88,0.04,2.82,0c0.94-0.07,1.88-0.08,2.81-0.17 c3.74-0.34,7.41-1.13,11.08-2.18c0.19-0.06,0.39,0.05,0.45,0.25c0.05,0.17-0.03,0.34-0.18,0.42c-3.44,1.84-7.3,2.85-11.2,3.19 c-0.49,0.06-0.98,0.05-1.46,0.08l-1.47,0.06c-0.49,0.03-0.98-0.02-1.47-0.03l-1.46-0.06c-0.24-0.01-0.49-0.03-0.73-0.06l-0.73-0.09 l-1.45-0.18l-0.36-0.04l-0.36-0.07l-0.72-0.14l-1.43-0.28c-3.8-0.87-7.46-2.26-10.85-4.13c-3.39-1.87-6.49-4.26-9.14-7.09 c-0.14-0.14-0.13-0.37,0.02-0.51C0.98,18.01,1.21,18.02,1.35,18.17C1.35,18.16,1.35,18.17,1.35,18.17z" /> <path class="arrow" d="M43.1,31.16c0.38-0.53,0.76-1.06,1.16-1.57c0.4-0.51,0.81-1.02,1.23-1.52c0.42-0.5,0.86-0.98,1.31-1.46 c0.45-0.48,0.91-0.95,1.41-1.4l0.24,1.2c-0.57-0.1-1.14-0.21-1.71-0.34c-0.57-0.13-1.12-0.29-1.68-0.47 c-0.55-0.18-1.09-0.39-1.62-0.65c-0.52-0.26-1.03-0.56-1.5-0.95c-0.16-0.14-0.18-0.38-0.04-0.54c0.08-0.09,0.19-0.14,0.3-0.13 c0.6,0.01,1.17,0.11,1.73,0.22c0.56,0.12,1.1,0.27,1.64,0.44c0.54,0.18,1.08,0.35,1.61,0.54l1.6,0.58l0.11,0.04 c0.34,0.12,0.51,0.49,0.39,0.83c-0.05,0.14-0.15,0.26-0.27,0.33c-0.53,0.33-1.05,0.68-1.55,1.06c-0.5,0.38-0.98,0.8-1.43,1.24 c-0.45,0.44-0.88,0.91-1.27,1.41c-0.39,0.49-0.76,1.01-1.08,1.55c-0.1,0.17-0.32,0.23-0.49,0.13c-0.17-0.1-0.23-0.32-0.13-0.49 C43.08,31.18,43.09,31.17,43.1,31.16z" /> </g> </svg>',
        tamal: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 528.2 251.3"><g><g><g><g><g><path fill="#FFF" d="M523 144l-1-13c0-5-1-9-3-13-1-3-2-6-5-8-3-4-7-7-11-8-5-2-10-2-15-2l-12 3a28 28 0 00-10 6l-10-5-14-2-12 3-6 3-9-3-14 1-6 1-5-1-15 1c-3 0-6 2-8 4h-1c-2-2-5-3-9-3l-20 1c-3 0-6 2-8 4h-1c-2-2-5-3-8-3l-16 1c-3 0-6 1-8 3l-1 1-6-2-10-1-22 1-4 1-3-1-16 1c-5 0-10 4-11 10l-2 14-4-14c-2-5-7-9-12-9l-16 1c-3 0-6 2-8 4l-4-2c-5-2-10-2-15-2l-12 3-8 4c-4 4-7 8-8 13-2 4-2 9-2 14l2 48v1l-3-68c0-3-2-6-4-8s-5-3-8-3l-16 1c-3 0-6 1-8 3l-5-2-14-2-12 3-9 5-1 1-9-5c-5-1-10-2-15-1l-12 2-8 5c-4 3-7 8-8 12-2 5-2 9-2 14l3 57 2 12 5 9c3 3 7 6 12 8 5 1 9 2 14 1l13-2 8-5 2-2c2 3 6 4 9 5 4 2 9 2 14 2l12-2c3-1 5-2 6-4l9 3 37-2c2 0 4 0 6-2l2 1c4 2 9 2 14 2s9-1 13-3l6-3c2 2 5 3 8 3l15-1 5-1 5 1 11-1 4-1 5 1 15-1 4-1 3 1 21-1c5 0 9-1 13-3l4-2 1 1c2 2 5 3 8 3l16-1h3l16-1c3 0 6-2 8-4l9 3 16-1h3l15-1 5-1 5 1 16-1c3 0 5-1 8-3l4 2c5 1 10 2 15 1l12-2 8-5 2-2 10 5c4 2 9 2 14 2l12-2 9-5 8-12c1-5 2-10 1-14v-12a36 36 0 00-8-21l3-2c3-3 4-6 4-9z"/></g></g><g><path fill="#F9CE00" d="M55 210c1 14-6 21-19 21-14 1-21-5-22-19l-2-57c-1-13 6-20 19-21 14-1 21 6 21 19l1 14-16 1v-14c-1-3-2-5-5-5s-5 2-5 6l3 56c0 4 2 5 5 5s4-2 4-5v-14h15l1 13zM101 208c0 13-6 20-20 21-13 1-20-6-21-19l-3-57c0-13 6-21 20-21 13-1 20 6 21 19l3 57zm-19-56c0-4-1-5-4-5h-1c-3 0-4 2-4 5l3 57c0 3 2 5 5 5s4-2 4-6l-3-56zM108 226l-4-94 15-1 4 79h21l1 15-37 1zM187 204c1 13-6 20-19 21-14 1-21-6-22-19l-2-57c-1-14 6-21 19-21 14-1 21 6 21 19l3 57zm-18-56c0-4-2-6-5-5-3 0-5 2-4 5l2 57c0 3 2 5 5 5 3-1 5-2 4-6l-2-56zM223 189l12-63 15-1 5 94-15 1-2-44-8 44-10 1-12-43 2 43-15 1-5-94 16-1 17 62z"/><path fill="#004A94" d="M258 125l21-2c13 0 20 6 20 20l1 14c0 6-2 11-6 13 5 2 7 6 7 13l1 13c1 14-6 21-19 22l-21 1-4-94zm16 14l1 24h7c2-1 2-3 2-5v-14c-1-4-2-5-5-5h-5zm2 39l1 25h5c3 0 4-2 4-6v-14c-1-2-2-4-4-4l-3-1h-3zM305 122l15-1 5 95h-16l-4-94zM371 180l6 33-16 1-4-19h-11l-2 20-16 1 3-34 7-61 20-1 13 60zm-16 0l-6-29-2 29h8z"/><path fill="#BD1622" d="M375 119l16-1 13 46-3-46 15-1 5 94-16 1-12-45 2 45-15 1-5-94zM467 190c0 14-6 21-20 21-13 1-20-5-21-19l-3-56c0-14 6-21 20-22 13 0 20 6 21 20l3 56zm-19-56c0-3-1-5-5-5-3 0-4 2-4 6l3 56c0 4 1 5 5 5 3 0 4-2 4-5l-3-57zM470 133c-1-13 5-21 19-21 13-1 21 6 21 19l1 14h-16l-1-13c0-3-1-5-4-5h-1c-3 0-4 2-4 6l1 8c0 4 4 8 12 14 9 5 14 13 14 21l1 12c1 13-6 21-19 21-14 1-21-6-22-19v-14h15l1 13c0 4 2 5 5 5s4-2 4-5v-11c0-4-5-9-13-14-9-6-14-13-14-22v-9z"/></g></g><g><g><g><path fill="#B3B3B4" d="M189 108l-15-70c-1-4-5-7-9-7h-25c-5 0-8 3-9 7l-17 72c0 3 0 6 2 8s4 3 7 3h18c5 0 8-3 9-8l1-7 2 6c1 4 4 7 9 7h18c3 0 6-1 8-3 1-2 2-5 1-8z"/><path fill="#FFF" d="M194 104l-16-70c0-4-4-7-8-7h-26c-4 0-8 2-9 7l-17 72c0 2 0 5 2 7 2 3 5 4 7 4h18c5 0 9-3 9-8l2-8 1 6c1 5 5 8 9 8h19c3 0 5-2 7-4s2-5 2-7z"/><path fill="#3C3C3B" d="M189 105l-15-70c0-3-2-4-4-4h-26c-2 0-4 1-5 4l-16 72c-1 1 0 3 1 4l3 2h18c3 0 5-2 5-5l2-11h7l2 10c1 2 3 3 5 3h19l4-1v-4zm-32-33h-2l1-4 1 4z"/><path fill="#DDDB00" d="M168 35h-26l-2 2-16 72v2l2 1h18l2-2 2-14h12l2 12 2 1h21v-2l-15-70-2-2zm-10 41h-7l4-20 3 20z"/><path fill="#FFF" d="M141 38l-17 72h18l3-15h15l3 13h19l-16-70h-25zm5 41l7-33 6 33h-13z"/></g><g><path fill="#B3B3B4" d="M234 45l-17 2c-3 0-6 2-7 6l-4 10-3-8c-2-3-6-5-10-5l-15 3c-5 1-8 5-8 10l8 69c1 5 5 8 10 8l15-2c5-1 9-5 8-10v-5h3l6-2 1 7c0 5 5 8 10 8l13-2c5 0 9-5 8-10l-8-71c-1-5-5-9-10-8z"/><path fill="#FFF" d="M238 40l-17 2c-3 0-6 3-8 6l-3 10-4-8c-1-3-5-5-9-5h-1l-15 3c-4 1-8 6-7 10l8 69c1 5 5 9 10 8l15-2c5 0 9-5 8-10v-4h3c2-1 4-1 5-3l1 7c1 5 5 9 10 8l14-2c5 0 9-5 8-10l-8-71c-1-5-5-9-10-8z"/><path fill="#3C3C3B" d="M238 44l-16 2c-2 0-4 2-4 3l-7 21-9-18c0-2-2-3-4-3l-1 1-15 3c-2 0-4 2-4 5l8 68c0 3 3 5 5 5l16-2c2-1 4-3 4-6l-2-16 4 6c1 1 3 2 4 1l4-2 5-11 2 21c1 3 3 5 6 5l13-2c3 0 5-3 4-5l-8-72c0-2-2-4-5-4z"/><path fill="#DDDB00" d="M237 49l-16 1-2 2-9 26-11-23-3-1-15 3-2 2 8 69 3 2 15-2c1 0 2-1 2-3l-3-25 10 13h2l2-1 8-20 4 32 2 2 14-2 2-2-9-72c0-1-1-2-2-1z"/><path fill="#FFF" d="M195 57l-15 3 8 69 15-2-3-33 14 18 12-27 5 40 13-2-8-71-17 2-10 31z"/></g><g><path fill="#B3B3B4" d="M312 96l-19-69c-1-4-5-7-9-7l-26 1c-4 1-7 4-8 8l-14 73a9 9 0 0010 10h18c4-1 8-4 9-9v-7h1l1 6c1 4 5 7 9 6h19c3 0 5-2 7-4s2-5 2-8z"/><path fill="#FFF" d="M316 92l-19-69c-1-5-5-7-9-7l-25 1c-5 0-8 3-9 8l-13 72a9 9 0 009 11l18-1c5 0 8-3 9-8l1-8 1 6c1 5 5 7 10 7l18-1c3 0 6-1 7-3 2-3 2-5 2-8z"/><path fill="#3C3C3B" d="M312 93l-19-69c0-2-2-4-5-4l-25 1c-3 0-4 2-5 4l-13 73a5 5 0 005 6l18-1c2 0 4-2 4-5l2-11h7l3 9c0 2 2 4 4 4l19-1a5 5 0 005-6zm-35-32h-1l1-3v3z"/><path fill="#DDDB00" d="M287 24l-26 1-2 2-13 73 1 2h19l2-2 2-14h12l3 11 2 2 19-1 1-1v-2l-18-69-2-2zm-8 42h-8l3-20 5 20z"/><path fill="#FFF" d="M260 29l-13 72 18-1 1-15 16-1 3 13 19-1-19-69-25 2zm7 40l6-34 7 33-13 1z"/></g><g><path fill="#B3B3B4" d="M392 79l1-5-1-12c0-3-2-5-4-7 2-2 4-5 3-8l-1-15c-1-5-5-9-10-8l-35 3c-5 0-9 5-9 10l6 70c1 5 5 9 10 9l38-4c5 0 8-5 8-10l-2-16c0-3-2-6-4-7z"/><path fill="#FFF" d="M396 74l1-5-1-11c0-3-2-6-4-7 2-2 3-5 3-8l-1-16c-1-5-5-8-10-8l-35 3c-5 1-9 5-9 10l6 71c1 5 5 8 10 8l38-3c5-1 8-5 8-10l-2-17c0-3-2-5-4-7z"/><path fill="#3C3C3B" d="M391 77l-15 2v-3l12-1c3-1 5-3 4-6l-1-11c0-3-2-5-5-4l-14 1v-5l15-2c2 0 4-2 4-5l-2-15c0-3-2-5-5-5l-35 3c-3 1-5 3-5 6l7 70c0 3 2 5 5 5l37-4c3 0 5-2 4-5l-1-16c0-3-2-5-5-5z"/><path fill="#DDDB00" d="M390 82l-18 1-1-8 15-2c2 0 3-1 3-2l-1-11-3-2-16 1-2-9 18-3 2-2-1-15c-1-2-2-3-3-2l-35 3-2 2 6 71 2 2 38-4 2-2-2-16c0-2-1-2-2-2z"/><path fill="#FFF" d="M368 74l17-2-1-11-18 2-3-14 20-3-1-15-36 3 6 70 38-3-2-16-19 1z"/></g><g><path fill="#B3B3B4" d="M440 51l-6-5 3-2 9-10c3-3 3-7 1-11-6-8-17-14-29-14-17 0-29 12-29 29 0 8 4 17 11 23l-11 6a9 9 0 00-3 13c9 13 22 20 38 20 12 0 25-13 25-25 0-10-3-17-9-24z"/><path fill="#FFF" d="M444 47l-6-5 3-2 9-10c3-3 3-8 1-11-5-8-17-14-29-14-16 0-29 12-29 29 0 8 4 16 11 23l-10 6a9 9 0 00-4 13c10 13 22 20 38 20 12 0 25-13 25-26 1-9-2-16-9-23z"/><path fill="#3C3C3B" d="M441 50c-2-3-7-6-14-10-5-3-5-5-5-6 0-2 0-2 2-2l7 5 3 2 4-2 9-10c2-2 2-4 1-6-5-7-15-12-25-12-15 0-25 10-25 24 0 10 7 21 17 27 2 1 8 4 8 6v1l-8-6c-1-2-4-3-6-2l-13 7a5 5 0 00-2 7c9 12 20 18 34 18 10 0 21-11 21-21 0-8-2-14-8-20z"/><path fill="#DDDB00" d="M438 53l-13-9c-5-3-7-6-7-8 0-3 1-5 4-5s7 2 9 6h4l9-10v-3c-4-6-14-11-23-11-13 0-22 9-22 22 0 9 6 18 16 24 5 3 10 6 10 8 0 4-3 4-3 4-3 0-8-3-11-7l-2-1-13 7-2 2 1 1c8 11 18 17 32 17 8 0 18-10 18-18 0-7-2-13-7-19z"/><path fill="#FFF" d="M435 56l-13-10c-6-3-8-6-8-9 0-5 2-7 7-7 3 0 7 3 10 6l9-10c-3-5-12-9-21-9-11-1-20 7-20 19 0 8 6 17 15 22 6 3 11 6 11 10 0 6-4 6-5 6-4 0-9-4-12-8l-13 7c7 10 17 15 30 16 7 0 16-9 16-17 0-6-2-12-6-16z"/></g><g><path fill="#B3B3B4" d="M121 13l-46 9c-2 0-4 2-6 4l-1 7 5 17c1 4 6 7 10 6l6-1 8 43c1 5 6 8 11 7l16-3c4-1 8-6 7-11l-9-43 5-1c5-1 8-6 7-11l-3-16c0-5-5-8-10-7z"/><path fill="#FFF" d="M124 8l-45 9c-3 0-5 2-6 4-2 2-2 5-1 7l4 17c1 4 6 7 11 6l5-1 9 43c1 5 5 8 10 7l16-3c5-1 8-6 7-11l-8-44 5-1c5-1 8-5 7-10l-3-16c-1-5-6-8-11-7z"/><path fill="#3C3C3B" d="M125 12l-46 9-3 2v4l4 16c1 3 3 4 6 4l10-2 9 47c0 3 3 4 6 4l15-3c3-1 5-3 4-6l-9-48 9-2c3 0 4-3 4-6l-3-15c-1-3-3-4-6-4z"/><path fill="#DDDB00" d="M130 34l-3-16c0-1-1-2-2-1l-46 8-2 1v2l5 17 2 1 13-2 9 49 3 2 16-3 1-3-10-50 12-3c2 0 2-1 2-2z"/><path fill="#FFF" d="M97 42l10 52 16-3-10-53 13-3-3-15-45 9 4 16z"/></g><g><path fill="#B3B3B4" d="M340 97l-11-1 2-46-2-7-6-2h-16c-4 1-8 4-8 9l-4 70c0 5 3 10 8 10l35 2c5 0 9-4 10-9l1-17c0-5-4-9-9-9z"/><path fill="#FFF" d="M345 93l-11-1 2-46c0-2-1-5-3-7l-6-2h-15c-5 0-9 4-9 9l-4 70c0 5 4 10 9 10l35 2c5 0 9-4 9-9l1-17c1-5-3-9-8-9z"/><path fill="#3C3C3B" d="M344 97l-15-1 2-50c1-2 0-3-1-4l-3-1h-15c-2 0-4 2-5 5l-3 70c0 3 2 5 4 6l35 1c3 0 5-2 5-4l1-17c0-3-2-5-5-5z"/><path fill="#DDDB00" d="M343 101l-18-1 2-53v-1l-2-1-14 1c-2 0-2 1-2 2l-4 70 2 2 35 2 2-2 1-17-2-2z"/><path fill="#FFF" d="M324 48h-15l-4 71 35 2 1-17-20-1z"/></g></g></g></g></g></svg>',
        openTamal: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 768"><g><path d="M488 454c-1-13-5-25-10-36a186 186 0 00-97-96c2-9-2-18-10-23 13-14 54-28 45-53-4-11-16-17-27-18 2-19-12-31-34-29-19 2-29 19-43 30-23 8-33 17-31 30-9 2-17 7-18 14-4 20 16 25 36 28l1 7c-7 4-14 10-10 19l4 6-3 2a156 156 0 00-57 75 161 161 0 00-9 46v1l4 36c2 12 6 24 13 35 4 6 8 11 14 15 6 3 12 6 19 7 13 2 25 0 37-2l18-6 5-1c32 4 63 1 91-16h2l6-1c7-1 13-3 19-6 11-5 22-14 29-26 6-12 7-25 6-38zM387 237c8 0 18 3 21 12 6 15-26 29-35 37-6 5-8-2-5-8 8-16 13-25 19-41zm-70 1c12-11 22-29 39-31 19-2 29 8 23 27l-22 52c-2 4-7 10-12 9-8-1-11-1-15-9l-11-28 4 24c3 12-6 8-14 10-25-31-30-42 8-54zm13 60c-9 1-18 4-26 8-4-11 19-12 26-8zm-26 15c16-8 39-13 56-9 5 1 17 5 15 15l-2-1c-12-3-25-6-39-3-12 3-24 8-34 14-8-9 0-13 4-16zm167 174c-5 9-13 16-23 21l-12 4c7-10 13-19 17-30h-2l-3 1a95 95 0 01-49 42 111 111 0 01-66 5c-13-3-24-7-35-14l-2 1c8 8 14 12 24 17l-10 3c-11 3-23 4-34 2-10-1-19-7-25-16s-10-21-12-32l-4-35a172 172 0 019-43 137 137 0 0153-68c8-6 17-10 25-14l-1 4-14 22c10-8 17-16 23-26l4-3 3-1 8-1 5 4c9 13 20 21 33 30a146 146 0 01-27-33l13 3a174 174 0 0198 92c4 11 8 22 9 33 2 11 0 22-5 32z"/><g class="icon"><path d="M190 659l-13-8c-7-5-8-11-3-19l20-32c5-8 12-10 19-5h1l12 8-36 56zm-3-15l24-38-3-2c-2-1-3 0-4 2l-21 32c-1 2-1 3 1 5l3 1zM142 624l-19-17 7-8 11 10 12-12-10-9 7-8 10 9 12-13-11-10 7-8 19 18-45 48zM114 577c-8 5-15 4-21-3-5-8-4-15 3-20l8-6 7 9-8 6c-2 1-2 3-1 4 1 2 3 2 5 1l5-4c2-1 3-6 3-13s2-13 7-16l7-5c7-6 14-5 20 3 5 8 4 14-3 20l-8 6-7-9 8-6c2-1 2-3 1-5s-3-2-5 0l-6 4c-2 2-3 6-3 13 0 8-3 13-8 17l-4 4zM105 486c9-4 15-2 20 7 4 8 1 15-7 19l-36 17c-9 5-15 2-19-6-4-9-2-15 6-19l9-5 5 10-9 5c-2 1-3 2-2 4s3 2 5 1l36-17c2-1 3-3 2-5s-3-2-5-1l-8 4-5-10 8-4zM91 439c9-3 15 1 17 10 3 9-1 15-10 18l-51 13-3-10 51-14c3-1 4-2 3-4s-2-3-4-2l-52 13-3-10 52-14zM34 421l-1-15c-1-9 4-14 13-14l10-1c4 0 8 1 9 4 2-3 5-5 9-5l10-1c9-1 14 3 15 12v1l1 14-66 5zm10-12l17-1v-2l-1-2c0-2-1-2-3-2l-10 1c-3 0-4 1-4 3l1 3zm28-2l17-1v-3c-1-2-2-3-4-3l-10 1c-2 0-3 0-4 2v2l1 2zM32 361l2-14c1-9 6-13 16-12l10 1c6 1 9 4 11 9l31-7-1 12-30 5 29 3-1 11-67-8zm12-9l18 2v-2-2l-4-2-9-2c-3 0-4 1-4 3l-1 3zM42 302l8-25 10 4-4 14 16 5 4-12 10 3-3 12 16 5 5-14 10 3-8 25-64-20zM134 255l-55-37 6-9 46 30 9-12 9 6-15 22zM161 183l20 14-8 8-11-8-6 6 9 11-8 8-15-19-26-34 10-11 35 25zm-8 8l-16-12 12 16 4-4zM230 136l15 19-10 5-8-11-8 4 5 13-9 5-9-22-15-41 13-7 26 35zm-10 5l-12-17 8 19 4-2zM240 85l10-3 17 28-10-30 10-3 20 63-10 3-16-26 9 29-10 3-20-64zM332 109l6 23-12 2-3-14-8 1v14l-11 1v-24l2-43 14-2 12 42zm-12 1l-5-20v20h5zM383 67v11l-9-1-3 56h-12l4-56-9-1 1-10 28 1zM427 130c-3 9-8 13-18 11-9-3-12-8-10-18l9-38c3-10 8-13 18-11 9 2 12 8 10 17l-9 39zm-2-41c1-3 0-4-2-5-2 0-3 1-4 3l-9 39c-1 2 0 4 2 4 2 1 3 0 4-2l9-39zM471 136l28-33 10 5-30 60-9-5 13-27-19 24-7-3 7-30-13 27-10-5 30-60 9 5-9 42zM535 126l9 6-39 54-9-7 39-53zM557 202l-15 19-8-8 9-11-6-6-11 8-8-8 19-14 36-25 10 10-26 35zm-7-9l12-16-16 13 4 3zM628 228l6 14c4 8 2 14-6 18l-34 17c-9 5-15 3-19-5v-1l-7-13 60-30zm-5 15l-40 20 1 3c1 2 3 3 5 1l34-17c2-1 3-2 2-4l-2-3zM652 283l7 25-10 3-4-14-17 4 4 13-11 3-3-13-17 5 4 15-10 3-7-25 64-19zM599 345l66-8 1 11-56 6 2 15-11 2-2-26zM661 454l-11-2 2-9-55-10 2-11 55 10 1-9 11 2-5 29zM604 491l-24-5 4-10 14 3 3-8-13-7 4-10 21 11 38 21-5 14-42-9zm4-10l20 4-18-9-2 5zM583 532l30 31-6 9-56-35 5-9 26 16-22-22 4-6 29 10-25-16 6-9 56 36-6 9-41-14zM535 588l-19-14 8-8 11 8 6-6-9-11 8-8 15 19 25 35-10 10-35-25zm9-7l16 12-13-16-3 4zM503 584l38 55-9 6-32-46-12 8-6-8 21-15z"/></g></g></svg>',
        imageWhatsapp: '  <svg class="js-chat-icon-stagger chat-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 117.3 122.3"><g><defs><path id="a" d="M117 59A58 58 0 011 59a58 58 0 11116 0z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><g clip-path="url(#b)"><circle fill="#80C7CD" cx="58.7" cy="58.7" r="58.7"/><g><g><g><g><path fill="#F2B883" d="M69 69l-10 2-10-3c0 1 9 18-20 28-3 1-4 3-4 6l-4 20h75l-3-20c0-3-2-5-5-6-29-10-19-27-19-27z"/></g><path fill="#BFD0DB" d="M88 96c-6-2-10-4-13-7v1c-11 3-22 3-33 0l-13 6c-3 1-4 3-4 6l-4 20h75l-3-20c0-3-2-5-5-6z"/><path fill="#E8E9EA" d="M88 96c-6-2-10-4-13-7-11 4-22 4-33 0-3 3-7 5-13 7-3 1-5 3-5 6l-3 20h75l-3-20c0-3-2-5-5-6z"/><path fill="#E8E9EA" d="M59 96l2-6 3 8zM58 96l-2-6-3 8z"/><path fill="#D39C6E" d="M69 69l-10 2-10-3c0 1 3 6 0 13-3 8 19 8 22 4v1c-7-9-2-17-2-17z"/><g><path fill="#F2B883" d="M80 67c-2 6-15 13-22 13-6 0-19-7-21-13-4-8 0-37 0-37 3-3 10-13 21-13 8 0 19 10 22 13 0 0 4 29 0 37z"/></g><path fill="#575757" d="M86 69c-2-4-1-26-1-26h-4v17l-5 4c-12-3-24-3-35 0l-5-4V43h-4s1 22-1 26c-1 4 12 16 25 15h2v-1 1h3c13 1 26-11 25-15z"/><path fill="#575757" d="M43 26c1 3 21 11 33 4a145 145 0 007 19c3 3 5-17 5-19l1-12S59 2 49 4c-5 1-14 12-14 12-8 3-8 6-8 6l4 22c1 3-1 3 3 2s8-16 9-20z"/><g><g><g><g><path fill="#1D262D" d="M33 64l-2 1-1-1-2-19 1-1 3-1 1 1 1 19-1 1z"/></g></g><g><g><path fill="#1D262D" d="M84 64l2 1 1-1 1-19-1-1-2-1-1 1-1 19 1 1z"/></g></g><g><path fill="#A5B7C6" d="M71 70h-2v-1h1s15 1 18-8h1v1c-3 7-14 8-18 8z"/></g><path fill="#1D262D" d="M71 71h-5l-1-2 2-1h4l1 1-1 2z"/></g><g><path fill="#1D262D" d="M91 59h-2V45a31 31 0 10-61 0v14h-2V45a33 33 0 0165 0v14z"/></g><g><path fill="#A5B7C6" d="M30 63h-3l-2-2-1-13c0-1 0-2 2-2h2l2 17z"/></g><g><path fill="#A5B7C6" d="M87 63h3l2-2 1-13-2-2h-3l-1 17z"/></g></g><g><g><g><g><g><path fill="#F9FBFC" d="M41 49s1 4 6 3l3-1v-4c-2-1-5-2-9 2z"/></g><g><path fill="#754E23" d="M50 49a3 3 0 11-6 0l1-2h4l1 2z"/></g><g><path fill="#8C5D2F" d="M49 51l-2 1-2-1 2-1 2 1z"/></g><g><path fill="#1D262D" d="M48 49l-1 1-2-1 1-1 2 1z"/></g><g><path fill="#F9FBFC" d="M45 48v1l-1-1 1-1v1z"/></g></g><g><g><path fill="#575757" d="M40 43l1 1c2-1 6-1 10 1v-2c-1-2-4-2-7-2l-4 2z"/></g></g></g></g><g><g><g><g><path fill="#F9FBFC" d="M76 49s-2 4-6 3l-3-1c-2-1-1-3 0-4 2-1 5-2 9 2z"/></g><g><path fill="#754E23" d="M67 49a3 3 0 106 0l-1-2h-4l-1 2z"/></g><g><path fill="#8C5D2F" d="M68 51l2 1 2-1-2-1-2 1z"/></g><g><path fill="#1D262D" d="M69 49l1 1 2-1-2-1-1 1z"/></g><g><path fill="#F9FBFC" d="M68 48v1l1-1-1-1v1z"/></g></g><g><g><path fill="#575757" d="M77 43l-1 1c-3-1-6-1-10 1v-2c1-2 4-2 7-2l4 2z"/></g></g></g></g></g><g><path fill="#F77046" d="M54 92h9l-1 6h-7z"/></g><g><path fill="#F77046" d="M54 122h9l-1-24h-7z"/></g><g><path fill="#D85A3D" d="M60 99l2 2v-3h-7z"/></g><path fill="#FFF" d="M45 84l11 6-3 9-13-9zM72 84l-11 6 3 9 13-9z"/><path fill="#7F2011" d="M50 66h17s-2 5-7 6c-7 1-10-4-10-6z"/><path fill="#F9FBFC" d="M66 66H50l2 2h13l1-2z"/><path fill="#754E23" d="M40 48l2-2h7l2 2-3-1h-2l-6 1zM77 48l-6-1h-3l-2 1 2-2h6l3 2z"/><path fill="#D6A176" d="M54 58l9-1-4 2-5-1z"/></g></g><g><path fill="#1D262D" d="M40 91l-11 5c-3 1-5 3-5 6l-3 20h32L40 91z"/><path fill="#575757" d="M43 86l-8 7 5 13 5-1-4 4 10 13h5z"/></g><g><path fill="#1D262D" d="M77 91l12 5c2 1 4 3 4 6l4 20H64l13-31z"/><path fill="#575757" d="M75 86l8 7-5 13-6-1 5 4-11 13h-4z"/></g></g></g></g></svg>',
        iconWhatsapp: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 117.3 122.3"><g><image overflow="visible" opacity=".1" width="124" height="125" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB9CAYAAABgQgcbAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAADTJJREFUeNrsnQlX20gSx1uST4zN 5UkgQyabSfb7f6CZIbszuYBwBDDgA3ul96rWf8qtw7ZOU/1ePYGJHNm//ldVt7pLxmh7Uc15AZ9t 2c84E0cFXnKwToTFgQ6zjekIToWvG80l4989YW4MdAY79e1JGP4Nj5XsAE4FVcyAGWaNzBOvNcjq 9LsbAzwAOfFt7NuIbCLg4+9TMOkNFPga1+aCal0BtEnWIrBs/LctOtbpPJvKGdQTwR76dk/HEb02 oZ+H0BnG8DfZCUqrfKek14SuuQaAJcwOHbcJOnaA4PUuHRugclubAtQA9i0dHwFy8PPAtweyRzhy Z8AOUErVOyUGzXADeG0C1yYLQO/41qPjjoDeAOhS4WEuXSocQT7SazfUGe7I+OcBHfG8cRnBOyUG zQruAdguWfD7HkDvUUfAmN0QsJPEcIQ+EjGdFc5wA/hXvl2TXfr2k14fEPzSgXdKDHqXoPbBdgn4 Nh3ZpW8BbC/lLP0J3P0juPJ7AvyTYJ/59sO3c+gIpQPvFAjbjQH9iuyQYO+TktG1N0HFNZGYuWuO w6cioXsSih+C2gPoFwT7O8E/iwE/LQK6U5CqORlrQtIlQR/R8Rd6HROwhoDsWcCmNdMmO8EU4A8B PLv4c4L9zQL+DkYAMrnbOOCsOo6vbYK4R+p9LUC/gjjNCRlm265FxVm2WYj7Z3f/AGq/AtgM/pRc /xUlew+QJ+Smdi9n982gA9d84Nsb39759rtvH3374Nt7344J/AEpvwPA6wK6k1PHtc3seSEjig51 0h7kHByCPBge5h7LvZy+JFZ1h1QbqPktgf43wX5Pr4WB9gqAvEwHwPkCCZ5tCz4Lh6GZxYtUEjh/ EXX6AroEMgD6L4AdHH8jtfcTgC7zRFEY+C0w9FT4mXLJ3r0MQaML36Xk65jctlQ1x+vtCoFeFnwL oPMoox7i4jMD72X0oT2KV2Eu/AOpmt131/IFVAV0HHjb3H9bqL0G7l3elEm11TKEvQ2wjwn4OwJ9 SJk5g5Zj6E1otiSvBiGuAxNIPZgGrsF5jzQSSC2+1zKA3aIP0qe4/Bu47mNw3x34gK7Z3NU3YeCb IrlrGftdvVSh1zKA3SXYx5ScfaDjEcXxHerNddGbN71hEitjfFMMN2VLDXotQ9gcrwN1/0qxugc9 2X1BsOPG8jWzOOfvZAE9DeAYs/siE/+dfu9DBr7pLnxZtTsRnV/O7g3NfDo2d+B8oQ0BG8fXb+n1 riUheenNAQZRd/HkcG24zrCtlkIP3aIk7A3Fahvs1gZm4WlC55BoA45z9niXbaVhW23Fi+Tp0hYl Ya8pG8e5cIW9HnS5sBKXUE3p56Xj+arAeVjRgxm096TwXxV2KtDlsqsHgM5xfLIscG+FC+Mp0655 Pl36kVT+GrJxjdnLQ8cMnodoAWBecYPLr6ZZAsckrUPDLE7SeF78iOJ5GzJQhb08dHm/X6odlT7N CjhPFvDNkCPzfG48cOX7MKniKuy1le6I75Fjt1wZm1jp3hIXga48mB59Z+Z3vd6Se9828ztdCjvd CRoDcfsR3Ps4C+Cobh6CsSt/Rx1gxyyu6NCWXkx3LMAZ+iSpa/cS/seclQdQD8V4+w11gi2N25k0 Od2Kbh03PiRaEOklgM0TLDJR+wCTK9sat3NTuTHPt0UxdI7nayk8LFHjrPyQVN9SV555PDciYw+A 4xanIYzLZ6sA517VtCRqmpUXl8Rx8sZunbc/JVK5m8AD8M2RfVI03tfm1SoKOx/oeBv6wDxfv9+B EdJKLh2HYX1S90dI1HYFcG35xXMDEzG8vfkWErjQYZqbIFlrk5r7Zr7tZ9s8nyfXlq/K2evuEZM+ eNzI8OrGvHET3PkreGON28XGchZiD1z7PrFqRgnRjVB3DeLFPtkuxAqFXRx0vKexC3z4DmVoXuVG JHO8hXdnmTfUlhtwmyDZ+zbC2LoRY2/MBjF2NzV2lyaWN0UsP7CIMhK4XM2CvaeXJCnQlqvKMZbb vPDCNLcbMRxjd34Q4s61Fdtsbv1AuHUvicKx53TNvJgOqltbeaDHsXLigOOuT66aJGudqTsvV/LG HrkLwK3rElzLG3jiDXALr8Iu7xCN9/RFCtSmcNzd2DPzjW4au8sdy9sEnGviWKe9oxTOuxrb6s4r 59ZxN2qowuXJsnSlqrvcY3J067KSRqhL56yP66e1VN2VGpNzKO6Kodn/2bkWdeOJbdtJ2ko9Jufc S1aUsLp0D9TdDTtJW+kUjvVqW+CdFypKuKucpK3UyRsXCazHDcsSn6SttCrHGjLWIobuKidpqwR0 Kzd3lZO0VTu706bAtSlwbQpcmwLXpsC1KXBtClybAtemwLWlDVw+kE0+HF3bBgGXsCcKvVItkVgl cCzmig9LnyrwSsEOFat8fBJXFcCSUPKpuNrKCTyRWKXCA7D8wPRbs1gdSFt51Z1IrG5ID+HqQPxA 1MIef6wtUWN2zO0mTKyu5cQxqJyLxGgcL787R6Gyd14Qa1jSxo9HtrkGbeUDjvXU78hkSc7ILJ0r 8N+ZeSX+2Cp/2gpN1kaQe2GhvmmUS8dqvQHsa4gHqvJyx298YD0LdaHKcpTCB3QyJgAKvJwKR3eO 8XuSROFPAvi1mVf5W6oYu7ZC3PmtGF2FzrTJBICBX9BxEPYm2gp152MCfEucGLhVnG5Min9LCmfg 6tbLOfYOOF2COHFIZqKAq1uv3tj7gfKsSzLmZB1VuTHjugHBvoDsT1VenrH3kJhc+XZOnBD4NKnC 0a3zG14DcJ15K0eyhu78Urhz60Nv3IQ96BrecGBianJry20oNgA2lxZ1z1YFHrzZmW8/oBdpLC8G 9kzE7gtic5kk5LoJk4KfBPuc3DvP1WosLyZ2j0TsZiE+xAkxyWOsuNgul3gMKgRtGa3/UqQrvyXQ //XtL9/+49spQR+aiAfdxD3ViI9cIIDrv3TMYkkv3UeePfAJhdNA2V8J9Ilvn8m1D0jhKz3GygiA WPRHVnnSsiD5DcNuSM1/+/anb598+07qfozLq5Z9fjgqnVWuhX/ym2QZkJI/E+hA3V/otfs4da8C 3LG49rZZrNao0NPNyqUr/0Tq5th9Q+qfpg3cBp1jOVdbVteeftwekss+pUTtD4L+lYZj9ybhQtN1 gHMB3ja59aa69syy8jvKyj+TGw8y83/otTuzxF1Mb40L4vqeDQAuEziFnl7c/kKwOVE7hUQt8TJy b80Lk5V8m2JsrvF8vbj9AHH7hFz5iXDlY7PE5Je3xgXNAGjdonKFvh7sRxG3/yRXHrj1H+DKp1kD x4uT4/OmBbqj0JeCzePt25C4fUZZ+Uqrj7w1Lw57F9ZprQNwhb4cbL7l+QNg8xAsmGC5XjZup6lw 6d75PWsKPTXYfxDsrxTPMW7nClwqHbem8rNT6iKea0xPBvsfgP3JzGfT1l6L4KV00VO66CeIKy6o 3TOLxXodhf1sYsUG+2TdJC1L4Ax9YuYb2GRlZtv43HmhsOUyJenGJexU1hJ6KX8ACV1eoCPAvzQX L/dy31PGfR4Bm5ctpVKUwcug13LPZRsDfBv0l+LibVu5rmic/VnE7Exgpw1cxnPeAjMk471OqHab yp0NVzWuRftGkyo49PoCbjxV2FkAl9C53sgjQR+LbD5K4c6GgA5TNc6N/wVDrwtLzE5t3aCXsfti 6GNQ+hjc/RT+vSOUX1XwM6HqUYyqTygzP6XOIPfwpbpI1Muhd6PSh6R2trHI6meiA1QJvA00Z+Ay VrOqeYwdJG1yE0EmxRe8HL4ITOTQxbONzGKZqWmFwEeBviaYgav+28xXqrCqv4MLz2Xfnpfjl4Jq 55IiXEdmIFQ/toC3NacEoKcRoL9ZQHOsPqd/h5v3My+p4hX05aDS76mHD8y8VAWCfzKLU7c2FTg5 fIawkQiX27iKAM3uO3Dtl0LVuW3oyFsh+MhLXBcXbG7Y9W3Pt1dkR3T8hV7HJ+biUxPx5oxjGd45 a4CVLltOLg0h+74B4GcE/YwMN2Ni/bTcK1wW5RLx4fS8TIpXwUrwh771fds386fm8lo6vv+O8HF8 v8zEzswCF2Pzk8hDhuCVuFLGOcVlCXoArntsCix0WGQMdMziQ25t4Ptgu6T0bTry2vgtUL1nsbg1 djLkSJuIZJNzj59kuNnyPAb0zBRY/qwMGW8c+B7ZDkHu0u979Br/vS1cfcM8X0nrxgCXSeXIMrIY gKpvACxup74pI+gyDnHCwLcIJrryDsDeIds2z9fV8SOx5fLpMOAIG8uODiG5vKEsnKsd3oqEE88r FegyT2Y4luSuBuptmMVNjQi7CbAx0ePl02FzBbL81T1MCaPCH2Ak8SA6xtiSjM3K9uWWtfG1uQAf F1U0BOA6GHaKuA0SsxCFD8WE0AheG8GwEW8FJ5k7UOBLXKcjMnz0AJ54TQ7fksRwjNkjAfMpBO60 rGquMvAot2+7v55mli6HaXKee1a1L67qzQnxAs6a4/BZCNjZJnxZm9jSmmnTpq267X8CDADANFHM B1vXcAAAAABJRU5ErkJggg==" transform="translate(0 2)"/><g><g><circle transform="rotate(-32 59 61)" fill="#00BF22" cx="58.7" cy="61.2" r="55.8"/><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#FFF" d="M75 67l-6-3h-2l-2 3-2 1-6-5c-3-2-4-5-4-5v-2l1-1 1-2v-1l-2-6-2-2h-2l-2 1c-1 1-3 3-3 7s3 8 3 8c1 1 5 9 13 13 8 3 8 2 10 2 1 0 5-2 5-4l1-3-1-1zM60 86c-5 0-10-2-14-5l-10 4 3-10c-3-4-5-10-5-15 0-15 11-26 26-26 14 0 26 11 26 26 0 14-12 26-26 26zm0-57a31 31 0 00-27 47l-5 17 17-6a31 31 0 1015-59v1z"/></g></g></g></g></svg>',
        close: '<svg class="close" version="1.1" id="OBJECTS" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 117.3 122.3" enable-background="new 0 0 117.3 122.3" xml:space="preserve"> <path  d="M93.1,29.7L93.1,29.7c-3-3-7.8-3-10.8,0L61.6,50.3L41,29.7c-3-3-7.8-3-10.8,0l0,0c-3,3-3,7.8,0,10.8 l20.6,20.6L30.2,81.8c-3,3-3,7.8,0,10.8l0,0c3,3,7.8,3,10.8,0L61.6,72l20.6,20.6c3,3,7.8,3,10.8,0l0,0c3-3,3-7.8,0-10.8L72.5,61.2 l20.6-20.6C96.1,37.5,96.1,32.7,93.1,29.7z"/> </svg>'
    }

    $(".js-logo-tamales-colombianos").html(svg.tamal);
    $(".js-arrow-home").html(svg.arrow);
    $(".js-open-tamal").html(svg.openTamal);
    $(".js-image-whatsapp").html(svg.imageWhatsapp);
    $(".js-icon-whatsapp").html(svg.iconWhatsapp);
    $(".js-close-icon").html(svg.close);

    setTimeout(function () {
        $("#item1").addClass("active");
    }, 1000)
    //Menu
    function dataList() {

        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'js/menu.json', true );
        xhttp.send();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200){
                let datos = JSON.parse(this.responseText);
                console.log("hola " + this.responseText);
                let res = document.getElementById("res");
                console.log(res)
               res.innerHTML = "";
                i = 0
                for (let item of datos){
                    i++;
                    res.innerHTML += `
                      <div class="carousel-item" id="item${i}">
                <div class="menu-image">
                    <h3>${item.title}</h3>
                    <img src="img/menu/${item.image}.png" class="d-block w-100" alt="...">
                </div>
                <div class="menu-description">
                    <p>${item.description}</p>
                    <h4>Incluye:</h4>
                    <p>${item.includes}</p>
                    <p>${item.copy}</p>
                    <h4>${item.price}</h4>
                    <a href="https://api.whatsapp.com/send?phone=19292934652&text=Hola%20TAMALERIA%20COLOMBIANA. %20Deseo ${item.link}"
                       class="btn-white">Ordena aquí</a>
                </div>
            </div>
                    `;
                }

            }
        }
    }
    dataList();

});

/* ------------------------------- END JQUERY ------------------------------- */

bodymovin.loadAnimation({
    container: document.querySelector('.js-delivery'), // Required
    path: 'data/data.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optionalreference.
})






