$(function(){

	var regbtn = $('#submitbeforereg');
	/* set initial time to hidden timer */

	var step = 1;
	var sec = 59;
	var min = 00;
	var timerf = 1;


		/* animated scroll
		$('body').animate({
			scrollTop:1000,
		},700); */

	/* third step*/
	/* validator */
	$('.create-acc-password2').on('click', function(e){
		e.preventDefault();
		if (($('.first-name').val() !== "") && ($('.second-name').val() !== "") && ($('#dropdown option:selected').text() !== 'Where are you from?') && ($('input[type="checkbox"]').prop("checked") == true)) {
			var step = 3;
			$('.popup-cnt').fadeIn(400);
			$('.popup-cnt').css('display','flex');
			$('#number-box-one').trigger('focus');
			$('.two').css('display','none');
			$('.tick-2').css('display','inline');
			$('.second-line').css('stroke','#27cf7f');
			$('.third-circle-t').css('display','inline');
			$('.three').css('display','inline');

			var timerf = 1;
			setTimeout(timer,1000);
		}
		if ($('.first-name').val() == "") {
			$('.first-name').css('border','1px solid red');
		}
		else {
			$('.first-name').css('border','1px solid #27cf7f');
		}
		if ($('.second-name').val() == "") {
			$('.second-name').css('border','1px solid red');
		}
		else {
			$('.second-name').css('border','1px solid #27cf7f');
		}
		if ($('#id_country option:selected').text() == 'Where are you from?') {
			$('#id_country').css('border','1px solid red');
			$('.select-cnt__flag').css('border','1px solid red');
		} else {
			$('#id_country').css('border','1px solid #27cf7f');
			$('.select-cnt__flag').css('border','1px solid #27cf7f');
		}
		if ($('input[type="checkbox"]').prop("checked") == false) {
			$('.rights-text').css('color','red');
		} else {
			$('.rights-text').css('color','#27cf7f');
		}
	});

/* timer */
	function timer(){
		if (timerf = 1) {	
			var obj=document.getElementById('seconds');
			obj.innerHTML--;
	 		if(obj.innerHTML==0){
	 			$('.popup-cnt').fadeOut(400);
	 			$('#number-box-one').text('');
				$('#number-box-two').text('');
				$('#number-box-three').text('');	
				$('#number-box-four').text('');
	 			$('.seconds').text('59');
	 			setTimeout(function(){},1000);}
	 		else {setTimeout(timer,1000);}
	 	} else {
	 		return false;
	 	}
	}


/* Stores pass value to var*/
	$('.pass-f').on('keydown', function(){
		var pass;
		pass = $('.pass-f').val();
	});

/* Password symbols check system  */
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
	$('.pass-f').on('keyup', function(){
		if (tick_one == true && tick_two == true && tick_three == true && tick_four == true) {
			$('.pass-f').css('border-color','#27cf7f');
		}
	});
/* focus trigger in boxes with numbers */
	/*
	$('#number-box-one').on('keyup', function(event){
		if (event.which == 8) {
			return false;
		} else {
			$('#number-box-two').trigger('focus');
		}
		var box_one = $('#number-box-one').val();
	});
	$('#number-box-two').on('keyup', function(event){
		if (event.which == 8) {
			$('#number-box-one').trigger('focus');
			if ($('#number-box-two').val() != "") {
				$('#number-box-one').text("");
			}
		} else {
			$('#number-box-three').trigger('focus');
		}
		var box_two = $('#number-box-two').val();
	});
	$('#number-box-three').on('keyup', function(event){
		if (event.which == 8) {
			$('#number-box-two').trigger('focus');
		} else {
			$('#number-box-four').trigger('focus');
		}
		var box_three = $('#number-box-three').val();
	});
	$('#number-box-four').on('keyup', function(event){
		if (event.which == 8) {
			$('#number-box-three').trigger('focus');
		} else {
			var box_one = $('#number-box-one').val();
			var box_two = $('#number-box-two').val();
			var box_three = $('#number-box-three').val();	
			var box_four = $('#number-box-four').val();
			
			var aim_one = 1;
			var aim_two = 4;
			var aim_three = 8;
			var aim_four = 8;
			if (box_one == aim_one && box_two == aim_two && box_three == aim_three && box_four == aim_four) {
				$('.number-box').css('border-color','#27cf7f');
				$('.popup-window').trigger('focus');
				Congrats();
			} else {
				$('.number-box').css('border-color','red');
			}
		}
	});
	*/
	/*Escape 27 which event off popup */

	$('body').on('keyup', function(event){
		if (event.which == 27) {
			$('.number-box').val('');
			$('.number-box').css('border-color','#cbcdcc');
			$('.popup-cnt').fadeOut(100);
			$('.popup-cnt').css('display','none');
			var timerf = 2;
			$('.seconds').text('0');
			$('.seconds').text('1');
		}
	});
	$('.popup-cnt').on('click', function(){
		$('.number-box').val('');
		$('.number-box').css('border-color','#cbcdcc');
		$('.popup-cnt').fadeOut(100);
		$('.popup-cnt').css('display','none');
		var timerf = 2;
		$('.seconds').text('0');
		$('.seconds').text('1');
	});
/*
	const Congrats = function() {
		$('.confirm-button-code').val('Confirm');
		$('.popup-text').fadeOut(10);
		$('.cnt-for-numbers').fadeOut(10);
		$('#timer-cnt').fadeOut(10);
		$('.confirm-button-code').fadeOut(10);
		$('.svg-fadein').fadeIn(400);
		$('.confirm-button-code2').fadeIn(400);
		$('.Success-text').fadeIn(400);
		$('.Verified').fadeIn(400);
		$('.Enjoy').fadeIn(400);
	};
*/
/* Colors border of name field in red in case of symbol absence */
	$('.first-name').on('keyup', function(){
		if ($('first-name').val() != "") {
			$('.first-name').css('border','1px solid #27cf7f');
		} else {
			$('.first-name').css('border','1px solid red');
		}
	});
/* Colors border of second name field in red in case of symbol absence */	
	$('.second-name').on('keyup', function(){
		if ($('second-name').val() != "") {
			$('.second-name').css('border','1px solid #27cf7f');
		} else {
			$('.second-name').css('border','1px solid red');
		}
	})


	/* Confirm password */
	$('.confirm-password').on('click',function(){
		$('.confirm-password').css('display','none');
		$('.confirm-password2').css('display','block');
		$('.confirm-password2').trigger('focus');
	});
	$('.confirm-password2').on('keyup',function(){
		if ($('.pass-f').val() == $('.confirm-password2').val() && ($('.confirm-password2').val() != "")) {
			$('.tick-pass').css('display','inline');
			$('.create-acc-password').css('margin-top','0');
			$('.confirm-password2').css('border','1px solid #27cf7f');
		} else {
			$('.tick-pass').css('display','none');
			$('.create-acc-password').css('margin-top','10px');
			$('.confirm-password2').css('border','1px solid red');
		}
	});
	$('.pass-f').on('keyup',function(){
		if ($('.pass-f').val() == $('.confirm-password2').val() && ($('.confirm-password2').val() != "")) {
			$('.tick-pass').css('display','inline');
			$('.create-acc-password').css('margin-top','0');
			$('.confirm-password2').css('border','1px solid #27cf7f');
		} else {
			$('.tick-pass').css('display','none');
			$('.create-acc-password').css('margin-top','10px');
			$('.confirm-password2').css('border','1px solid red');
		}
	});
//-->
	
	$('.create-acc-password').on('click', function(){	
		var step = 2;
		$('.first-line').css('stroke','#27cf7f');
		$('.second-circle-t').css('display','inline');
		$('.two').css('display','inline');
		$('.one').css('display','none');
		$('.tick-1').css('display','inline');
		$('#text-cnt').css('display','none');
		$('.form-cnt').css('display','none');
		$('.text-cnt2').css('display','block');
		$('.form2').css('display','flex');
		$('.create-acc-password2').css('display','block');

	});

	/* Password visible or not */
	$('.visible').on('click',function(){
		var type = $('pass-f').attr('type') == "text" ? "password" : 'text',
        c = $(this).text();
        $(this).text(c);
        $('.pass-f').prop('type', type);
        $('.visible').css('display','none');
        $('.unvisible').css('display','inline-block');
	});
	$('.unvisible').on('click',function(){
		var type = $('pass-f').attr('type') == "password" ? "text" : 'password',
        c = $(this).text();
        $(this).text(c);
        $('.pass-f').prop('type', type);
        $('.visible').css('display','inline-block');
        $('.unvisible').css('display','none');
	});
	/* Mail check */
	$('.mail-f').on('keyup', function(){
		var mail;
		mail = $('.mail-f').val();
		if ((mail.indexOf('@') == -1) && (mail != ""))  {
			$('.mail-f').css('border-color','red');
			mail = $('.mail-f').val();
		} else {
			$('.mail-f').css('border-color','#27cf7f');
			mail = $('.mail-f').val();
		}
	});
	/* Availability proceed check */
	$('body').on('keyup', function(){
		var pass_code1;
		pass_code1 = $('.pass-f').val();
		var mail;
		mail = $('.mail-f').val();	
		if ((!/^[a-z0-9]+$/.test(pass_code1) == true) && (!/^[A-Z0-9]+$/.test(pass_code1) == true) && ( !/^[A-Za-z]+$/.test(pass_code1) == true) && (pass_code1.length >= 8) && (pass_code1 != "") && (mail.indexOf('@') != -1) && (mail != "") && ($('.pass-f').val() == $('.confirm-password2').val()) && ($('.confirm-password2').val() != "")) {
			$('.create-acc-password').css('background-color','#27cf7f');
			$('.create-acc-password').css('border','1px solid #27cf7f');
			document.getElementById('create-acc-password').removeAttribute("disabled");
		} else {
			$('.create-acc-password').css('background-color','lightgrey');
			$('.create-acc-password').css('border','1px solid lightgrey');
			document.getElementById('create-acc-password').setAttribute("disabled");
		}
	});
	/* Valid password border */
	$('body').on('keyup',function(){
		var pass_code;
		pass_code = $('.pass-f').val();

		if ((!/^[a-z0-9]+$/.test(pass_code) == true) && (!/^[A-Z0-9]+$/.test(pass_code) == true) && ( !/^[A-Za-z]+$/.test(pass_code) == true) && (pass_code.length >= 8) && (pass_code != "")) {
			$('.pass-f').css('border-color','#27cf7f');
		} else {
			$('.pass-f').css('border', '1px solid red');
		}
	});

	/* Personal data confirmation, butt activation */


	/* Form validator */
	/* Slider */
	var mySwiper = new Swiper ('.swiper-container', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
	
		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		},
	
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		autoplay: {
		  delay: 5000,
		}
	
	  });


		
		const Congrats = function() {
			$('.confirm-button-code').val('Confirm');
			$('.popup-text').fadeOut(10);
			$('.cnt-for-numbers').fadeOut(10);
			$('#timer-cnt').fadeOut(10);
			$('.confirm-button-code').fadeOut(10);
			$('.svg-fadein').fadeIn(400);
			$('.confirm-button-code2').fadeIn(400);
			$('.Success-text').fadeIn(400);
			$('.Verified').fadeIn(400);
			$('.Enjoy').fadeIn(400);
		};
	
				$('#number-box-one').on('keyup', function(event){
				if (event.which == 8) {
					return false;
				} else {
					$('#number-box-two').trigger('focus');
				}
				var box_one = $('#number-box-one').val();
				});
		$('#number-box-two').on('keyup', function(event){
			if (event.which == 8) {
				$('#number-box-one').trigger('focus');
				if ($('#number-box-two').val() != "") {
					$('#number-box-one').text("");
				}
			} else {
				$('#number-box-three').trigger('focus');
			}
			var box_two = $('#number-box-two').val();
		});
		$('#number-box-three').on('keyup', function(event){
			if (event.which == 8) {
				$('#number-box-two').trigger('focus');
			} else {
				$('#number-box-four').trigger('focus');
			}
			var box_three = $('#number-box-three').val();
		});
		$('#number-box-four').on('keyup', function(event){
			if (event.which == 8) {
				$('#number-box-three').trigger('focus');
			} else {
				var box_one = $('#number-box-one').val();
				var box_two = $('#number-box-two').val();
				var box_three = $('#number-box-three').val();	
				var box_four = $('#number-box-four').val();
				
				var aim_one = 1;
				var aim_two = 4;
				var aim_three = 8;
				var aim_four = 8;
				if (box_one == aim_one && box_two == aim_two && box_three == aim_three && box_four == aim_four) {
					$('.number-box').css('border-color','#27cf7f');
					$('.popup-window').trigger('focus');
					Congrats();
				} else {
					$('.number-box').css('border-color','red');
				}
			}
		});

	


/* ($('.tick-one').is('display','inline')) && ($('.tick-two').is('display','inline')) && ($('.tick-three').is('display','inline')) && ($('.tick-four').is('display','inline')) */
});