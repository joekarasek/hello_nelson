(function($, HelloWorldDevsTysonSteele) {

  // ======= Fixes =======
  HelloWorldDevsTysonSteele.noOrphans('h1,h2,h3,h4,h5,h6,li,p', '.allow-orphan');
  HelloWorldDevsTysonSteele.scrollToFix('#primary-menu');

  // ======= Request Appointment Form =======
  HelloWorldDevsTysonSteele.requestAppointment('#mail-form', '#success_msg' , '7fb35345-752d-4792-9480-cd3db6674a62');

  // ======= Carousels =======
  HelloWorldDevsTysonSteele.marqueeCarousel({
    autoplay: 6000,
    effect: 'fade',
    speed: 500
  });
  HelloWorldDevsTysonSteele.tourCarousel('.js-tour-carousel', {
    autoplay: true,
    autoplayTimeout: 10000,
    items: 1,
    margin: 40,
    navText: [
      '<img src="assets/tour-left.png">',
      '<img src="assets/tour-right.png">'
    ],
    autoHeight: true
  });

  HelloWorldDevsTysonSteele.associationCarousel('.js-associations-carousel', {
    items: 2,
    loop: true,
    autoplay: true,
    autoplaySpeed: 500,
    autoplayTimeout: 2000,
    autoplayHoverPause:false,
    autoWidth: false,
    nav: false,
    dots: false,
    margin: 40,
    slideBy: 1,
    responsive: {
      550: {
        items: 3
      }
    }
  });
  HelloWorldDevsTysonSteele.pyramidCarousel('.js-team-carousel', {
    items: 1,
    autoplay: true,
    navText: [
      '<img src="assets/team-left.png">',
      '<img src="assets/team-right.png">'
    ],
    responsive: {
      550: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      }
    },
    margin: 15
  });
  HelloWorldDevsTysonSteele.pyramidCarousel('.js-smile-gallery', {
    items: 1,
    autoplay: true,
    navText: [
      '<img src="assets/team-left.png">',
      '<img src="assets/team-right.png">'
    ],
    responsive: {
      550: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      }
    },
    margin: 15
  });
  HelloWorldDevsTysonSteele.updateCopyright('.js-copyright-year');

  // ======= Google Maps =======
  HelloWorldDevsTysonSteele.googleMap('#google-map5', '44.800611,-122.790483', '44.800611,-122.790483');

  $('#gallery-btn').click( function(e) {
    e.preventDefault();
    $('#gallery-target').click();
  });

  $('.galleryCard').click( function() {
    var pointer = $(this).attr('data-ts-pointer');
    $('[data-ts-target=' + pointer + ']').click();
  });

}(jQuery, HelloWorldDevsTysonSteele));

