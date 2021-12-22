$(function(){

var GmtBttn = $('.gmt-symbol');
var SaveSettingsBtn = $('.savesettings');

GmtBttn.on('click', function(){
    if (GmtBttn.text() == '+') {
        GmtBttn.text('-');
    } else {
        GmtBttn.text('+');
    }
});


SaveSettingsBtn.on('click', function(){
    $.ajax({
        url: 'savesettings/',
        type: 'POST',
        data: {
            flag: 'a',
            login: $('#username').val(),
            name: $('#firstname').val(),
            surname: $('#lastname').val(),
            country: $('#id_country').val(),
            occupation: $('#occupation').val(),
            timezonesign: $('#timesign').text(),
            timezone: $('#timevalue').val()
        },
        success: function(response) {
            
        }
    });

});


});