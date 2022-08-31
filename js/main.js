$(window).on('load', () => {
  // Preloader
  $('.preloader').fadeOut('slow');
});

$(document).ready(() => {
  /* Navbar shrink */
  $(window).on('scroll', () => {
    if ($(this).scrollTop() > 90) {
      $('.navbar').addClass('navbar-shrink');
    } else {
      $('.navbar').removeClass('navbar-shrink');
    }
  });

  /* Video popup */
  const videoSrc = $('#player-1').attr('src');
  $('.video-play-btn, .video-popup').on('click', () => {
    if ($('.video-popup').hasClass('open')) {
      $('.video-popup').removeClass('open');
      $('#player-1').attr('src', '');
    } else {
      $('.video-popup').addClass('open');
      if ($('#player-1').attr('src') == '') {
        $('#player-1').attr('src', videoSrc);
      }
    }
  });

  /* Features carousel */
  $('.features-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  /* Screenshot carousel */
  $('.screenshots-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  /* testimonials carousel */
  $('.testimonials-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  /* testimonials carousel */
  $('.team-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  /* Page scrolling -scrollit */
  $.scrollIt({
    topOffset: -50,
  });

  /* Nabvar collapse */
  $('.nav-link').on('click', () => {
    $('.navbar-collapse').collapse('hide');
  });

  /* Toggle theme - light and dark mode */
  $('.toggle-theme').on('click', () => {
    $('body').toggleClass('dark');
    if ($('body').hasClass('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

  (function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark') {
      $('body').addClass('dark');
    } else {
      $('body').removeClass('dark');
    }

    updateIcon();
  })();

  function updateIcon() {
    if ($('body').hasClass('dark')) {
      $('.toggle-theme i').removeClass('fa-moon');
      $('.toggle-theme i').addClass('fa-sun');
    } else {
      $('.toggle-theme i').removeClass('fa-sun');
      $('.toggle-theme i').addClass('fa-moon');
    }
  }
});
