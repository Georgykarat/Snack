$(function(){

var QuizOption = $('.quiz__window-abody_option');
var Option1 = $('.option_co4_o1');
var Option2 = $('.option_co4_o2');
var Option3 = $('.option_co4_o3');
var Option4 = $('.option_co4_o4');
var AnswerBtn = $('.answer_btn_class');
var NextButton = $('.nextq_inactive-btn');
var ProgressCircle = $('.progress-circle');
var QuizCard = $('.quiz__card_1')
var QuizArea = $('.quiz__main-central-cnt');
var ExitBtn = $('.quiz__give-up_button');
var RightAud = new Audio();
var SSoundPath = '/media/sound/right.wav';
var WSoundPath = '/media/sound/fail.wav';
var Counter = 1;



function UpdateCard(qtype, question, color, fontcolor, o1, o2, o3, o4, complexity, id, code) {
    if (qtype == 0) {
        // Get code and create code flag
        if (code != "") {
            codehave = '<div class="quiz__op_code"></div>';
            codeblockh = '<div class="quiz__codepart">\
            <div class="quiz__codepart_centralcnt">\
                <div class="quiz__window_qbody-header-opbar2">\
                    <div class="quiz__op_code" styles="float: right;"></div>\
                </div>\
                <div class="quiz__code-body">' + code + '</div>\
            </div>\
        </div>';
        } else {
            codehave = '';
            codeblockh = '';
        }
        // Get complexity and appropriate html code
        if (complexity == 1) {
            complexityh = '<div class="complexity_icon_low"></div>';
        } else if (complexity == 2) {
            complexityh = '<div class="complexity_icon_m"></div>';
        } else if (complexity == 3) {
            complexityh = '<div class="complexity_icon_high"></div>';
        }
        QuizCard.append('<div class="quiz__window-qbody" style="background-color: #' + color + ';" id="q1">  \
        <div class="quiz__window-qbody-centre">  \
        <div class="quiz__window_qbody-header"> \
            <div class="quiz__window_qbody-header-complexity"> \
                #' + id + '&nbsp;:\
                &nbsp;' + complexityh + '</div> \
            <div class="quiz__window_qbody-header-opbar">' + codehave + '</div> \
        </div>\
            <div class="quiz__window_qbody-question" style="color: #' + fontcolor + ';">' + question + '</div>\
            <div class="quiz__window_qbody-2section">\
                <div class="quiz__window_qbody_hintblock">\
                    <div class="quiz__window_qbody_icon">\
                    </div>\
                    <div class="quiz__window_qbody_hint-cnt">\
                        <div class="quiz__Window_qbody_hint_h" style="color: #' + fontcolor + ';">&nbsp;</div>\
                        <div class="quiz__Window_qbody_hint_desc" style="color: #' + fontcolor + ';">\
                        &nbsp;\
                        </div>\
                    </div>\
                </div>\
                <div class="answer_inactive-btn answer_btn_class">Answer</div>\
                <div class="nextq_inactive-btn nextq_btn_class">Next Question&nbsp;&#8594;</div>\
                <a href="results/" styles="justify-content:right;" class="results_href"><div class="results_inactive-btn">Results&nbsp;&#8594;</div></a>\
            </div>\
        </div>' + codeblockh +'</div>\
    <div class="quiz__window-abody">\
        <div class="quiz__window-abody_centre-cnt">\
            <div class="quiz__window-abody_option option_co4_o1" id="op1">\
                <div class="quiz__window-abody_option_num" style="color: #' + fontcolor + '; background-color: #' + color + '">1</div>\
                <div class="quiz__window-abody_option_txt">\
                ' + o1 + '\
                </div>\
            </div>\
            <div class="quiz__window-abody_option option_co4_o2" id="op2">\
                <div class="quiz__window-abody_option_num" style="color: #' + fontcolor + '; background-color: #' + color + '">2</div>\
                <div class="quiz__window-abody_option_txt">\
                ' + o2 + '\
                </div>\
            </div>\
            <div class="quiz__window-abody_option option_co4_o3" id="op3">\
                <div class="quiz__window-abody_option_num" style="color: #' + fontcolor + '; background-color: #' + color + '">3</div>\
                <div class="quiz__window-abody_option_txt">\
                ' + o3 + '\
                </div>\
            </div>\
            <div class="quiz__window-abody_option option_co4_o4" id="op4">\
                <div class="quiz__window-abody_option_num" style="color: #' + fontcolor + '; background-color: #' + color + '">4</div>\
                <div class="quiz__window-abody_option_txt">\
                ' + o4 + '\
                </div>\
            </div>\
        </div>\
    </div>');
    }
    ActivateAnswer();
};


//Activate answer
$('body').on('click', ".quiz__window-abody_option", function(){
    QuizOption = $('.quiz__window-abody_option');
    QuizOption.each(function(){
        $(this).removeClass('option_active')
    });
    $(this).addClass('option_active');
    AnswerBtn = $('.answer_btn_class');
    AnswerBtn.removeClass('answer_inactive-btn');
    AnswerBtn.addClass('quiz__window_qbody_answer');
});



//Activate answer with keyboard
$('body').on('keydown', function(event){
    if (event.which == 49) {
        QuizOption = $('.quiz__window-abody_option');
        QuizOption.each(function(){
            $(this).removeClass('option_active')
        });
        Option1 = $('.option_co4_o1');
        Option1.addClass('option_active');
        AnswerBtn = $('.answer_btn_class');
        AnswerBtn.removeClass('answer_inactive-btn');
        AnswerBtn.addClass('quiz__window_qbody_answer');
    }
});
$('body').on('keydown', function(event){
    if (event.which == 50) {
        QuizOption = $('.quiz__window-abody_option');
        QuizOption.each(function(){
            $(this).removeClass('option_active')
        });
        Option2 = $('.option_co4_o2');
        Option2.addClass('option_active');
        AnswerBtn = $('.answer_btn_class');
        AnswerBtn.removeClass('answer_inactive-btn');
        AnswerBtn.addClass('quiz__window_qbody_answer');
    }
});
$('body').on('keydown', function(event){
    if (event.which == 51) {
        QuizOption = $('.quiz__window-abody_option');
        QuizOption.each(function(){
            $(this).removeClass('option_active')
        });
        Option3 = $('.option_co4_o3');
        Option3.addClass('option_active');
        AnswerBtn = $('.answer_btn_class');
        AnswerBtn.removeClass('answer_inactive-btn');
        AnswerBtn.addClass('quiz__window_qbody_answer');
    }
});
$('body').on('keydown', function(event){
    if (event.which == 52) {
        QuizOption = $('.quiz__window-abody_option');
        QuizOption.each(function(){
            $(this).removeClass('option_active')
        });
        Option4 = $('.option_co4_o4');
        Option4.addClass('option_active');
        AnswerBtn = $('.answer_btn_class');
        AnswerBtn.removeClass('answer_inactive-btn');
        AnswerBtn.addClass('quiz__window_qbody_answer');
    }
});
//AnswerButtn 13 = key.which
//option 1
$('body').on('click','.answer_btn_class', function(){
    AnswerBtn = $('.answer_btn_class');
    if (AnswerBtn.hasClass('quiz__window_qbody_answer')) {
        QuizOption = $('.quiz__window-abody_option');
        NextButton = $('.nextq_inactive-btn');
        QuizOption.each(function(){
            if ($(this).hasClass('option_active')) {
                option_id = $(this).attr('id')
                console.log(option_id)
                qid = $('.quiz__window-qbody').attr('id')
                if (Counter < 10) {
                    $.ajax({
                        type: 'GET',
                        url: 'quizcheck/',
                        data: {
                            option_id: option_id,
                            qid: qid,
                        },
                        success: function(response) {
                            if (response.chosen) {
                                rightanswer_class = ('.option_co4_o' + response.right_answer);
                                wronganswer_class = ('.option_co4_o' + response.chosen);
                                rightanswer = $(rightanswer_class);
                                rightanswer.css('background-color', '#26D07C50');
                                rightanswer.addClass('option_right');
                                rightanswer.children('.quiz__window-abody_option_num').css('background-color', '#26D07C');
                                wronganswer = $(wronganswer_class);
                                wronganswer.removeClass('option_active');
                                wronganswer.css('background-color', '#EC3D3D50');
                                wronganswer.addClass('option_wrong');
                                wronganswer.children('.quiz__window-abody_option_num').css('background-color', '#EC3D3D');
                                AnswerBtn.css('display', 'none');
                                NextButton.css('display', 'flex');
                                RightAud.src = WSoundPath;
                                RightAud.autoplay = true;

                                $('.circle-current').removeClass('circle-current').addClass('circle-failed')
                            } else {
                                console.log(response)
                                rightanswer_class = '.option_co4_o' + response.right_answer
                                rightanswer = $(rightanswer_class);
                                rightanswer.removeClass('option_active');
                                rightanswer.css('background-color', '#26D07C50');
                                rightanswer.addClass('option_right');
                                rightanswer.children('.quiz__window-abody_option_num').css('background-color', '#26D07C');
                                AnswerBtn.css('display', 'none');
                                NextButton.css('display', 'flex');
                                RightAud.src = SSoundPath;
                                RightAud.autoplay = true;
                                $('.circle-current').removeClass('circle-current').addClass('circle-success')
                            }
                        }
                    });
                } else {
                    $.ajax({
                        type: 'GET',
                        url: 'quizcheck/',
                        data: {
                            option_id: option_id,
                            qid: qid,
                        },
                        success: function(response) {
                            if (response.chosen) {
                                rightanswer_class = ('.option_co4_o' + response.right_answer);
                                wronganswer_class = ('.option_co4_o' + response.chosen);
                                rightanswer = $(rightanswer_class);
                                rightanswer.css('background-color', '#26D07C50');
                                rightanswer.addClass('option_right');
                                rightanswer.children('.quiz__window-abody_option_num').css('background-color', '#26D07C');
                                wronganswer = $(wronganswer_class);
                                wronganswer.removeClass('option_active');
                                wronganswer.css('background-color', '#EC3D3D50');
                                wronganswer.addClass('option_wrong');
                                wronganswer.children('.quiz__window-abody_option_num').css('background-color', '#EC3D3D');
                                AnswerBtn.css('display', 'none');
                                $('.results_href').css('display', 'flex');
                                $('.results_inactive-btn').css('display', 'flex');

                                $('.circle-current').removeClass('circle-current').addClass('circle-failed')
                            } else {
                                console.log(response)
                                rightanswer_class = '.option_co4_o' + response.right_answer
                                rightanswer = $(rightanswer_class);
                                rightanswer.removeClass('option_active');
                                rightanswer.css('background-color', '#26D07C50');
                                rightanswer.addClass('option_right');
                                rightanswer.children('.quiz__window-abody_option_num').css('background-color', '#26D07C');
                                AnswerBtn.css('display', 'none');
                                $('.results_href').css('display', 'flex');
                                $('.results_inactive-btn').css('display', 'flex');
                                $('.circle-current').removeClass('circle-current').addClass('circle-success')
                            }
                        }
                    });
                }
            }
        });
    }
});

//2 option

$('body').on('keydown', function(event){
    if (event.which == 13 | event.which == 32) {
        AnswerBtn = $('.answer_btn_class');
        if (AnswerBtn.hasClass('quiz__window_qbody_answer')) {
            QuizOption = $('.quiz__window-abody_option');
            NextButton = $('.nextq_inactive-btn');
            QuizOption.each(function(){
                if ($(this).hasClass('option_active')) {
                    option_id = $(this).attr('id')
                    console.log(option_id)
                    qid = $('.quiz__window-qbody').attr('id')
                    if (Counter < 10) {
                        $.ajax({
                            type: 'GET',
                            url: 'quizcheck/',
                            data: {
                                option_id: option_id,
                                qid: qid,
                            },
                            success: function(response) {
                                if (response.chosen) {
                                    rightanswer_class = ('.option_co4_o' + response.right_answer);
                                    wronganswer_class = ('.option_co4_o' + response.chosen);
                                    rightanswer = $(rightanswer_class);
                                    rightanswer.css('background-color', '#26D07C50');
                                    rightanswer.addClass('option_right');
                                    rightanswer.children('.quiz__window-abody_option_num').css('background-color', '#26D07C');
                                    wronganswer = $(wronganswer_class);
                                    wronganswer.removeClass('option_active');
                                    wronganswer.css('background-color', '#EC3D3D50');
                                    wronganswer.addClass('option_wrong');
                                    wronganswer.children('.quiz__window-abody_option_num').css('background-color', '#EC3D3D');
                                    AnswerBtn.css('display', 'none');
                                    NextButton.css('display', 'flex');
                                    RightAud.src = WSoundPath;
                                    RightAud.autoplay = true;

                                    $('.circle-current').removeClass('circle-current').addClass('circle-failed')
                                } else {
                                    console.log(response)
                                    rightanswer_class = '.option_co4_o' + response.right_answer
                                    rightanswer = $(rightanswer_class);
                                    rightanswer.removeClass('option_active');
                                    rightanswer.css('background-color', '#26D07C50');
                                    rightanswer.addClass('option_right');
                                    rightanswer.children('.quiz__window-abody_option_num').css('background-color', '#26D07C');
                                    AnswerBtn.css('display', 'none');
                                    NextButton.css('display', 'flex');
                                    RightAud.src = SSoundPath;
                                    RightAud.autoplay = true;
                                    $('.circle-current').removeClass('circle-current').addClass('circle-success')
                                }
                            }
                        });
                    } else {
                        $.ajax({
                            type: 'GET',
                            url: 'quizcheck/',
                            data: {
                                option_id: option_id,
                                qid: qid,
                            },
                            success: function(response) {
                                if (response.chosen) {
                                    rightanswer_class = ('.option_co4_o' + response.right_answer);
                                    wronganswer_class = ('.option_co4_o' + response.chosen);
                                    rightanswer = $(rightanswer_class);
                                    rightanswer.css('background-color', '#26D07C50');
                                    rightanswer.addClass('option_right');
                                    rightanswer.children('.quiz__window-abody_option_num').css('background-color', '#26D07C');
                                    wronganswer = $(wronganswer_class);
                                    wronganswer.removeClass('option_active');
                                    wronganswer.css('background-color', '#EC3D3D50');
                                    wronganswer.addClass('option_wrong');
                                    wronganswer.children('.quiz__window-abody_option_num').css('background-color', '#EC3D3D');
                                    AnswerBtn.css('display', 'none');
                                    $('.results_href').css('display', 'flex');
                                    $('.results_inactive-btn').css('display', 'flex');

                                    $('.circle-current').removeClass('circle-current').addClass('circle-failed')
                                } else {
                                    console.log(response)
                                    rightanswer_class = '.option_co4_o' + response.right_answer
                                    rightanswer = $(rightanswer_class);
                                    rightanswer.removeClass('option_active');
                                    rightanswer.css('background-color', '#26D07C50');
                                    rightanswer.addClass('option_right');
                                    rightanswer.children('.quiz__window-abody_option_num').css('background-color', '#26D07C');
                                    AnswerBtn.css('display', 'none');
                                    $('.results_href').css('display', 'flex');
                                    $('.results_inactive-btn').css('display', 'flex');
                                    $('.circle-current').removeClass('circle-current').addClass('circle-success')
                                }
                            }
                        });
                    }
                }
            });
        }
    }
});

//Next button:
// 1 option

$('body').on('click', '.nextq_inactive-btn', function(){
    Counter = Counter + 1;
    // $('.quiz__card_1').css('display', 'none');
    // $('.quiz__card_2').css('display', 'block');

    if (Counter < 11) {
        $.ajax({
            type: 'GET',
            url: 'nexttask/',
            data: {
                counter: Counter,
            },
            success: function(response) {
                qtype = response.quiztype;
                q = response.question;
                o1 = response.o1;
                o2 = response.o2;
                o3 = response.o3;
                o4 = response.o4;
                color = response.color;
                fontcolor = response.fontcolor;
                id = response.id;
                complexity = response.complexity;
                code = response.code;
                $('.qcounter').text(Counter);
                ProgressCircle = $('.progress-circle');
                ProgressCircle.eq(Counter - 1).removeClass('circle-future').addClass('circle-current');
                $('.quiz__window-qbody').remove();
                $('.quiz__window-abody').remove();
                UpdateCard(qtype, q, color, fontcolor, o1, o2, o3, o4, complexity, id, code);
            }
        });
    } else {
        
    }

});


//2 option

$('body').on('keydown', function(event){
    if (event.which == 13 | event.which == 32) {
        if ($('.nextq_inactive-btn').css('display') == 'flex' & $('.answer_btn_class').css('display') == 'none') {
            Counter = Counter + 1;
            if (Counter < 11) {
                $.ajax({
                    type: 'GET',
                    url: 'nexttask/',
                    data: {
                        counter: Counter,
                    },
                    success: function(response) {
                        qtype = response.quiztype;
                        q = response.question;
                        o1 = response.o1;
                        o2 = response.o2;
                        o3 = response.o3;
                        o4 = response.o4;
                        color = response.color;
                        fontcolor = response.fontcolor;
                        id = response.id;
                        complexity = response.complexity;
                        code = response.code;
                        $('.qcounter').text(Counter);
                        ProgressCircle = $('.progress-circle');
                        ProgressCircle.eq(Counter - 1).removeClass('circle-future').addClass('circle-current');
                        $('.quiz__window-qbody').remove();
                        $('.quiz__window-abody').remove();
                        UpdateCard(qtype, q, color, fontcolor, o1, o2, o3, o4, complexity, id, code);
                    }
                });
            } else {
                
            }
        }
    }
});


// Exit button
// 1 option
ExitBtn.on('click', function(){
    if (ExitBtn.text() != 'Sure?') {
        ExitBtn.text('Sure?');
    } else {
        $(location).attr('href','../');
    }
});
// 2 option
ExitBtn.on('keydown', function(event){
    if (which.event == 27) {
        if (ExitBtn.text() != 'Sure?') {
            ExitBtn.text('Sure?');
        } else {
            $(location).attr('href','../');
        }
    }
});

//Code option
$('body').on('click', '.quiz__op_code', function(){
    if ($('.quiz__codepart').css('display') == 'none') {
        $('.quiz__codepart').css('display', 'flex');
        $('.quiz__window-qbody-centre').css('display', 'none');
    } else {
        $('.quiz__codepart').css('display', 'none');
        $('.quiz__window-qbody-centre').css('display', 'flex');
    }
});

});