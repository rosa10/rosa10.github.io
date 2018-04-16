$(window).on('load', function() {
  $('#status').fadeOut();
  $('#preloader').delay(2000).fadeOut('slow');
  $('body').delay(2000).css({'overflow':'visible'});
    $('.btn3d').click(function() {
        $('.progress').animate({width: '100%'}, 10000, 'swing', function() {
            window.location = 'https://itk.ac.id';
            });
    });
})
