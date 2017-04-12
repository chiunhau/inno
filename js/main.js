$(document).ready(function(){
  $('#toggle-icon').click(function(){
    if($('#toggle-menu').hasClass('toggle-menu-show')){
      $('#toggle-menu').removeClass('toggle-menu-show');
      
    }
    else{
      $('#toggle-menu').addClass('toggle-menu-show');
      
    }
  });     
});