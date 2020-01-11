/* JavaScript Document */

$(document).ready(function(){
 
$('nav a.mobile_menu').on('click', function(){

     var currentNavHeight = $('nav').height();
  
      if(currentNavHeight < 5){
         var newNavheight = $('nav > ul').height()+ 15
         $('nav').animate({height:newNavheight + 'px'},750);
      }else {
           $('nav').animate({height: '0px'},750,function(){
                //remove the style that was inserted by jquery after menu collapse in mobile device
               $(this).removeAttr('style');
           });
           
      }
})

$(window).resize(function(){
     if($(this).width()> 625){
          $('nav').removeAttr('style');
     }
})
})