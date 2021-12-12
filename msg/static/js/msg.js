$(function(){
   
var Contact_tab = $('.contact-string');
var MsgContainer = $('.msg-cnt');
var MsgBlank = $('.msg-cnt-blank');

	Contact_tab.on('click', function(){
		Contact_tab.css('background-color', 'white');
		$(this).css('background-color', '#26D07C');
		MsgBlank.css('display', 'none');
		MsgContainer.css('display', 'block');

		/* There should be AJAX to msg db*/

	});

var SearchField = $('input#search');
var ContactString = $('.string-name')

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