$(window).scroll(function(){
  var windowH = $(window).height(),
  scrolly = $(window).scrollTop();

  $('p').each(function){
    var elPosition = $(this).offset().top;
    if (scrollY > elPosition - windowH){
      $(this).addClass("txt-effect");
    }
  });
});
