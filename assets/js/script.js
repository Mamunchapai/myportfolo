




$('.slider_feature').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true,
    centerPadding:'0px',
    dots:true,


    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  
  
  });

  
var typed = new Typed('.text_play', {
  strings: ["😊HELLOW everyone😊.i am a ...", "❤FONT end Developer❤"],
  typeSpeed: 30
});

var typed = new Typed('.aboutplay', {
  strings: ["😊HELLOW everyone😊...", "❤about me❤"],
  typeSpeed: 60
});


let main_menu = document.querySelector('.main_menu');

window.addEventListener('scroll',function(){
  let scrolling =this.window.scrollY;
  if(scrolling >150){
    main_menu.classList.add('menu_fixed')
  }else{
    main_menu.classList.remove('menu_fixed')

  }
})



