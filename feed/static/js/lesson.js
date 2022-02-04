$(function(){


var LineMenu = $('.main__lessons_options-tab-line-itself');
var MainInfoTab = $('.main__lesson_info-maininfo');
var MaterialsTab = $('.main__lesson_info-materials');
var ScriptTab = $('.main__lesson_info-script');
var MainInfoBtn = $('.lessoninfo-btn');
var ScriptBtn = $('.lessonscript-btn');
var MarBtn = $('.lessonmat-btn');


MainInfoBtn.on('click', function(){
    MaterialsTab.fadeOut(100);
    ScriptTab.fadeOut(100);
    MainInfoTab.fadeIn(100);
    MainInfoBtn.addClass('lesson__info_active');
    ScriptBtn.removeClass('lesson__info_active');
    MarBtn.removeClass('lesson__info_active');
    LineMenu.animate({
        'right': 0,
        'width': '145px',
    }, 100, function(){
        LineMenu.animate({
            'right': 0,
            'width': '45px',
        }, 100, function(){
    
        });
    });
});
ScriptBtn.on('click', function(){
    MainInfoTab.fadeOut(100);
    MaterialsTab.fadeOut(100);
    ScriptTab.fadeIn(100);
    ScriptBtn.addClass('lesson__info_active');
    MainInfoBtn.removeClass('lesson__info_active');
    MarBtn.removeClass('lesson__info_active');
    LineMenu.animate({
        'width': '145px',
    }, 200, function(){
        LineMenu.animate({
            'right': -120,
            'width': '45px',
        }, 100, function(){
    
        });
    });
});
MarBtn.on('click', function(){
    MainInfoTab.fadeOut(100);
    ScriptTab.fadeOut(100);
    MaterialsTab.fadeIn(100);
    MarBtn.addClass('lesson__info_active');
    MainInfoBtn.removeClass('lesson__info_active');
    ScriptBtn.removeClass('lesson__info_active');
    LineMenu.animate({
        'width': '120px',
    }, 200, function(){
        LineMenu.animate({
            'right': -210,
            'width': '60px',
        }, 100, function(){
    
        });
    });
});



/* Mobile options */

var MobileMenuButtonIn = $('.header__menu__mobile');
    var MobileMenu = $('.main__central_mobile-menu');




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
   
});