// side navbar ========================================

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}










/*services_vertical_slider*/

var slickCarousel = $('.slider-vertical');
slickCarousel.slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  vertical: true,
  verticalSwiping: true,
  dots: false,
  centerPadding: '50px',
  arrows: true,
  prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0"  role="button"><img class="service_up" src="images/service_up.png"></button>',
  nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><img class="service_down" src="images/service_down.png"></button>',
  responsive: [{
    breakpoint: 1300,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: false,
    }
  }, {
    breakpoint: 580,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      vertical: true,
      verticalSwiping: true,
      infinite: false,
    }
  }]
});




/*services_clickchange*/
$(document).on('click', '.map-point-sm', function() {
  var show = $(this).data('show');
  $(show).removeClass("hide").siblings().addClass("hide");
  setTimeout(function() {
    document.getElementById('test').className = 'slideDown';
  }, 500);
});


/*testimonial_slider*/
$(document).ready(function() {
  $('.slider_2').slick({
    dots: false, // Add Dots to Bottom of Slide
    autoplay: true, // Makes Slide Auto-Slide
    autoplaySpeed: 1500, // Controls Speed of Autoplay Slides
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    variableWidth: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

/*products_slider*/
$(document).ready(function() {
  $('.customer-logos').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    prevArrow: '<img class="service_left" src="images/productleft.png">',
    nextArrow: '<img class="service_right" src="images/productright.png">',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }]
  });
});







/*project_slider*/

if ($('.product__slider-main').length) {
  var $slider = $('.product__slider-main')
    .on('init', function(slick) {
      $('.product__slider-main').fadeIn(1000);
    })
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      lazyLoad: 'ondemand',
      autoplaySpeed: 3000,
      asNavFor: '.product__slider-thmb'
    });

  var $slider2 = $('.product__slider-thmb')
    .on('init', function(slick) {
      $('.product__slider-thmb').fadeIn(1000);
    })
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: 'ondemand',
      asNavFor: '.product__slider-main',
      dots: false,
      centerMode: false,
      prevArrow: '<img class="service_left" src="images/left_projectarrow.png" style="display: block;top: 20px;left: 6px;width: 25px;height: 25px;">',
      nextArrow: '<img class="service_right" src="images/right_projectarrow.png" style="display: block;top: 20px;right: -13px;width: 25px;height: 25px;">',
      focusOnSelect: true
    });

  //remove active class from all thumbnail slides
  $('.product__slider-thmb .slick-slide').removeClass('slick-active');

  //set active class to first thumbnail slides
  $('.product__slider-thmb .slick-slide').eq(0).addClass('slick-active');

  // On before slide change match active thumbnail to current slide
  $('.product__slider-main').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('.product__slider-thmb .slick-slide').removeClass('slick-active');
    $('.product__slider-thmb .slick-slide').eq(mySlideNumber).addClass('slick-active');
  });



  var options = {
    progressbarSelector: '.bJS_progressbar',
    slideSelector: '.bJS_slider',
    previewSlideSelector: '.bJS_previewSlider',
    progressInterval: ''
      // add your own progressbar animation function to sync it i.e. with a video
      // function will be called if the current preview slider item (".b_previewItem") has the data-customprogressbar="true" property set
      ,
    onCustomProgressbar: function($slide, $progressbar) {}
  }

  // slick slider options
  // see: https://kenwheeler.github.io/slick/
  var sliderOptions = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true
  }

  // slick slider options
  // see: https://kenwheeler.github.io/slick/
  var previewSliderOptions = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true,
    centerMode: true
  }
}




/* navbar
================================================== */

jQuery(document).ready(function($) {

  // Fixa navbar ao ultrapassa-lo
  var navbar = $('#navbar'),
      distance = navbar.offset().top,
      $window = $(window);

  $window.scroll(function() {
      if ($window.scrollTop() >= distance) {
          navbar.removeClass('.navbar_fix').addClass('navbar-fixed-top');
          $("navbar_fix").css("top", "10px");
      } else {
          navbar.removeClass('navbar-fixed-top');
          $("navbar_fix").css("top", "0px");
      }
  });
});
