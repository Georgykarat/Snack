$(document).ready(function(){
    if ($('#left-menu-flag').text() == 'False') {
        $('.li-menu').css('display', 'none');
        $('.toggle-label').css('display', 'none');
        $('h2').css('display', 'none');
        $('.main__central-cnt_left').css('width', '5%');
        $('.main__central-cnt_left').css('min-width', '5%');
        $('.main__central-cnt_left').css('max-width', '5%');
        $('.main__central-cnt_right').css('width', '90%');
        $('.main__central-cnt_right').css('min-width', '90%');
        $('.main__central-cnt_right').css('max-width', '90%');
    }
});

$(function(){


var LineMenu = $('.main__lessons_options-tab-line-itself');
var MainInfoTab = $('.main__lesson_info-maininfo');
var MaterialsTab = $('.main__lesson_info-materials');
var ScriptTab = $('.main__lesson_info-script');
var MainInfoBtn = $('.lessoninfo-btn');
var ScriptBtn = $('.lessonscript-btn');
var MarBtn = $('.lessonmat-btn');
var Video = $('.main__lesson_video-cnt');
var QuizButton = $('.main__lesson_takequiz-btn');
var LessonCompletedCounter = $('.lesson_completed_counter');
var CLessonID = $('.clessonid').text()
var NotCompletedFirst = $('.main__progressbar_notcompleted').first();
var Sliderbutton = $('.left_pane_slider-btn');
var VideoHeight = $('video').height();

var ProgressHeaderHeight = $('.main__leson-progress-header').height() + $('.main__leson-progress-total').height() + $('.main__leson-progressbar-cnt').height()
var ProgressHeight = VideoHeight - ProgressHeaderHeight
$('.main__lesson_course-progress-cnt').height(ProgressHeight);
var ScrollAmount = (parseInt(CLessonID) - 2) * 50
// if ((parseInt(CLessonID) - 2) * 50 > ProgressHeight - 300) {
//     var ScrollAmount = ProgressHeight - 50
// } else {
//     var ScrollAmount = (parseInt(CLessonID) - 2) * 50
// }

//var ScrollAmount = (parseInt(CLessonID) - 2) * 50
var Scroller = $("#main__course_progress-ulid");

Scroller.scrollTop(ScrollAmount);
console.log(parseInt((parseInt(CLessonID) - 2) * 50));
console.log(parseInt(ProgressHeight - 300));

// $('.main__course_progress-li-title-now').scrollTop(100);
// console.log(ProgressHeaderHeight / 2);



MainInfoBtn.on('click', function(){
    MaterialsTab.fadeOut(200);
    ScriptTab.fadeOut(200);
    MainInfoTab.fadeIn(200);
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
    MainInfoTab.fadeOut(200);
    MaterialsTab.fadeOut(200);
    ScriptTab.fadeIn(200);
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
    MainInfoTab.fadeOut(200);
    ScriptTab.fadeOut(200);
    MaterialsTab.fadeIn(200);
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

// Time duration counter
var i = setInterval(function() {
	if(document.querySelector('video').readyState > 0) {
		var obj = document.querySelector('video').duration;
        var minutes = parseInt(obj / 60, 10);
        var seconds = Math.round(obj % 60);
        if (seconds < 10) {
            $('.minutes').text(minutes);
            $('.seconds').text(seconds);
        } else {
            $('.minutes').text(minutes);
            $('.seconds').text(seconds);
        }
        console.log(obj);

		// (Put the minutes and seconds in the display)
		clearInterval(i);
	}
}, 200);

// Current time

var LessonCompleted = (function(){
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            //Here should be AJAX instead of console.log
            $.ajax({
                type: 'get',
                url: 'completed/',
                data: {
                    /*csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),*/
                },
                success: function(response) {
                    nextlesson = response.nextlesson;
                    nextlessonhref = "../" + nextlesson + "/";
                    lessonid = "#" + nextlesson;
                    $(lessonid).parent().attr("href", nextlessonhref);
                    $(lessonid).children('.main__course_progress-li-title').removeClass('main__course_progress-li-title').addClass('main__course_progress-li-title-prev');
                    QuizButton.css('background-color', '#26D07C');
                    QuizButton.css('cursor', 'pointer');
                    QuizButton.parent().attr("href", "quiz/");
                    current_lesson_figure = LessonCompletedCounter.text();
                    current_lesson_figure = Number(current_lesson_figure) + 1;
                    LessonCompletedCounter.text(current_lesson_figure);
                    NotCompletedFirst.css('background-color', '#26D07C');
                    
                }
            });
            console.log('Pop should be activated');
        }
    };
})();

var aud = document.getElementById("singleVideo");

// Assign an ontimeupdate event to the <audio> element, and execute a function if the current playback position has changed
aud.ontimeupdate = function() {VideoTimeChanched()};

function VideoTimeChanched() {
    var obj = document.querySelector('video').duration;
    var cminutes = parseInt(aud.currentTime / 60, 10);
    var cseconds = Math.round(aud.currentTime % 60);
    document.getElementById("c-minutes").innerHTML = cminutes;
    document.getElementById("c-seconds").innerHTML = cseconds;
    objstop = obj - 10
    if (aud.currentTime > objstop && aud.currentTime < objstop + 3) {
        LessonCompleted();
    }

}

// Slider for left pane

Sliderbutton.on('click', function(){
    if ($('h2').css('display') != 'none') {
        $('.li-menu').css('display', 'none');
        $('.toggle-label').css('display', 'none');
        $('h2').css('display', 'none');
        $('.main__central-cnt_left').animate({
            'width': '5%',
            'min-width': '5%',
            'max-width': '5%',
        }, 400, function(){
        });
        $('.main__central-cnt_right').animate({
            'width': '90%',
            'min-width': '90%',
            'max-width': '90%',
        }, 400, function(){
            // $('.left_pane_slider-btn').text('&#8593;')
        });
    } else {
        $('.main__central-cnt_right').animate({
            'width': '76%',
            'min-width': '76%',
            'max-width': '76%',
        }, 400, function(){
        });
        $('.main__central-cnt_left').animate({
            'width': '20%',
            'min-width': '20%',
            'max-width': '20%',
        }, 400, function(){
            $('.li-menu').css('display', 'flex');
            $('h2').css('display', 'flex');
            $('.toggle-label').css('display', 'flex');
            // $('.left_pane_slider-btn').text('&#8594;')
        });
    }
    $.ajax({
        type: 'get',
        url: 'leftmenu/',
        data: {
            /*csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),*/
        },
        success: function(response) {

        }
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