(function ($) {
	"use strict";
	
	// JS Index
	//----------------------------------------
	// 1. preloader
	// 2. background image
	// 3. Animate the scroll to top
	// 4. Cats Filter
	// 4. Circular Bars - Knob
	// 5. accordion js
	// 6. tilt js
	// 7. mixitup js
	// 8. Contact form
	// 9. vanta js 
	//-------------------------------------------------
 
	// 1. preloader
	//---------------------------------------------------------------------------
	$(window).load(function(){
	    $('#preloader').fadeOut('slow',function(){$(this).remove();});
	});
 
	// 2. background image
	//---------------------------------------------------------------------------
	$("[data-background]").each(function (){
	    $(this).css("background-image","url(" + $(this).attr("data-background") + ")");
	});
 
	// 3. Animate the scroll to top
    // --------------------------------------------------------------------------
    // Show or hide the sticky footer button
	$(window).on('scroll', function() {
		if($(this).scrollTop() > 100){
		$('#scroll').addClass('show');
		} else{
		$('#scroll').removeClass('show');
		}
	});

	$('#scroll').on('click', function(event) {
		event.preventDefault();
		
		$('html, body').animate({
		scrollTop: 0,
		}, 600);
	});
	



		// 4. mobile-menu(mean-menu)
    //---------------------------------------------------------------------------
    $("#mobile-menu").meanmenu({
		meanMenuContainer: ".mobile-menu",
		meanScreenWidth: "991",
	});



	    // 7. mobile-menu-sidebar
    //---------------------------------------------------------------------------
    $(".mobile-menubar").on("click", function(){
		$(".side-mobile-menu").addClass('open-menubar');
		$(".body-overlay").addClass("opened");
	});
	$(".close-icon").click(function(){
		$(".side-mobile-menu").removeClass('open-menubar');
		$(".body-overlay").removeClass("opened");
	});

	$(".body-overlay").on("click", function () {
		$(".side-mobile-menu").removeClass('open-menubar');
		$(".body-overlay").removeClass("opened");
	});





	// 1. sticky menu
	// ---------------------------------------------------------------------------
	var wind = $(window);
	var sticky = $("#header-sticky");
	wind.on('scroll', function () {
		var scroll = $(wind).scrollTop();
		if (scroll < 2) {
			sticky.removeClass("sticky-menu");
		} else {
			$("#header-sticky").addClass("sticky-menu");
		}
	});



    


	// 4. Cats Filter
    // ---------------------------------------------------------------------------
	
	var $catsfilter = $('.cats-filter');

	// Copy categories to item classes
	$catsfilter.find('a').click(function() {
		var currentOption = $(this).attr('data-filter');
		$(this).parent().parent().find('a').removeClass('current');
		$(this).addClass('current');
	});	

 
	

    // 5. Circular Bars - Knob
    // ---------------------------------------------------------------------------

    	if (typeof ($.fn.knob) != 'undefined') {

		$('.knob').each(function () {
	
			var $this = $(this),
	
			knobVal = $this.attr('data-rel');
	
			$this.knob({
	
			'draw': function () {
		
					$(this.i).val(this.cv + '%');
		
			}
	
		});
 
		$this.appear(function () {
	
		$({
	
				value: 0
	
		}).animate({
	
				value: knobVal
	
		}, {
	
			duration: 2000,
	
			easing: 'swing',
	
			step: function () {
	
			$this.val(Math.ceil(this.value)).trigger('change');
	
			}
	
		});
 
			}, {
		
			accX: 0,
		
			accY: -150
		
			});
 
		});
 
 	};




	// 6. accordion js
    // ---------------------------------------------------------------------------
	$('.accordion-page-wrapper .collapse').collapse()




//     // 7. tilt js
//     // ---------------------------------------------------------------------------
//     $('.tilt').tilt({
// 		glare: true,
//     		maxGlare: .5
// 	});



	
	// 7. mixitup js
    // --------------------------------------------------------------------------
	mixitup('.mixitup-gallery', {
		selectors: {
		    control: '[data-mixitup-control]'
		},
		load: {
			filter: '.casepoint' 
		}
	 });


	 

	// 8. Contact form 
    //---------------------------------------------------------------------------
    $(function() {
		// Here is the form
		var form = $('#contact-form');

		// Getting the messages div
		var formMessages = $('.form-message');


		// Setting up an event listener for the contact form
		$(form).submit(function(event) {
		// Stopping the browser to submit the form
		event.preventDefault();
		
		// Serializing the form data
		var formData = $(form).serialize();

		// Submitting the form using AJAX
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		}).done(function(response) {
		
			// Making the formMessages div to have the 'success' class
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Setting the message text
			$(formMessages).text(response);

			// Clearing the form after successful submission 
			$('#inputName').val('');
			$('#inputEmail').val('');
			$('#inputPhone').val('');
			$('#inputMessage').val('');
		}).fail(function(data) {
		
			// Making the formMessages div to have the 'error' class
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Setting the message text
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occurred and your message could not be sent.');
			}
		});

		});

	});



	
	// // 9.  VANTA js
	// //---------------------------------------------------------------------------
	// VANTA.DOTS({
	// 	el: "#venta-background",
	// 	mouseControls: true,
	// 	touchControls: true,
	// 	gyroControls: false,
	// 	backgroundColor: 0x0,
	// 	color: 0xf26641,
	// //   minHeight: 200.00,
	// //   minWidth: 200.00,
	// 	scale: 1.00,
	// 	scaleMobile: 1.00,
	// 	showLines: false
	// });







	// options = {
	// 	"outerStyle": "circle",
	// 	"hoverEffect": "circle-move",
	// 	"hoverItemMove": false,
	// 	"defaultCursor": false,
	// 	"outerWidth": 30,
	// 	"outerHeight": 30
	//    }
	//    magicMouse(options);



//     // 6. One Page Nav
//     //---------------------------------------------------------------------------
//     var top_offset = $('.header-area').height() - 10;
//     $('.main-menu nav ul').onePageNav({
//         currentClass: 'active',
//         scrollOffset: top_offset,
//     });
$('#downloadCV').on('click', function(e){
	// e.preventDefault();
	 window.location.href = "Files/Vimal_Mavani_Resume.pdf";
 })
 
 document.getElementById("contact-form").addEventListener("submit", function(event) {
	event.preventDefault();
	
	let name = document.getElementById("inputName").value;
	let email = document.getElementById("inputEmail").value;
	let phone = document.getElementById("inputPhone").value;
	let subject = document.getElementById("inputSubject").value;
	let message = document.getElementById("inputMessage").value;
	
	let mailtoLink = `mailto:vimalmavani007@gmail.com?subject=Message from ${name}&body=${phone,subject,message} (Reply to: ${email})`;
	
	window.location.href = mailtoLink;
});

 })(jQuery);

