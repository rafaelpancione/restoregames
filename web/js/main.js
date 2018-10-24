$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
});

$(".rslides-portifolio").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 5000,          // Integer: Time between slide transitions, in milliseconds
  pager: true,           // Boolean: Show pager, true or false
});

Visibility.onVisible(function(){
  setTimeout(function () {
    $(".intro h1").addClass("animated fadeInDown");
  }, 400);
    setTimeout(function () {
    $(".intro blockquote").addClass("animated fadeInDown");
  }, 600);
        setTimeout(function () {
    $(".intro .btn").addClass("animated fadeInDown");
  }, 800);
    setTimeout(function () {
    $(".intro-geral h1").addClass("animated fadeInDown");
  }, 200);
});
