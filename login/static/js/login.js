$(function(){ 

var GetPass = $('.getpass');
var PassReset = $('.resetpass')


GetPass.on('click', function(){
    var ourmail = $('.ourmail').val()
    if (ourmail != "") {
        $.ajax({
            type: 'POST',
            url: 'resetpass/',
            data: {
                csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
                resetmail: ourmail
            },
            success: function(data) {
                
            }
        });
        GetPass.css('color', 'grey');
        GetPass.text('Send one more code');
        $('.ourmail').css("border", "none");
        $('.ourmail').prop('disabled', true)
    }
    else {
        $('.ourmail').css("border", "solid 2px red");
    }
});

PassReset.on('click', function(){
    var ourmail = $('.ourmail').val()
    var regcode = $('.ourmail2').val()
    if (regcode != "") {
        $.ajax({
            type: 'POST',
            url: 'getnewpass/',
            data: {
                csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
                resetmail: ourmail,
                regcode: regcode
            },
            success: function(data) { 
            }
        });
        $('.ourmail').css("border", "none");
        $('.loginhref').css('display', "flex");
    } else {
        $('.ourmail2').css("border", "solid 2px red");
    }
});


$('.forgot-pass').on('click', function(){
    $('.login-view').css('display', 'none');
    $('.reset-view').css('display', 'flex');
    $('.dont-yet-have-acc').css('display', 'none');
    $('.main-cnt-login__greetings_header2').text('Forgot your password?');


});


});