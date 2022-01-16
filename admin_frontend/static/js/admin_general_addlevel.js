$(function(){

var RatingIDField = $('.admin__panel_addlevel_rid');
var SubmitButton = $('.admin__panel-addlevel-btn');

SubmitButton.on('click', function(){
    $.ajax({
        type: 'POST',
        url: 'add/',
        data: {
            csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
            l0pass: $('.l0-card-check-input').val(),
            levelid: $('.admin__panel_addlevel_rid').val(),
            material: $('.admin__panel_addlevel_rm').val(),
            xp: $('.admin__panel_addlevel_xp').val(),
            //badge: $('.admin__panel_addlevel_badge').prop('files')[0],
        },
        success: function(data) {
        }
    });
});

});