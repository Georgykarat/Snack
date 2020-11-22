$(function(){

var tab1 = $('.tab_1');
var tab2 = $('.tab_2');
var tab3 = $('.tab_3');
var tab4 = $('.tab_4');
var tab5 = $('.tab_5');

tab1.on('click', function(){
    tab1.addClass('main__nav-panel_item-active')
    tab2.removeClass('main__nav-panel_item-active')
    tab3.removeClass('main__nav-panel_item-active')
    tab4.removeClass('main__nav-panel_item-active')
    tab5.removeClass('main__nav-panel_item-active')
    // add display to appropriate tab
    $('.main__lesson').css('display','block')
});
tab2.on('click', function(){
    tab2.addClass('main__nav-panel_item-active')
    tab1.removeClass('main__nav-panel_item-active')
    tab3.removeClass('main__nav-panel_item-active')
    tab4.removeClass('main__nav-panel_item-active')
    tab5.removeClass('main__nav-panel_item-active')
    // add display to appropriate tab
    $('.main__lesson').css('display','none')
});
tab3.on('click', function(){
    tab3.addClass('main__nav-panel_item-active')
    tab2.removeClass('main__nav-panel_item-active')
    tab1.removeClass('main__nav-panel_item-active')
    tab4.removeClass('main__nav-panel_item-active')
    tab5.removeClass('main__nav-panel_item-active')
    // add display to appropriate tab
    $('.main__lesson').css('display','none')
});
tab4.on('click', function(){
    tab4.addClass('main__nav-panel_item-active')
    tab2.removeClass('main__nav-panel_item-active')
    tab3.removeClass('main__nav-panel_item-active')
    tab1.removeClass('main__nav-panel_item-active')
    tab5.removeClass('main__nav-panel_item-active')
    // add display to appropriate tab
    $('.main__lesson').css('display','none')
});
tab5.on('click', function(){
    tab5.addClass('main__nav-panel_item-active')
    tab2.removeClass('main__nav-panel_item-active')
    tab3.removeClass('main__nav-panel_item-active')
    tab4.removeClass('main__nav-panel_item-active')
    tab1.removeClass('main__nav-panel_item-active')
    // add display to appropriate tab
    $('.main__lesson').css('display','none')
});

});