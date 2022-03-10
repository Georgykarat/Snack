$(function(){

var Reason = $('.faqform__select');
var BackBtn = $('.faqform__abandon-btn');
var ProceedBtn = $('.faqform__proceed-btn');
var Star1 = $('.star_1');
var Star2 = $('.star_2');
var Star3 = $('.star_3');
var Star4 = $('.star_4');
var Star5 = $('.star_5');
$('.faqform__stars-block').css('display', 'none');

Reason.change(function() {
    $('.field_block-linked-dbm').css('display', 'none');
    $('.field_block-linked-ilbm').css('display', 'none');
    $('.field_block-linked-kkn').css('display', 'none');
    $('.field_block-linked-kyc').css('display', 'none');
    $('.field_block-linked-dyi').css('display', 'none');
    $('.faqform__stars-block').css('display', 'none');
    $('.field_block-linked-str').css('display', 'none');
    $('.field_block-linked-drw').css('display', 'none');
    Reason.css('border', '1px solid lightgray');
    $('input').val('');
    $('textarea').val('');
    if (Reason.val() == 'I found a bug/mistake') {
        $('.field_block-linked-dbm').css('display', 'block');
        $('.field_block-linked-ilbm').css('display', 'block');
    } else if (Reason.val() == 'I want to share knowledge') {
        $('.field_block-linked-kkn').css('display', 'block');
        $('.field_block-linked-kyc').css('display', 'block');
    } else if (Reason.val() == 'I have an idea') {
        $('.field_block-linked-dyi').css('display', 'block');
        $('.field_block-linked-kyc').css('display', 'block');
    } else if (Reason.val() == 'Feedback') {
        $('.faqform__stars-block').css('display', 'flex');
        $('.field_block-linked-str').css('display', 'block');
        $('.field_block-linked-drw').css('display', 'block');
    }
  });

BackBtn.on('click', function(){
    if (BackBtn.text() == 'Back') {
        BackBtn.text('Sure?');
        BackBtn.css('background-color', '#EC3D3D');
        BackBtn.css('color', 'white');
        setTimeout(function() { 
            BackBtn.text('Back');
            BackBtn.css('background-color', 'transparent');
            BackBtn.css('color', '#EC3D3D');
        }, 3000);
    } else {
        $(location).attr('href','../');
    }
});
ProceedBtn.on('click', function(){
    if (Reason.val() != 'None') {
        if (ProceedBtn.text() == 'Proceed') {
            ProceedBtn.text('Sure?');
            ProceedBtn.css('background-color', '#26D07C');
            ProceedBtn.css('color', 'white');
            setTimeout(function() { 
                ProceedBtn.text('Proceed');
                ProceedBtn.css('background-color', 'transparent');
                ProceedBtn.css('color', '#26D07C');
            }, 3000);
        } else {
            if (Reason.val() == 'I found a bug/mistake') {
                $.ajax({
                    type: 'GET',
                    url: 'bugreport/',
                    data: {
                        requesttype: Reason.val(),
                        link: $('#faqform_buglink').val(),
                        bugdescription: $('#faqform_bugdesc').val(),
                    },
                    success: function(response) {
                        responsecode = response.responsecode;
                        if (responsecode == 200) {
                            $('.field_block-linked-dbm').css('display', 'none');
                            $('.field_block-linked-ilbm').css('display', 'none');
                            $('.field_block-linked-kkn').css('display', 'none');
                            $('.field_block-linked-kyc').css('display', 'none');
                            $('.field_block-linked-dyi').css('display', 'none');
                            $('.faqform__stars-block').css('display', 'none');
                            $('.field_block-linked-str').css('display', 'none');
                            $('.field_block-linked-drw').css('display', 'none');
                            $('.faqform_reasons').css('display', 'none');
                            $('.faqform__proceed-btn').css('display', 'none');
                            $('.faqform_header').text('Thank you! We got the info on the bug and will check it.');
                            setTimeout(function() { 
                                $(location).attr('href','../');
                            }, 4000);
                        } else if (responsecode == 400) {
                            $('.field_block-linked-dbm').css('display', 'none');
                            $('.field_block-linked-ilbm').css('display', 'none');
                            $('.field_block-linked-kkn').css('display', 'none');
                            $('.field_block-linked-kyc').css('display', 'none');
                            $('.field_block-linked-dyi').css('display', 'none');
                            $('.faqform__stars-block').css('display', 'none');
                            $('.field_block-linked-str').css('display', 'none');
                            $('.field_block-linked-drw').css('display', 'none');
                            $('.faqform_reasons').css('display', 'none');
                            $('.faqform__proceed-btn').css('display', 'none');
                            $('.faqform_header').text('Sorry, you already raised too much tickets');
                            setTimeout(function() { 
                                $(location).attr('href','../');
                            }, 4000);
                        } else if (responsecode == 401) {
                            $('#faqform_buglink').css('border', '1px solid #EC3D3D');
                            $('#faqform_bugdesc').css('border', '1px solid #EC3D3D');
                        }
                    }
                });
            } else if (Reason.val() == 'I want to share knowledge') {
                $.ajax({
                    type: 'GET',
                    url: 'bugreport/',
                    data: {
                        requesttype: Reason.val(),
                        knowledge: $('#faqform_know').val(),
                        contact: $('#faqform_contact').val(),
                    },
                    success: function(response) {
                        responsecode = response.responsecode;
                        if (responsecode == 200) {
                            $('.field_block-linked-dbm').css('display', 'none');
                            $('.field_block-linked-ilbm').css('display', 'none');
                            $('.field_block-linked-kkn').css('display', 'none');
                            $('.field_block-linked-kyc').css('display', 'none');
                            $('.field_block-linked-dyi').css('display', 'none');
                            $('.faqform__stars-block').css('display', 'none');
                            $('.field_block-linked-str').css('display', 'none');
                            $('.field_block-linked-drw').css('display', 'none');
                            $('.faqform_reasons').css('display', 'none');
                            $('.faqform__proceed-btn').css('display', 'none');
                            $('.faqform_header').text('Thank you for your support! We will contact you in response.');
                            setTimeout(function() { 
                                $(location).attr('href','../');
                            }, 4000);
                        } else if (responsecode == 400) {
                            $('.field_block-linked-dbm').css('display', 'none');
                            $('.field_block-linked-ilbm').css('display', 'none');
                            $('.field_block-linked-kkn').css('display', 'none');
                            $('.field_block-linked-kyc').css('display', 'none');
                            $('.field_block-linked-dyi').css('display', 'none');
                            $('.faqform__stars-block').css('display', 'none');
                            $('.field_block-linked-str').css('display', 'none');
                            $('.field_block-linked-drw').css('display', 'none');
                            $('.faqform_reasons').css('display', 'none');
                            $('.faqform__proceed-btn').css('display', 'none');
                            $('.faqform_header').text('Sorry, you already raised too much tickets');
                            setTimeout(function() { 
                                $(location).attr('href','../');
                            }, 4000);
                        } else if (responsecode == 401) {
                            $('#faqform_know').css('border', '1px solid #EC3D3D');
                            $('#faqform_contact').css('border', '1px solid #EC3D3D');
                        }
                    }
                });
            } else if (Reason.val() == 'I have an idea') {
                $.ajax({
                    type: 'GET',
                    url: 'bugreport/',
                    data: {
                        requesttype: Reason.val(),
                        idea: $('#faqform_idea').val(),
                        contact: $('#faqform_contact').val(),
                    },
                    success: function(response) {
                        responsecode = response.responsecode;
                        if (responsecode == 200) {
                            $('.field_block-linked-dbm').css('display', 'none');
                            $('.field_block-linked-ilbm').css('display', 'none');
                            $('.field_block-linked-kkn').css('display', 'none');
                            $('.field_block-linked-kyc').css('display', 'none');
                            $('.field_block-linked-dyi').css('display', 'none');
                            $('.faqform__stars-block').css('display', 'none');
                            $('.field_block-linked-str').css('display', 'none');
                            $('.field_block-linked-drw').css('display', 'none');
                            $('.faqform_reasons').css('display', 'none');
                            $('.faqform__proceed-btn').css('display', 'none');
                            $('.faqform_header').text('Thank you for your idea! We will contact you in response.');
                            setTimeout(function() { 
                                $(location).attr('href','../');
                            }, 4000);
                        } else if (responsecode == 400) {
                            $('.field_block-linked-dbm').css('display', 'none');
                            $('.field_block-linked-ilbm').css('display', 'none');
                            $('.field_block-linked-kkn').css('display', 'none');
                            $('.field_block-linked-kyc').css('display', 'none');
                            $('.field_block-linked-dyi').css('display', 'none');
                            $('.faqform__stars-block').css('display', 'none');
                            $('.field_block-linked-str').css('display', 'none');
                            $('.field_block-linked-drw').css('display', 'none');
                            $('.faqform_reasons').css('display', 'none');
                            $('.faqform__proceed-btn').css('display', 'none');
                            $('.faqform_header').text('Sorry, you already raised too much tickets');
                            setTimeout(function() { 
                                $(location).attr('href','../');
                            }, 4000);
                        } else if (responsecode == 401) {
                            $('#faqform_idea').css('border', '1px solid #EC3D3D');
                            $('#faqform_contact').css('border', '1px solid #EC3D3D');
                        }
                    }
                });
            } else if (Reason.val() == 'Feedback') {
                $.ajax({
                    type: 'GET',
                    url: 'bugreport/',
                    data: {
                        requesttype: Reason.val(),
                        estimate: $('#faqform_est').val(),
                        strength: $('#faqform_str').val(),
                        drawback: $('#faqform_draw').val(),
                    },
                    success: function(response) {
                        responsecode = response.responsecode;
                        if (responsecode == 200) {
                            $('.field_block-linked-dbm').css('display', 'none');
                            $('.field_block-linked-ilbm').css('display', 'none');
                            $('.field_block-linked-kkn').css('display', 'none');
                            $('.field_block-linked-kyc').css('display', 'none');
                            $('.field_block-linked-dyi').css('display', 'none');
                            $('.faqform__stars-block').css('display', 'none');
                            $('.field_block-linked-str').css('display', 'none');
                            $('.field_block-linked-drw').css('display', 'none');
                            $('.faqform_reasons').css('display', 'none');
                            $('.faqform__proceed-btn').css('display', 'none');
                            $('.faqform_header').text('Thank you for your feedback!');
                            setTimeout(function() { 
                                $(location).attr('href','../');
                            }, 4000);
                        } else if (responsecode == 401) {
                            $('#faqform_str').css('border', '1px solid #EC3D3D');
                            $('#faqform_draw').css('border', '1px solid #EC3D3D');
                        }
                    }
                });
            }
        }
    } else {
        Reason.css('border', '1px solid #EC3D3D');
    }
});

Star1.on('click', function(){
    Star1.css('-webkit-filter', 'none');
    Star1.css('filter', 'none');
    Star2.css('-webkit-filter', 'grayscale(100%)');
    Star2.css('filter', 'grayscale(100%)');
    Star3.css('-webkit-filter', 'grayscale(100%)');
    Star3.css('filter', 'grayscale(100%)');
    Star4.css('-webkit-filter', 'grayscale(100%)');
    Star4.css('filter', 'grayscale(100%)');
    Star5.css('-webkit-filter', 'grayscale(100%)');
    Star5.css('filter', 'grayscale(100%)');
    $('#faqform_est').val(1)
    var Estimation = 1;
});
Star2.on('click', function(){
    Star1.css('-webkit-filter', 'none');
    Star1.css('filter', 'none');
    Star2.css('-webkit-filter', 'none');
    Star2.css('filter', 'none');
    Star3.css('-webkit-filter', 'grayscale(100%)');
    Star3.css('filter', 'grayscale(100%)');
    Star4.css('-webkit-filter', 'grayscale(100%)');
    Star4.css('filter', 'grayscale(100%)');
    Star5.css('-webkit-filter', 'grayscale(100%)');
    Star5.css('filter', 'grayscale(100%)');
    $('#faqform_est').val(2)
    var Estimation = 2;
});
Star3.on('click', function(){
    Star1.css('-webkit-filter', 'none');
    Star1.css('filter', 'none');
    Star2.css('-webkit-filter', 'none');
    Star2.css('filter', 'none');
    Star3.css('-webkit-filter', 'none');
    Star3.css('filter', 'none');
    Star4.css('-webkit-filter', 'grayscale(100%)');
    Star4.css('filter', 'grayscale(100%)');
    Star5.css('-webkit-filter', 'grayscale(100%)');
    Star5.css('filter', 'grayscale(100%)');
    $('#faqform_est').val(3)
    var Estimation = 3;
});
Star4.on('click', function(){
    Star1.css('-webkit-filter', 'none');
    Star1.css('filter', 'none');
    Star2.css('-webkit-filter', 'none');
    Star2.css('filter', 'none');
    Star3.css('-webkit-filter', 'none');
    Star3.css('filter', 'none');
    Star4.css('-webkit-filter', 'none');
    Star4.css('filter', 'none');
    Star5.css('-webkit-filter', 'grayscale(100%)');
    Star5.css('filter', 'grayscale(100%)');
    $('#faqform_est').val(4)
    var Estimation = 4;
});
Star5.on('click', function(){
    Star1.css('-webkit-filter', 'none');
    Star1.css('filter', 'none');
    Star2.css('-webkit-filter', 'none');
    Star2.css('filter', 'none');
    Star3.css('-webkit-filter', 'none');
    Star3.css('filter', 'none');
    Star4.css('-webkit-filter', 'none');
    Star4.css('filter', 'none');
    Star5.css('-webkit-filter', 'none');
    Star5.css('filter', 'none');
    $('#faqform_est').val(5)
    var Estimation = 5;
});
    
});