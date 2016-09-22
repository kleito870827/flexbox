( function() {
  var see = true;
  var change = 2;

  $(".fa-align-left").on('click', function(){
    if(see){
      del();
      $('.content').css("flex-direction", 'row');
      $('.main-area').css("order", '-1');
      $('.sidebar').addClass('animated bounceInRight');
      $('#icon').css('transform', '360deg');
      change=1;
    }
  })
  $(".fa-align-right").on('click', function(){
    if(see){
      del();
      $('.content').css("flex-direction", 'row');
      $('.main-area').css("order", '1');
      $('.sidebar').addClass('animated bounceInLeft');
      change=2;
    }

  })
  $(".fa-align-justify").on('click', function(){
    if(see){
      del();
      $('.content').css("flex-direction", 'row');
      $('.main-area').css("order", '1');
      $('.content').css("flex-direction", 'column');
      $('.sidebar').addClass('animated zoomIn');
      change=3;
    }
  })
  $('.fa-arrow-circle-right').on('click', function(){
    var dis_see = (see ? "none" : "block");
    // var acul_see = (see ? '0': '1');
    if(see){
      if(change === 1){
        $('.sidebar').addClass('animated bounceOutRight');
      }else if(change === 2){
            $('.sidebar').addClass('animated bounceOutLeft');
      }else{
          $('.sidebar').addClass('animated zoomOut');
      }
    }if(!see){
      if(change === 1){
        del();
        $('.sidebar').addClass('animated bounceInRight');
      }else if(change === 2){
        del();
        $('.sidebar').addClass('animated bounceInLeft');
      }else{
        del();
        $('.sidebar').addClass('animated zoomIn');
      }
    }

    see = !see;

    // $('.sidebar').css('opacity', acul_see);

    setTimeout(function(){$('.sidebar').css('display', dis_see); }, 400);

  })

  function del(){
    $('.sidebar').removeClass('animated bounceOutRight');
      $('.sidebar').removeClass('animated bounceInRight');
      $('.sidebar').removeClass('animated bounceOutLeft');
      $('.sidebar').removeClass('animated bounceInLeft');
      $('.sidebar').removeClass('animated zoomIn');
      $('.sidebar').removeClass('animated zoomOut');
  }

})();
