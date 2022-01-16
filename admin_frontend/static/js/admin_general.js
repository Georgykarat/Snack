$(function(){

var SearchField = $('.admin__panel-search');
var AdminOption = $('.admin__panel-lioption');
var AdminOptionTitle = $('.admin__panel-li-text');
var HelpButton = $('.admin__header_q');
var AdminOptionList = $('.admin__li-of-options');
var GetHelpButton = $('.admin__header_q');
var HelpWindow = $('.admin__panel_explanation');


SearchField.on('input', function(){
    var SearchMaterial = $(this).val().toLowerCase();
        if (SearchMaterial.length < 3){
            AdminOption.show();
        } else {
            AdminOptionTitle.each(function(){
                if($(this).text().toLowerCase().indexOf(SearchMaterial) < 0){
                    $(this).parent().hide();
                }
            });
        }
});

HelpButton.on('click', function(){
    if (AdminOptionList.css('display') == 'flex') {
        AdminOptionList.css('display', 'none');
        GetHelpButton.css('color', '#1576F5');
        HelpWindow.css('display', 'block');
    } else {
        AdminOptionList.css('display', 'flex');
        GetHelpButton.css('color', 'lightgrey');
        HelpWindow.css('display', 'none');
    }
});
   
});