$(function(){ 

var GetPass = $('.getpass');

GetPass.click(function(){
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
                GetPass.css('color', 'grey');
            }
        });
    }
});

});