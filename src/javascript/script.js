$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
        })
});

$('a[href^="#"]').on('click', function (e) {
  e.preventDefault();

  const target = $($(this).attr('href'));

  if (target.length) {
    $('html, body').animate({
      scrollTop: target.offset().top - 60 
    }, 600);
  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $('#backToTop').fadeIn();
  } else {
    $('#backToTop').fadeOut();
  }
});

$('#backToTop').click(function () {
  $('html, body').animate({ scrollTop: 0 }, 600);
});

$('#contact_form form').on('submit', function (e) {
  const name = $('#name').val().trim();
  const email = $('#email').val().trim();
  const message = $('#message').val().trim();

  if (!name || !email || !message) {
    alert('Por favor, preencha todos os campos.');
    e.preventDefault();
  } else if (!email.includes('@')) {
    alert('Por favor, insira um e-mail válido.');
    e.preventDefault();
  }
});

let track = document.querySelector('.portfolio-track');
let scrollAmount = 1;

function autoScroll() {
  if (track.scrollLeft >= track.scrollWidth - track.clientWidth) {
    track.scrollLeft = 0;
  } else {
    track.scrollLeft += scrollAmount;
  }
}

setInterval(autoScroll, 30);
