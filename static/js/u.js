

$(function(){



$('.center').on('mouseover',function(){
	$('.center').animate({
		left: '300px'
	},500,function(){
		var flag = false;
	})

}); 


var opt = "off";
var theme = "green";

$('.option').on('mouseover',function(){
	if (opt == "off") {
		$('.opttheme').fadeIn(300,function(){
			$(this).css('display','inline');
		});
		opt = "on"}});
$('.option').on('mouseout',function(){
	setTimeout(function(){$('.opttheme').fadeOut(300)},2000);
	opt = "off";

});

$('.redt').on('click',function(){
	/* 58 83 105 grey
	223 86 96 red */
	$('body').fadeOut(300,red());
	$('body').fadeIn(300);});
$('.greent').on('click',function(){
	/* 58 83 105 grey
	223 86 96 red */
	$('body').fadeOut(300,green());
	$('body').fadeIn(300);});



 function red(){
	 	setTimeout(function(){$('li').css('color','rgb(58,83,105)')},300);
		setTimeout(function(){$('.login').css('background-color','rgb(223,86,96)')},300);
		setTimeout(function(){$('.option').css('background-image',"url('settings-2.png')")},300);
		setTimeout(function(){$('.grey').css('color','rgb(58,83,105)')},300);
		setTimeout(function(){$('.green').css('color','rgb(223,86,96)')},300);
		setTimeout(function(){$('.text').css('color','rgb(58,83,105)')},300);
		setTimeout(function(){$('.start').css('background-color','rgb(223,86,96)')},300);
		/*setTimeout(function(){$('.greent').css('background-image','none')},300);
		setTimeout(function(){$('.greent').css('background-color','#27cf7f')},300);
		setTimeout(function(){$('.redt').css('background-color','none')},300);
		setTimeout(function(){$('.redt').css('background-image',"url('Crosstick.png')")},0);
		setTimeout(function(){$('.redt').css('background-repeat','no-repeat')},0);
		setTimeout(function(){$('.redt').css('background-size','100%')},0);*/
 }
 function green(){
	 	setTimeout(function(){$('li').css('color','#455064')},300);
		setTimeout(function(){$('.login').css('background-color','#27cf7f')},300);
		setTimeout(function(){$('.option').css('background-image',"url('settings.png')")},300);
		setTimeout(function(){$('.grey').css('color','#455064')},300);
		setTimeout(function(){$('.green').css('color','#27cf7f')},300);
		setTimeout(function(){$('.text').css('color','#455064')},300);
		setTimeout(function(){$('.start').css('background-color','#27cf7f')},300);
 }

});