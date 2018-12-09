fichas = 10;

$(document).ready(function(){
  
  console.log(fichas);

  $('.jumbo-aposta').hide()
  $('#aposta-feita').hide()

  $("#apostar").click(function(){
      $(this).hide();
      $('.jumbo-aposta').show()
  });

  $("#confirmar-aposta").click(function(){
      $(this).hide();
      $('.jumbo-aposta').hide()

      $('#aposta-feita').show()
  });


  
  $( ".noFichas" ).text( fichas );


  $("#confirmar-aposta").click(function(){
      
      var valorAposta = $('.valorAposta').val();
      $( ".apostaConcluida" ).text( valorAposta );

      fichas =  fichas - parseInt(valorAposta);

      $( ".noFichas" ).text( fichas );

    
      $(this).hide();
      $('.jumbo-aposta').hide()

      $('#aposta-feita').show()
  });


});
