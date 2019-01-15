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
//formulario
$('.formphp').on('submit', function() {
  var emailContato = ""; //Escreva aqui seu e-mail

  var that = $(this),
      url = that.attr('action'),
      type = that.attr('method'),
      data = {};

  that.find('[name]').each(function(index, value) {
    var that = $(this),
        name = that.attr('name'),
        value = that.val();

    data[name] = value;
    });

  $.ajax({
    url: url,
    type: type,
    data: data,
    sucess: function(response) {

      if( $('[name="leaveblank"]').val().lenght != 0 ){
        $('.formphp').html("<div id='form-erro'></div>");
        $('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail." + emailContato + " </p>")
        .hide()
        .fadeIn(1500, function() {
        $('#form-erro');
        });
      } else {

        $('.formphp').html("<div id='form-send'></div>");
        $('#form-send').html("<span>Mensagem enviada!</span><p>Em breve entraremos em contato com você. Obrigado!</p>")
        .hide()
        .fadeIn(1500, function() {
        $('#form-send');
        });
      };
    },
    error: function(response) {
      $('.formphp').html("<div id='form-erro'></div>");
      $('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail." + emailContato + " </p>")
        .hide()
        .fadeIn(1500, function() {
        $('#form-erro');
        });
      }
    });

    return false;

    });