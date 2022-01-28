$(function(){

    var MobileMenuButtonIn = $('.header__menu__mobile');
    var MobileMenu = $('.main__central_mobile-menu');
    var LogOutButtonAbove = $('.header__logout_mobile');



    MobileMenuButtonIn.on('click', function(){
        if (MobileMenu.css('display') == 'none') {
            //LogOutButtonAbove.css('display', 'none');
            $('.header-cnt').css('box-shadow', 'none');
            $('main').fadeOut("fast", function(){
            });
            $('footer').fadeOut("fast", function(){
                MobileMenu.css('display', 'block');
            });
        } else {
            MobileMenu.fadeOut("fast", function(){
                $('main').fadeIn("fast", function(){
                });
                $('footer').fadeIn("fast", function(){
                });
            });
            //LogOutButtonAbove.css('display', 'flex')
            // $('.header-cnt').css('box-shadow', '0px 0px 100px #e5e5e5');
        }
    });
    $('.returnback').on('click', function(){
        MobileMenu.fadeOut("fast", function(){
            $('main').fadeIn("fast", function(){
            });
            $('footer').fadeIn("fast", function(){
            });
        });
    });


/* Swiper */

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    effect: 'cards',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

/* End of swiper */

   
});