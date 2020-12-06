$(function(){

var tab1 = $('.tab_1');
var tab2 = $('.tab_2');
var tab3 = $('.tab_3');
var tab4 = $('.tab_4');
var tab5 = $('.tab_5');
var tab6 = $('.tab_6');
var maxv = $('.max_view');
var minv = $('.min_view');
var texts = $('.main__script-text');
var qa = $('.main__qa');
var ex = $('.main__exercise');
var quiz = $('.main__quiz');
var li = $('.main__qa-li');
var start_quiz = $('.main__quiz-btn');
var lesson = $('.lesson-itself-cnt');
var quiz_window = $('.quiz-itself-cnt');
var quiz_back = $('.quiz__go-back');
var l = $('.l');
var pxe = 0;
var counter = 1;
var btnscript = $('.open__script-btn');
var script_les = 0;
var open_menu = $('.mobile__nav-open-btn');
var menu = 0;
var close_btn = $('.mobile__close-nav');

btnscript.on('click', function(){
    if (script_les == 0) {    
        $('.main__script-zone').css('display', 'block');
        $('.main__script-zone').css('height', 'unset');
        script_les = 1;
    } else {
        $('.main__script-zone').css('display', 'none');
        $('.main__script-zone').css('height', '0px');
        script_les = 0;
    }

});

open_menu.on('click', function(){
    $('.mobile__header-nav').animate({left: "0px"}, 700);
});
close_btn.on('click', function(){
    $('.mobile__header-nav').animate({left: "-5000px"}, 700);
})

tab1.on('click', function(){
    tab1.addClass('main__nav-panel_item-active');
    tab2.removeClass('main__nav-panel_item-active');
    tab3.removeClass('main__nav-panel_item-active');
    tab4.removeClass('main__nav-panel_item-active');
    tab5.removeClass('main__nav-panel_item-active');
    tab6.removeClass('main__nav-panel_item-active');
    // add display to appropriate tab
    $('.main__lesson').css('display','block');
    $('.main__script').css('display','none');
    qa.css('display','none');
    ex.css('display','none');
    quiz.css('display','none');
});
tab2.on('click', function(){
    tab2.addClass('main__nav-panel_item-active');
    tab1.removeClass('main__nav-panel_item-active');
    tab3.removeClass('main__nav-panel_item-active');
    tab4.removeClass('main__nav-panel_item-active');
    tab5.removeClass('main__nav-panel_item-active');
    tab6.removeClass('main__nav-panel_item-active');
    // add display to appropriate tab
    $('.main__lesson').css('display','none');
    $('.main__script').css('display','block');
    qa.css('display','none');
    ex.css('display','none');
    quiz.css('display','none');
});
tab3.on('click', function(){
    tab3.addClass('main__nav-panel_item-active');
    tab2.removeClass('main__nav-panel_item-active');
    tab1.removeClass('main__nav-panel_item-active');
    tab4.removeClass('main__nav-panel_item-active');
    tab5.removeClass('main__nav-panel_item-active');
    tab6.removeClass('main__nav-panel_item-active');
    // add display to appropriate tab
    $('.main__lesson').css('display','none');
    $('.main__script').css('display','none');
    qa.css('display','none');
    ex.css('display','none');
    quiz.css('display','block');
});
tab4.on('click', function(){
    tab4.addClass('main__nav-panel_item-active');
    tab2.removeClass('main__nav-panel_item-active');
    tab3.removeClass('main__nav-panel_item-active');
    tab1.removeClass('main__nav-panel_item-active');
    tab5.removeClass('main__nav-panel_item-active');
    tab6.removeClass('main__nav-panel_item-active');
    // add display to appropriate tab
    $('.main__lesson').css('display','none');
    $('.main__script').css('display','none');
    qa.css('display','none');
    ex.css('display','block');
    quiz.css('display','none');
});
tab5.on('click', function(){
    tab5.addClass('main__nav-panel_item-active');
    tab2.removeClass('main__nav-panel_item-active');
    tab3.removeClass('main__nav-panel_item-active');
    tab4.removeClass('main__nav-panel_item-active');
    tab1.removeClass('main__nav-panel_item-active');
    tab6.removeClass('main__nav-panel_item-active');
    // add display to appropriate tab
    $('.main__lesson').css('display','none');
    $('.main__script').css('display','none');
    qa.css('display','block');
    ex.css('display','none');
    quiz.css('display','none');
});
tab6.on('click', function(){
    tab6.addClass('main__nav-panel_item-active');
    tab2.removeClass('main__nav-panel_item-active');
    tab3.removeClass('main__nav-panel_item-active');
    tab4.removeClass('main__nav-panel_item-active');
    tab1.removeClass('main__nav-panel_item-active');
    tab5.removeClass('main__nav-panel_item-active');
    // add display to appropriate tab
    $('.main__lesson').css('display','none');
    $('.main__script').css('display','none');
    qa.css('display','none');
    ex.css('display','none');
    quiz.css('display','none');
});


maxv.on('click', function(){
    if (texts.css('font-size') == '8px') {
        texts.css('font-size', '10px');
    } else if (texts.css('font-size') == '10px') {
        texts.css('font-size', '12px');
    } else if (texts.css('font-size') == '12px') {
        texts.css('font-size', '14px');
    } else if (texts.css('font-size') == '14px') {
        texts.css('font-size', '16px');
    } else if (texts.css('font-size') == '16px') {
        texts.css('font-size', '18px');
    } else if (texts.css('font-size') == '18px') {
        texts.css('font-size', '20px');
    } else if (texts.css('font-size') == '20px') {
        texts.css('font-size', '22px');
    } else if (texts.css('font-size') == '22px') {
        texts.css('font-size', '24px');
    } else if (texts.css('font-size') == '24px') {
        texts.css('font-size', '26px');
    } else if (texts.css('font-size') == '26px') {
        texts.css('font-size', '28px');
    } else if (texts.css('font-size') == '28px') {
        texts.css('font-size', '30px');
    } else if (texts.css('font-size') == '30px') {
        texts.css('font-size', '32px');
    } else if (texts.css('font-size') == '32px') {
        texts.css('font-size', '34px');
    } else if (texts.css('font-size') == '34px') {
        texts.css('font-size', '36px');
    } else if (texts.css('font-size') == '36px') {
        texts.css('font-size', '38px');
    }
});
minv.on('click', function(){
    if (texts.css('font-size') == '38px') {
        texts.css('font-size', '36px');
    } else if (texts.css('font-size') == '36px') {
        texts.css('font-size', '34px');
    } else if (texts.css('font-size') == '34px') {
        texts.css('font-size', '32px');
    } else if (texts.css('font-size') == '32px') {
        texts.css('font-size', '30px');
    } else if (texts.css('font-size') == '30px') {
        texts.css('font-size', '28px');
    } else if (texts.css('font-size') == '28px') {
        texts.css('font-size', '26px');
    } else if (texts.css('font-size') == '26px') {
        texts.css('font-size', '24px');
    } else if (texts.css('font-size') == '24px') {
        texts.css('font-size', '22px');
    } else if (texts.css('font-size') == '22px') {
        texts.css('font-size', '20px');
    } else if (texts.css('font-size') == '20px') {
        texts.css('font-size', '18px');
    } else if (texts.css('font-size') == '18px') {
        texts.css('font-size', '16px');
    } else if (texts.css('font-size') == '16px') {
        texts.css('font-size', '14px');
    } else if (texts.css('font-size') == '14px') {
        texts.css('font-size', '12px');
    } else if (texts.css('font-size') == '12px') {
        texts.css('font-size', '10px');
    } else if (texts.css('font-size') == '10px') {
        texts.css('font-size', '8px');
    }
});
li.on('click', function(){
    if (li.css('background-color') == 'transparent') {
        li.css('background-color', '#27cf7f');
        $('.main__qa-li_header').css('color', 'white');
        $('.main__qa-li_header').css('border-bottom', '1px solid white');
        $('.main__qa-text').css('color', 'white');
    } else {
        li.css('background-color', 'transition');
        $('.main__qa-li_header').css('color', 'black');
        $('.main__qa-li_header').css('border-bottom', '1px solid rgb(236, 236, 236)');
        $('.main__qa-text').css('color', 'grey');
    }
});
start_quiz.on('click', function(){
    lesson.css('display', 'none');
    quiz_window.css('display', 'block');
});
var scrollName = $('#qform'),
    scrollElem = $(scrollName);
    scrollTop = scrollElem.offset().top;

    $('html, body').animate({
        scrollTop: scrollTop
      }, 200);

quiz_back.on('click', function(){
    $('.quiz-itself-cnt').css('display', 'none');
    $('.lesson-itself-cnt').css('display', 'block');
});

l.on('click', function(){
    
});
/*
    $('body').keypress(function(event){
        if (event.which == 49) {    
            if ($('.quiz__task-answers-firstbtn').hasClass('op')) {
                if ($('.quiz__task-answers-firstbtn').hasClass('l')) {    
                    $('.quiz__task-answers-firstbtn').css('background-color', 'greenyellow');
                    pxe = pxe + 5;
                } else {
                    $('.quiz__task-answers-firstbtn').css('background-color', 'red');
                    l.css('background-color', 'greenyyellow');
                    pxe = pxe - 10;
                }
            }
        }
    });
    $('body').keypress(function(event){
        if (event.which == 50) {    
            if ($('.quiz__task-answers-secondbtn').hasClass('l')) {    
                $('.quiz__task-answers-secondbtn').css('background-color', 'greenyellow');
                pxe = pxe + 5;
            } else {
                $('.quiz__task-answers-secondbtn').css('background-color', 'red');
                l.css('background-color', 'greenyyellow');
                pxe = pxe - 10;
            }
        }
    });
    $('body').keypress(function(event){
        if (event.which == 51) {    
            if ($('.quiz__task-answers-thirdbtn').hasClass('l')) {    
                $('.quiz__task-answers-thirdbtn').css('background-color', 'greenyellow');
                pxe = pxe + 5;
            } else {
                $('.quiz__task-answers-thirdbtn').css('background-color', 'red');
                l.css('background-color', 'greenyyellow');
                pxe = pxe - 10;
            }
        }
    });
    $('body').keypress(function(event){
        if (event.which == 52) {    
            if ($('.quiz__task-answers-forthbtn').hasClass('l')) {    
                $('.quiz__task-answers-forthbtn').css('background-color', 'greenyellow');
                pxe = pxe + 5;
            } else {
                $('.quiz__task-answers-forthbtn').css('background-color', 'red');
                l.css('background-color', 'greenyyellow');
                pxe = pxe - 10;
            }
        }
    }); */
    

});