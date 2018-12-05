
$(document).ready(function(){
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

});
