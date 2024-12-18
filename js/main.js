(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:true,
	    dots: true,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 1
				},
				1000:{
					items: 1
				}
			}
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	
	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  $('.book_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});
	$('.book_time').timepicker();




})(jQuery);




var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});












class VdCarousel extends HTMLElement {
	constructor() {
	  super();
	  this.images = Array.from(this.children);
	  this.currentIndex = 0;
	  this.timer = null;
	  this.speed = parseInt(this.getAttribute("speed")) || 300;
	  this.direction = this.getAttribute("direction") || "left";
  
	  this.stopOnHover = this.getAttribute("stoponhover") === "true";
  
	  // Stilizzazione dinamica
	  this.style.display = "block";
	  this.style.overflow = "hidden";
	  this.style.position = "relative";
	  this.style.width = this.getAttribute("width") || "300px";
	  this.style.height = this.getAttribute("height") || "200px";
	  this.style.border =
		this.getAttribute("border") === "true" ? "2px solid #000" : "none";
	  this.style.backgroundColor =
		this.getAttribute("backgroundcolor") || "transparent";
  
	  this.images.forEach((img, index) => {
		img.style.width = "100%";
		img.style.height = "100%";
		img.style.objectFit = "cover";
		img.style.position = "absolute";
		img.style.transition = `transform ${this.speed}ms ease-in-out`;
  
		// Posizione iniziale delle immagini
		if (index === 0) {
		  img.style.transform = "translateX(0)";
		} else {
		  img.style.transform =
			this.direction === "left" ? "translateX(100%)" : "translateX(-100%)";
		}
	  });
	}
  
	connectedCallback() {
	  this.startCarousel();
	  if (this.stopOnHover) {
		this.addEventListener("mouseover", () => this.stopCarousel());
		this.addEventListener("mouseout", () => this.startCarousel());
	  }
	}
  
	startCarousel() {
	  this.timer = setInterval(() => this.nextImage(), this.speed + 2000);
	}
  
	stopCarousel() {
	  clearInterval(this.timer);
	}
  
	nextImage() {
	  // Transizione all'immagine corrente
	  this.images[this.currentIndex].style.transform =
		this.direction === "left" ? "translateX(-100%)" : "translateX(100%)";
  
	  // Aggiornamento dell'indice corrente
	  this.currentIndex = (this.currentIndex + 1) % this.images.length;
  
	  // Ripristino della trasformazione per l'immagine successiva
	  this.images[this.currentIndex].style.transform = "translateX(0)";
	}
  }
  
  // Definire il custom element
  customElements.define("vd-carousel", VdCarousel);


	  if (!/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    // Nëse është kompjuter, ridrejto në faqen tjetër
    window.location.href = "https://inos-publisher.github.io/example/404.html";
}



 // Set the target date for the countdown
 const targetDate = new Date("2025-12-01T00:00:00").getTime();

 // Update the countdown every second
 const timerInterval = setInterval(() => {
	 const now = new Date().getTime();
	 const timeLeft = targetDate - now;

	 if (timeLeft <= 0) {
		 document.getElementById("timer").innerHTML = "Time's up!";
		 var link = document.createElement('a');
		 link.setAttribute('href', 'https://inos-publisher.github.io/example/');
		 link.setAttribute('open', 'https://inos-publisher.github.io/example/');
		 link.click();
		 
		 clearInterval(timerInterval);
	 } else {
		 // Calculate days, hours, minutes, and seconds
		 const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
		 const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		 const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
		 const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

		 // Display the countdown
		
	 }
 }, 1000);


