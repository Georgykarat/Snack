$(function(){


   $('.toggle-base').on('click', function(){
    	if ($('.toggle-label').text() == 'Light Mode') {
    		$('.toggle-btn').animate({
    			left: "15px"
    		}, 200, function(){
    			
    		});
    		$('.toggle-base').animate({
    			backgroundColor: "#43186E"
    		}, 300, function(){
    		});
    		$('.header-cnt').animate({
    			backgroundColor: "black"
    		}, 300, function(){
    		});
    		$('.header-cnt2_left__logo').animate({
    			color: "#4F5665"
    		}, 300, function(){
    		});
    		$('.header-name').animate({
    			color: "#4F5665"
    		}, 300, function(){
    		});
    		$('body').animate({
    			backgroundColor: "#1F1F1F"
    		}, 300, function(){
    		});
    		$('footer').animate({
    			backgroundColor: "black"
    		}, 300, function(){
    		});
            $('.footer__aboutsnack_text').animate({
                color: "#4F5665"
            }, 300, function(){
            });
            $('.rating-info__cnt_main').animate({
                backgroundColor: "#2c2c2c"
            }, 300, function(){
            });
            $('.learning-boxes').animate({
                backgroundColor: "#2c2c2c"
            }, 300, function(){
            });
            $('.grey').animate({
                backgroundColor: "#2c2c2c"
            }, 300, function(){
            });
    		$('.toggle-label').text('Night Mode');
            $('.toggle-btn').css('background-image', 'url("../png/moon.png")');
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
    		$('.toggle-label').text('Light Mode');
            $('.toggle-btn').css('background-image', 'url("../png/sun.png")')
    	}
    });
});