$(function(){ 

var FirstButton = $('.reg__button1');
var SecondButton = $('.reg__button2');
var FirstFormCnt = $('.register__form_1');
var SecondFormCnt = $('.register__form_2');
var ThirdFormCnt = $('.register__form_3');
var Password = $('.pass-f');
var Mail = $('.mail-f');
var ConfirmPassword = $('.confirmpass-f');
var TempCode = $('.temp-code-f');
var OneMoreCode = $('.send-one-more-code');
var Name = $('.reg__input_name');
var Surname = $('.reg__input_surname');
var Country = $('.dropdown');
var Occupation = $('.reg__input_occupation');
var InviteCode = $('.input__invite_code__reg');


// First phase 

FirstButton.on('click', function(){
    pass = Password.val();
    ourmail = $('.mail-f').val();
    if (Mail.val() != "" && Password.val() != "" && ConfirmPassword.val() != "" && Password.val() == ConfirmPassword.val() && $('.mail-f').val().indexOf('@') != -1 && (!/^[a-z0-9]+$/.test(pass) == true) && ( !/^[A-Z0-9]+$/.test(pass) == true) && ( !/^[A-Za-z]+$/.test(pass) == true) && ( pass.length >= 8) && ($('input[type="checkbox"]').prop("checked") == true)) {
        FirstButton.text('Please wait...')
        $.ajax({
            type: 'POST',
            url: 'generatepass/',
            data: {
                csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
                mail: ourmail,
            },
            success: function() {
                FirstFormCnt.css('display', 'none');
                SecondFormCnt.css('display', 'flex');
            }
        });
    } else if (($('input[type="checkbox"]').prop("checked") != true)) {
        $('.you-agree-terms-policy__text').css('color', 'red');
    }
});

//  Second Phase
TempCode.on('keyup', function(){
    //var codetouse = 1234
    if (TempCode.val().length = 8) {
        $.ajax({
            type: 'POST',
            url: 'createacc/',
            data: {
                csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
                mail: Mail.val(),
                ourcode: TempCode.val(),
                password: Password.val(),
            },
            success: function(data) {
                $('.reg__button3').css('display', 'flex')
            }
        });
    }
});
// Button to show
ThirdFormCnt.on('keyup', function(){
    if (Name.val() != "" && Surname.val() != "" && $('.dropdown option:selected').text() != "" && Occupation.val() != "") {
        SecondButton.css('display', 'flex');
    } else {
        SecondButton.css('display', 'none');
    }
});
$('.dropdown').on('mouseout', function(){
    if (Name.val() != "" && Surname.val() != "" && $('.dropdown option:selected').text() != "" && Occupation.val() != "") {
        SecondButton.css('display', 'flex');
    } else {
        SecondButton.css('display', 'none');
    }
});
// Send one more code
OneMoreCode.on('click', function(){
    if (OneMoreCode.text() != "New code was sent") {
        ourmail = Mail.val();
        if (Mail.val() != "" && Password.val() != "" && ConfirmPassword.val() != "" && Password.val() == ConfirmPassword.val() && $('.mail-f').val().indexOf('@') != -1 && (!/^[a-z0-9]+$/.test(pass) == true) && ( !/^[A-Z0-9]+$/.test(pass) == true) && ( !/^[A-Za-z]+$/.test(pass) == true) && ( pass.length >= 8) && ($('input[type="checkbox"]').prop("checked") == true)) {
            $.ajax({
                type: 'POST',
                url: 'generatepass/',
                data: {
                    csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
                    mail: ourmail,
                },
                success: function() {
                    OneMoreCode.text('New code was sent');
                },
                error: function() {
                    $('.reg__code_label').text('Wrong code');
                    $('.reg__code_label').css('color', 'red');
                }
            });
        }
}});
// Create feed

SecondButton.on('click', function(){
    if (Name.val() != "" && Surname.val() != "" && $('.dropdown option:selected').text() != "" && Occupation.val() != "") {
        $.ajax({
            type: 'POST',
            url: 'createaccfeed/',
            data: {
                csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
                name: Name.val(),
                surname: Surname.val(),
                country: $('.dropdown option:selected').text(),
                occupation: Occupation.val(),
                invite: InviteCode.val(),
            },
            success: function() {
                window.location.href = '/feed/'
            },
            error: function() {},
        });
    } else {
        if (Name.val() == "") {
            Name.css('border', '1px solid red');
        }
        if (Surname.val() == "") {
            Surname.css('border', '1px solid red');
        }
        if ($('.dropdown option:selected').text() == "") {
            Country.css('border', '1px solid red');
        }
        if (Occupation.val() == "") {
            Occupation.css('border', '1px solid red');
        }
    }
});

// ($('input[type="checkbox"]').prop("checked") == true)
//Invite code window

$('.invite__code-option').on('click', function(){
    if ($('.invite__reg-block').css('display') == 'none') {
        $('.invite__reg-block').css('display', 'flex');
    } else {
        $('.invite__reg-block').css('display', 'none');
    }
});

//Mail check

$('.mail-f').on('keyup', function(){
	var mail;
	mail = $('.mail-f').val();
	if ((mail.indexOf('@') == -1) && (mail == ""))  {
		$('.mail-f').css('border-color','red');
		mail = $('.mail-f').val();
	} else {
		$('.mail-f').css('border-color','#27cf7f');
		mail = $('.mail-f').val();
	}
});

// Password validation with ticks

$('.pass-f').on('keydown', function(){
	var pass;
	pass = $('.pass-f').val();
});

$('.pass-f').on('keyup', function(){
	var pass;
	pass = $('.pass-f').val();
	if ((!/^[a-z0-9]+$/.test(pass) == true) && (pass != "")) {
		$('.tick-one').css('display','inline');
		$('.check-one').css('display','none');
		var tick_one = true;
	} else {
		$('.tick-one').css('display','none');
		$('.check-one').css('display','inline');
		var tick_one = false;
	}
});
$('.pass-f').on('keyup', function(){
	var pass;
	pass = $('.pass-f').val();
	if (( !/^[A-Z0-9]+$/.test(pass) == true) && (pass != ""))  {
		$('.tick-three').css('display','inline');
		$('.check-three').css('display','none');
		var tick_two = true;
	} else {
		$('.tick-three').css('display','none');
		$('.check-three').css('display','inline');
		var tick_two = false;
	}
});
$('.pass-f').on('keyup', function(){
	var pass;
	pass = $('.pass-f').val();
	if (( !/^[A-Za-z]+$/.test(pass) == true) && (pass != ""))  {
		$('.tick-two').css('display','inline');
		$('.check-two').css('display','none');
		var tick_three = true;
	} else {
		$('.tick-two').css('display','none');
		$('.check-two').css('display','inline');
		var tick_three = false;
	}	
});
$('.pass-f').on('keyup', function(){
	var pass;
	pass = $('.pass-f').val();
	if ( pass.length >= 8)  {
		$('.tick-four').css('display','inline');
		$('.check-four').css('display','none');
		var tick_four = true;
	} else {
		$('.tick-four').css('display','none');
		$('.check-four').css('display','inline');
		var tick_four = false;
	}	
});


//Password border validation
$('body').on('keyup',function(){
	var pass_code;
	pass_code = $('.pass-f').val();

	if ((!/^[a-z0-9]+$/.test(pass_code) == true) && (!/^[A-Z0-9]+$/.test(pass_code) == true) && ( !/^[A-Za-z]+$/.test(pass_code) == true) && (pass_code.length >= 8) && (pass_code != "")) {
		$('.pass-f').css('border-color','#27cf7f');
	} else {
		$('.pass-f').css('border', '1px solid red');
	}
});
// Confirm password border validation

$('body').on('keyup',function(){
	let pass_code = $('.pass-f').val();
    let confirmpass_code = $('.confirmpass-f').val();
    if (pass_code == confirmpass_code && confirmpass_code != "") {
        $('.confirmpass-f').css('border', '1px solid #27cf7f');
    } else {
        $('.confirmpass-f').css('border', '1px solid red');
    }
	
});

});