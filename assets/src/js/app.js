jQuery(document).ready(function($){

	// Show/hide menu & button on scroll
	$(window).scroll(function() {
	  if ($(this).scrollTop() >= 20) {
	      $('button').fadeIn(200);
	  } else {
	      $('button').fadeOut(200);
	  }
	});


	// Show hide top menu
	$(document).ready(function(){
		$(this).scrollTop(0);
			$('button').click(function() {
		  $('#navigation').slideToggle('slow');
		});

		$('li').click(function () {
	   $('#navigation').slideUp('slow');
		});
	});

	// Smooth scroling ( https://css-tricks.com/snippets/jquery/smooth-scrolling/ )
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        event.preventDefault(); 
	      }
	    }
	  });
	});
	var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-36251023-1']);
	  _gaq.push(['_setDomainName', 'jqueryscript.net']);
	  _gaq.push(['_trackPageview']);

	  (function() {
	    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();

	  // Fancybox
	$('.work-box').fancybox();

});