'use strict';

var window_w = $(window).innerWidth();

// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

/*------------------------
    Back to top button
------------------------*/
	var btn = $('#buttoon');

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

// slick slider
$('.chocolate_container').slick({
    infinite: true,
    center: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

/** google_map js **/

mapboxgl.accessToken = 'pk.eyJ1IjoiYnVpbGRuYXRpb24iLCJhIjoiY2tnOW5uaDhuMHBkZzJybHNxcHFhcGl3byJ9.EyACNlZ0SsTLfDPHff_rKA';

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(12.915605, 74.855965),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}