$(function(){

if ($('.toggle-label').text() == 'Night Mode'){
	$('.toggle-btn').css('left', '15px');
	$('.toggle-base').css('background-color', '#43186E');
	$('.header-cnt').css('background-color', 'black');
	$('.header-cnt2_left__logo').css('color', '#4F5665');
	$('.header-name').css('color', '#4F5665');
	$('body').css('background-color', "#1F1F1F");
	$('footer').css('background-color', 'black');
	$('.footer__aboutsnack_text').css('color', '#4F5665');
	$('.rating-info__cnt_main').css('background-color', "#2c2c2c");
	$('.learning-boxes').css('background-color', "#2c2c2c");
	$('.grey-color').css('background-color', "#2c2c2c");
	$('.grey').css('background-color', "#2c2c2c");
	$('.black-color').css('color', "darkgrey");

	$('.toggle-btn').css('background-image', 'url("../../static/png/moon.png")');
    $('.header-cnt').css('box-shadow','none');
}

   $('.toggle-base').on('click', function(){
    	if ($('.toggle-label').text() == 'Light Mode') {
    		$('.toggle-btn').animate({
    			left: "15px"
    		}, 200, function(){	
    		});
    		$('.toggle-base').animate({
    			backgroundColor: "#43186E"
    		}, 200, function(){
    		});
    		$('.header-cnt').animate({
    			backgroundColor: "black"
    		}, 200, function(){
    		});
    		$('.header-cnt2_left__logo').animate({
    			color: "#4F5665"
    		}, 200, function(){
    		});
    		$('.header-name').animate({
    			color: "#4F5665"
    		}, 200, function(){
    		});
    		$('body').animate({
    			backgroundColor: "#1F1F1F"
    		}, 200, function(){
    		});
    		$('footer').animate({
    			backgroundColor: "black"
    		}, 200, function(){
    		});
            $('.footer__aboutsnack_text').animate({
                color: "#4F5665"
            }, 200, function(){
            });
            $('.rating-info__cnt_main').animate({
                backgroundColor: "#2c2c2c"
            }, 200, function(){
            });
            $('.learning-boxes').animate({
                backgroundColor: "#2c2c2c"
            }, 200, function(){
            });
            $('.grey').animate({
                backgroundColor: "#2c2c2c"
            }, 200, function(){
            });
            $('.grey-color').animate({
                backgroundColor: "#2c2c2c"
            }, 200, function(){
            });
            $('.black-color').animate({
                color: "darkgrey"
            }, 200, function(){
            });

    		$('.toggle-label').text('Night Mode');
            $('.toggle-btn').css('background-image', 'url("../../static/png/moon.png")');
            $('.header-cnt').css('box-shadow','none');
    		delete togglerday;
    	} else {
    		$('.toggle-btn').animate({
    			left: "-15px"
    		}, 200, function(){
    		});
    		$('.toggle-base').animate({
    			backgroundColor: "#FFCC33"
    		}, 300, function(){
    		});
    		$('.header-cnt').animate({
    			backgroundColor: "white",
                boxShadow: "0px 0px 100px #E5E5E5",
    		}, 300, function(){
    		});
    		$('.header-cnt2_left__logo').animate({
    			color: "black"
    		}, 300, function(){
    		});
    		$('.header-name').animate({
    			color: "black"
    		}, 300, function(){
    		});
    		$('body').animate({
    			backgroundColor: "white"
    		}, 300, function(){
    		});
    		$('footer').animate({
    			backgroundColor: "#F8F8F8"
    		}, 300, function(){
    		});
            $('.footer__aboutsnack_text').animate({
                color: "black"
            }, 300, function(){
            });
            $('.rating-info__cnt_main').animate({
                backgroundColor: "#F5F5F5"
            }, 300, function(){
            });
            $('.learning-boxes').animate({
                backgroundColor: "#F5F5F5"
            }, 300, function(){
            });
            $('.grey').animate({
                backgroundColor: "#F5F5F5"
            }, 300, function(){
            });
            $('.grey-color').animate({
                backgroundColor: "#E0E0E0"
            }, 300, function(){
            });
            $('.black-color').animate({
                color: "black"
            }, 300, function(){
            });
    		$('.toggle-label').text('Light Mode');
            $('.toggle-btn').css('background-image', 'url("../../static/png/sun.png")')
    	}
		$.ajax({
			type: 'POST',
			url: 'theme/',
			data: {
				csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
			},
			success: function(data) {
			}
		});
    });

});