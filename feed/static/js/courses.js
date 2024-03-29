$(function(){

var TagsFilter = $('.tags_filter');
var TagElement = $('.courses__tags-li');
var CourseCard = $('.courses-li');
var SearchFilter = $('.main__cnt_filter_search');
var CourseHeader = $('h3');
var ComplexityFilter = $('.complexity_filter');
var ComplexityElement = $('.complexity__amount')


TagsFilter.on('change', function(){
    // SearchFilter.val('');
    TagElement.removeClass("courses__tags-li_active");
    if (this.value == '') {
        CourseCard.show();
    } else {
        CourseCard.hide();
        var TagToFind = this.value;
        TagElement.each(function(){
            if ($(this).text() == TagToFind) {
                $(this).addClass("courses__tags-li_active");
                $(this).parent().parent().parent().parent().show();
            }
        });
    }
});
TagElement.on('click', function(){
    CourseCard.hide();
    TagElement.removeClass("courses__tags-li_active");
    var TagToFind = $(this).text();
    //CourseCard.hide;
    TagElement.each(function(){
        if ($(this).text() == TagToFind) {
            $(this).addClass("courses__tags-li_active");
            $(this).parent().parent().parent().parent().show();
        }
    });
});

ComplexityFilter.on('change', function(){
    if (this.value == '') {
        CourseCard.show();
    } else {
        CourseCard.hide();
        var TagToFind = this.value;
        ComplexityElement.each(function(){
            if ($(this).text() == TagToFind) {
                $(this).parent().parent().parent().parent().parent().parent().show();
            }
        });
    }
});

SearchFilter.on('input', function(){
    var SearchMaterial = $(this).val().toLowerCase();
        if (SearchMaterial.length < 3){
            CourseCard.show();
        } else {
            CourseHeader.each(function(){
                if($(this).text().toLowerCase().indexOf(SearchMaterial) < 0){
                    $(this).parent().parent().parent().parent().hide();
                } else {
                    $(this).parent().parent().parent().parent().show();
                }
            });
        }

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