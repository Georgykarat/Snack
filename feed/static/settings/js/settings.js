$(function(){

var GmtBttn = $('.gmt-symbol');
var SaveSettingsBtn = $('#savesettings');
var ChangePassBtn = $('#changepass');
var p1 = $('.pass-1');
var p2 = $('.pass-2');
var p3 = $('.pass-3');
var deletebtn = $('#delete-acc');
var NonActiveBtn = $('.left-menu-items');

GmtBttn.on('click', function(){
    if (GmtBttn.text() == '+') {
        GmtBttn.text('-');
    } else {
        GmtBttn.text('+');
    }
});

SaveSettingsBtn.on('click', function(){
    var login = $('#username').val();
    $.ajax({
        type: 'POST',
        url: 'savesettings/',
        data: {
            flag: 'a',
            csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
            login: $('#username').val(),
            name: $('#firstname').val(),
            surname: $('#lastname').val(),
            country: $('#id_country').val(),
            occupation: $('#occupation').val(),
            timezonesign: $('#timesign').text(),
            timezone: $('#timevalue').val()
        },
        success: function(data) {
        }
    });

});

ChangePassBtn.on('click', function(){
    if ((p1.val() != '') && (p2.val() != '') && (p3.val() != '')) {
        if (p2.val() == p3.val()) {
            $.ajax({
                type: 'POST',
                url: 'changepass/',
                data: {
                    csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
                    p1: p1.val(),
                    p2: p2.val(),
                    p3: p3.val()
                },
                success: function(data) {
                }
            });
        } else {
            alert('New passwords do not match each other')
        }
    } else {
        alert('Fill all password fields!')
    }
});

deletebtn.on('click', function(){

    var code_to_delete = $('.deletionkeyword').text();
    var user_code_inputed = $('.#delete_input').val();
    if (code_to_delete == user_code_inputed) {
        $.ajax({
            type: 'POST',
            url: 'deleteacc/',
            data: {
                csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
                deletecode: $('.deletionkeyword').text(),
            },
            success: function(data) {
            }
        });
    } else {
        $('.#delete_input').val('Wrong code');
    }


});

NonActiveBtn.hover(function(){

});


});