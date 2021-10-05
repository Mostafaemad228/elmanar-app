
  // /////////////////////////////////////////
  window.addEventListener("scroll" , function () {    
    var navbar =  document.querySelector("nav");
    navbar.classList.toggle("sticky",window.scrollY >50);
  })
  // ///////////////////////////////////////////////////////////// ///////////////////////
 
  
// var myHeader = document.getElementById("header");
// var i = 0;
// var headerImages =[
//     "images/banner/slider-1.jpg",
//     "images/banner/slider-2.jpg",
//     "images/banner/slider-3.jpg"
// ];

//  function slideShow() {
//     myHeader.style.backgroundImage = "url("+headerImages[i]+")"

//     if ( i < headerImages.length - 1) {
//         i++
//     }
//     else{
//         i = 0
//     }
//     setTimeout("slideShow()",3000);
//  }
//  slideShow()


// ////////////////////////// /////////////////////// ///////////////////////
var typed = new Typed('.type-text', {
  strings: [" ceo devfolio " , "front end developer." , "graphic designer." ,"ceo devfolio."],
  typeSpeed: 100,
  backSpeed: 50,
  smartBackspace: true,
  loop : true,
  loopCount: Infinity,

});


// ///////////////////////////////////////////////////////////////////////////






// ////////////////////////// /////////////////////// ///////////////////////

document.querySelector(".toggle-style-switcher").addEventListener("click" , () =>{

  document.querySelector(".style-switcher").classList.toggle("open");  

})
// ///////////////////////////////////// /////////////////////// ///////////////////////



$(document).ready(function(e) {
  $('.HowCarsoul').owlCarousel({
      rtl:true,
      loop: true,
      margin:2,
      autoplay: true,
      smartSpeed: 500,
      nav: true,
      dots: false,
  // navText: ['<span aria-label="Previous">‹</span>','<span aria-label="Next">›</span>'],
  lazyLoad:true,
  responsive:{
      0:{
          items:2,
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
  });
});


 $(function () {
$("#carsour-teste").owlCarousel({
    dots:true,
    responsiveBaseElement:window,
    items:1,
    autoplay:true,
    smartSpeed:700,
    loop:true,
    autoPlayHoverPause:true
});

});
// /////////////////////// /////////////////////// ///////////////////////



  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  