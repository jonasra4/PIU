function incrmentaFichas(){


  localStorage.fichas =(parseInt(localStorage.fichas) + 3).toString();
      $( ".noFichas" ).text( localStorage.fichas );
}

$(document).ready(function(){
  
  console.log(localStorage.fichas);

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


  
  $( ".noFichas" ).text( localStorage.fichas );


  $("#confirmar-aposta").click(function(){
      
      var valorAposta = $('.valorAposta').val();
      $( ".apostaConcluida" ).text( valorAposta );

      localStorage.fichas =  localStorage.fichas - parseInt(valorAposta);

      $( ".noFichas" ).text( localStorage.fichas );

      var x =  (valorAposta * 100) / 150    

      var valor = $( "#barra" ).width();

      var total = valor * (1 + (x/100));
     $( "#barra" ).width(total);

     var a = (parseInt(valorAposta) + 143).toString() + "/150 fichas"
     $( "#fichas-restantes" ).text( a );
    
      $(this).hide();
      $('.jumbo-aposta').hide()

      $('#aposta-feita').show()
  });


});
