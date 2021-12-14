$(function(){
   
var Contact_tab = $('.contact-string');
var MsgContainer = $('.msg-cnt');
var MsgBlank = $('.msg-cnt-blank');
var MsgSbmt = $('.msg-btn');

	Contact_tab.on('click', function(){
		
		Contact_tab.css('background-color', 'white');
		$(this).css('background-color', '#26D07C');
		MsgBlank.css('display', 'none');
		MsgContainer.css('display', 'block');
		var usercurrentid = $(this).find('#userid').text();
		var fn = $(this).find('.fn').text();
		var sn = $(this).find('.sn').text();

		$.ajax({
			url: 'm/',
			type: 'get',
			data: {
				flag: 'a',
				userid: $(this).find('#userid').text(),
				firstname: $(this).find('.fn').text(),
				surname: $(this).find('.sn').text() 
			},
			success: function(response) {
				$('.msg-zone-cnt').empty();
				for (var key in response.messages) {
					if (response.ourid == response.messages[key].fromid) {
						var temp='<div class="msg-string msgstring" id="msgstring"><div class="msg">'+response.messages[key].title+'<div class="msg-time">'+response.messages[key].time+'</div></div></div>';
						$('.msg-zone-cnt').append(temp);
					} else {
						var temp='<div class="msg-string msgstring" id="msgstring"><div class="msg2">'+response.messages[key].title+'<div class="msg-time">'+response.messages[key].time+'</div></div></div>';
						$('.msg-zone-cnt').append(temp);
					}
				}
				var CntHeight = $('.msg-zone-cnt').height();
				scrollTo(CntHeight);
			}
		});
		$('.useridsbmt').text($(this).find('#userid').text());
		/* There should be AJAX to msg db*/
		/*
		setInterval(function(){
		$.ajax({
			url: 'm/',
			type: 'get',
			data: {
				flag: 'a',
				userid: usercurrentid,
				firstname: fn,
				surname: sn 
			},
			success: function(response) {
				$('.msg-zone-cnt').empty();
				for (var key in response.messages) {
					if (response.ourid == response.messages[key].fromid) {
						var temp='<div class="msg-string msgstring" id="msgstring"><div class="msg">'+response.messages[key].title+'<div class="msg-time">'+response.messages[key].time+'</div></div></div>';
						$('.msg-zone-cnt').append(temp);
					} else {
						var temp='<div class="msg-string msgstring" id="msgstring"><div class="msg2">'+response.messages[key].title+'<div class="msg-time">'+response.messages[key].time+'</div></div></div>';
						$('.msg-zone-cnt').append(temp);
					}
				}
				
			}
		});
		}, 5000);
		*/
	
	});
	$(document).on('submit', '.msg-input', function(e){
		e.preventDefault();
		var userid = $('.useridsbmt').text();
		$.ajax({
			type:'POST',
			url:'send/',
			data:{
				text:$('.input-msg-txt').val(),
				toid: userid,
				csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
			},
			success: function(data) {
				alert(data);
			}
		});
		var text = $('.input-msg-txt').val();
		var temp='<div class="msg-string msgstring" id="msgstring"><div class="msg">'+text+'<div class="msg-time">'+'Now'+'</div></div></div>';
		$('.msg-zone-cnt').append(temp);
		$('.input-msg-txt').val('');
	});

var SearchField = $('input#search');
var ContactString = $('.string-name');

	SearchField.on('input', function(){
		var SearchMaterial = $(this).val().toLowerCase();
		if (SearchMaterial.length < 1){
			ContactString.show();
		}
		else {
			ContactString.each(function(){
				if($(this).text().toLowerCase().indexOf(SearchMaterial) < 0){
					$(this).parent().parent().hide();
				}
			});
		}

	});


});