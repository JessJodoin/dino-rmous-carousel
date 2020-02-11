$('.previous').on('click' , function () {
  var prev = $('.current').prev();

  if (!prev.length) {
    prev = $('.embed-item:last-child');
  }
  $('.current').removeClass('current');
  prev.addClass('current');
});

$('.next').on('click' , function () {
  var next = $('.current').next();

  if (!next.length) {
    next = $('.embed-item:first-child');
  }
  $('.current').removeClass('current');
  next.addClass('current');
});
