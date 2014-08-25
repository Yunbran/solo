// load jquery
//var $ = require('jquery');
//require('jquery-ui');

$( document ).ready(function() {
     console.log('has loaded');

//Progressbar function
      $(function() {

    $( "#progressbar" ).progressbar({
      value: 37
    });
 


  });
var buttonList = [$('#like1'),$('#like2'),$('#guess1'), $('#guess2')];

var like1 = $('#like1');
var like2 = $('#like2');
var guess1 = $('#guess1');
var guess2 = $('#guess2');
    console.log( "ready!" );



   like1.mouseenter(function()
    {
     like1.fadeTo(0,1);   
        
    });


    like1.mouseleave(function()
    {
     like1.fadeTo(0,0.80);   
        
    });
   
   like2.mouseenter(function()
    {
     like2.fadeTo(0,1);   
        
    });


    like2.mouseleave(function()
    {
     like2.fadeTo(0,0.80);   
        
    });


$('#name1').scalem({
    ratio: 1,
    reference: '#name1',
    styles: 'border-radius border-width'
  });


$('#name2').scalem({
    ratio: 1,
    reference: '#name1',
    styles: 'border-radius border-width'
  });





 // $('h1').scalem();
  // Scale text to 25% of the document's width using data attribute
  //$('#txt').scalem();
  // Scale button to 100% the width of the <h1>, while also keeping its
  // border ratio and width proportionate, by passing object properties











});