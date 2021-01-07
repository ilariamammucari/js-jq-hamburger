//racchiudo tutto nel document.ready per essere sicura di eseguire il codice solo dopo il caricamento del documento html
$(document).ready(function(){

  //selezione l'elemento che voglio cliccare e l'elemento che deve comparire al click
  $('.header-right a').click(function(){
    $('.hamburger-menu').fadeIn();
  });

  $('.close i').click(function(){
    $('.hamburger-menu').fadeOut();
  });
});