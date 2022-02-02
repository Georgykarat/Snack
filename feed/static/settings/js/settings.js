

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

NonActiveBtn.mouseover(function(){
    $(this).children('.noactive-btn').animate({
        backgroundColor: "#26D07C"
    }, 200, function() {
        $(this).children('.noactive-btn').css('background-color', '#26D07C');
    });
});
NonActiveBtn.mouseleave(function(){
    $(this).children('.noactive-btn').animate({
        backgroundColor: "#E0E0E0"
    }, 100, function() {
        $(this).children('.noactive-btn').css('background-color', '#E0E0E0');
    });
});

/* Mobile options */

var MobileMenuButtonIn = $('.header__menu__mobile');
    var MobileMenu = $('.main__central_mobile-menu');
    var LogOutButtonAbove = $('.header__logout_mobile');
    var DropDownSettingsHeader = $('.mobile__settings-list-dropdown');
    var DropDownItself = $('.mobile__settings-list-dropdown-itself');
    var SettingsOption1 = $('.mobile__settings-list-dropdown-option1');
    var SettingsOption2 = $('.mobile__settings-list-dropdown-option2');
    var SettingsOption3 = $('.mobile__settings-list-dropdown-option3');

    var SettingsHeader = $('.h3__profile-settings-header__settings');
    var SettingsCnt = $('#profile-settings-id-cnt');
    var ChangePassCnt = $('#change-pass__cnt');
    var DeletePassCnt = $('#deleteacc__form');
    var PhotoCnt = $('.mobile__photo-form');



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

    DropDownSettingsHeader.on('click', function(){
        if (DropDownItself.css('height') == '0px') {
            DropDownItself.animate({height: '150px'}, 250, function(){
                SettingsOption1.fadeIn();
                SettingsOption2.fadeIn();
                SettingsOption3.fadeIn();
                DropDownItself.css('background-image', "url('../img/arrowup.svg')")
            });
        } else {
            SettingsOption1.fadeOut(100);
            SettingsOption2.fadeOut(100);
            SettingsOption3.fadeOut(100);
            DropDownItself.animate({height: '0px'}, 250);
            DropDownItself.css('background-image', "url('../img/arrowup.svg')")
        }
    });
    SettingsOption1.on('click', function(){
        if (DropDownSettingsHeader.text() == 'Profile settings') {
            SettingsCnt.css('display', 'none');
            PhotoCnt.css('display', 'flex');
            DropDownSettingsHeader.text('Change photo');
            SettingsOption1.text('Profile settings');
        } else if (DropDownSettingsHeader.text() == 'Change password') {
            SettingsCnt.css('display', 'flex');
            ChangePassCnt.css('display', 'none');
            DropDownSettingsHeader.text('Profile settings');
            SettingsOption1.text('Change password');
        } else if (DropDownSettingsHeader.text() == 'Delete account') {
            SettingsCnt.css('display', 'flex');
            DeletePassCnt.css('display', 'none');
            DropDownSettingsHeader.text('Profile settings');
            SettingsOption1.text('Delete account');
        } else if (DropDownSettingsHeader.text() == 'Change photo') {
            SettingsCnt.css('display', 'flex');
            PhotoCnt.css('display', 'none');
            DropDownSettingsHeader.text('Profile settings');
            SettingsOption1.text('Change photo');
        }
    });
    SettingsOption2.on('click', function(){
        if (DropDownSettingsHeader.text() == 'Profile settings') {
            SettingsCnt.css('display', 'none');
            ChangePassCnt.css('display', 'flex');
            DropDownSettingsHeader.text('Change password');
            SettingsOption2.text('Profile settings');
        } else if (DropDownSettingsHeader.text() == 'Change password') {
            SettingsCnt.css('display', 'flex');
            ChangePassCnt.css('display', 'none');
            DropDownSettingsHeader.text('Profile settings');
            SettingsOption2.text('Change password');
        } else if (DropDownSettingsHeader.text() == 'Delete account') {
            ChangePassCnt.css('display', 'flex');
            DeletePassCnt.css('display', 'none');
            DropDownSettingsHeader.text('Change password');
            SettingsOption2.text('Delete account');
        } else if (DropDownSettingsHeader.text() == 'Change photo') {
            ChangePassCnt.css('display', 'flex');
            PhotoCnt.css('display', 'none');
            DropDownSettingsHeader.text('Change password');
            SettingsOption2.text('Change photo');
        }
    });
    SettingsOption3.on('click', function(){
        if (DropDownSettingsHeader.text() == 'Profile settings') {
            SettingsCnt.css('display', 'none');
            DeletePassCnt.css('display', 'flex');
            DropDownSettingsHeader.text('Delete account');
            SettingsOption3.text('Profile settings');
        } else if (DropDownSettingsHeader.text() == 'Delete account') {
            SettingsCnt.css('display', 'flex');
            DeletePassCnt.css('display', 'none');
            DropDownSettingsHeader.text('Profile settings');
            SettingsOption3.text('Delete account');
        } else if (DropDownSettingsHeader.text() == 'Change password') {
            DeletePassCnt.css('display', 'flex');
            ChangePassCnt.css('display', 'none');
            DropDownSettingsHeader.text('Delete account');
            SettingsOption3.text('Change password');
        }
    });


});
