$('main').css({
  'height': ($(window).height())
});

$('.all-pics').hide();

$('#pic1').show();

$('body').on('click', '.all-pics', function() {
  // slide this section out of sight
  $(this).slideToggle();

  // show the next section - unless we are on the last section
  if ($(this).attr("id") != "pic4") {
    $(this).next().slideToggle();
  } else {
    $('#pic1').slideToggle();
  }
});
