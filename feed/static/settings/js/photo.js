$(function(){
//Холст и его контекст
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//Поля ввода
const widthBox = document.getElementById("widthBox");
const heightBox = document.getElementById("heightBox");
const topBox = document.getElementById("topBox");
const leftBox = document.getElementById("leftBox");

//Кнопка сохранения
const saveBtn = document.getElementById("saveBtn");

//Ссылка на новое изображение
const newImg = document.getElementById("newImg");


widthBox.addEventListener("change", function () { ChangeBoxes(); });
heightBox.addEventListener("change", function () { ChangeBoxes(); });
topBox.addEventListener("change", function () { ChangeBoxes(); });
leftBox.addEventListener("change", function () { ChangeBoxes(); });

saveBtn.addEventListener("click", function () { Save(); });

canvas.addEventListener("mousedown", function (e) { MouseDown(e); });
canvas.addEventListener("mousemove", function (e) { MouseMove(e); });
document.addEventListener("mouseup", function (e) { MouseUp(e); });

var selection = 
{
	mDown: false,
	x: 0,
	y: 0,
	top: 0,
	left: 0,
	width: 200,
	height: 200
};

const image = document.getElementById("image");

image.addEventListener("load", function () { Init(); });

image.src = '../../static/png/guys.jpeg';

window.addEventListener("resize", function () { Init(); });



function Init()
{
	canvas.width = image.width;
	canvas.height = image.height;
	// 1 here is a border width of canvas object in css
	canvas.setAttribute("style", "top: " + (image.offsetTop + 1) + "px; left: " + (image.offsetLeft + 1) + "px;");

	leftBox.setAttribute("max", image.width - 100);
	topBox.setAttribute("max", image.height - 100);

	widthBox.setAttribute("max", image.width);
	heightBox.setAttribute("max", image.height);

	DrawSelection();

}


function MouseDown(e)
{
	selection.mDown = true;
}


function MouseMove(e)
{
	
	// If the mouse btn is down
	if(selection.mDown){
		//Получаем координаты курсора на холсте
   	 selection.x = e.clientX - canvas.offsetLeft;
   	 selection.y = e.clientY - canvas.offsetTop;

   	 		selection.left = selection.x - selection.width / 2;
	 		selection.top = selection.y - selection.height / 2;
			CheckSelection();
			Update();
   	 	


}
}

/*
function MouseMove(e)
{
	if(selection.mDown)
	{
		selection.x = e.clientX - canvas.offsetLeft;
		selection.y = e.clientY - canvas.offsetTop;

		selection.left = selection.x - selection.width / 2;
		selection.top = selection.y - selection.height / 2;

		if(selection.x == selection.left) {

		} 
		else {
		CheckSelection();

		Update();
		}
	}
}

*/

function MouseUp(e)
{
	selection.mDown = false;
}


function Update()
{
	UpdateBoxes();
	DrawSelection();
}

function DrawSelection()
{
	ctx.fillStyle = "rgba(0, 0, 0, 0.7)";

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.clearRect(selection.left, selection.top, selection.width, selection.height);

	ctx.strokeStyle = "#fff";

	ctx.beginPath();

	ctx.moveTo(selection.left, 0);
	ctx.lineTo(selection.left, canvas.height);

	ctx.moveTo(selection.left + selection.width, 0);
	ctx.lineTo(selection.left + selection.width, canvas.height);

	ctx.moveTo(0, selection.top);
	ctx.lineTo(canvas.width, selection.top);

	ctx.moveTo(0, selection.top + selection.height);
	ctx.lineTo(canvas.width, selection.top + selection.height);

	ctx.stroke();

}

function ChangeBoxes()
{
	selection.width = Math.round(widthBox.value);
	selection.height = Math.round(heightBox.value);
	selection.top = Math.round(topBox.value);
	selection.left = Math.round(leftBox.value);

	CheckSelection();
	Update();
}

function CheckSelection()
{
	if(selection.width < 100)
	{
		selection.width = 100;
	}

	if(selection.height < 100)
	{
		selection.height = 100;
	}

	if(selection.width > canvas.width)
	{
		selection.width = canvas.width;
	}

	if(selection.height > canvas.height)
	{
		selection.height = canvas.height;
	}

	if(selection.left < 0)
	{
		selection.left = 0;
	}

	if(selection.top < 0)
	{
		selection.top = 0;
	}

	if(selection.left > canvas.width - selection.width)
	{
		selection.left = canvas.width - selection.width;
	}

	if(selection.top > canvas.height - selection.height)
	{
		selection.top = canvas.height - selection.height;
	}
}

function UpdateBoxes()
{
	widthBox.value = Math.round(selection.width);
	heightBox.value = Math.round(selection.height);
	topBox.value = Math.round(selection.top);
	leftBox.value = Math.round(selection.left);
}

// This code exists for input file to set btn autoclicker 

var inputs = document.querySelectorAll('.btn-for-manual-upload');
Array.prototype.forEach.call( inputs, function( input )
{
	input.addEventListener( 'change', function( e )
	{
		//$('.wrapper').css('display', 'table');
		//$('.photo-filler-cnt').css('display', 'none');
		//$('h4').text('Crop your photo');
		$('.manual-file__txt').css('display', 'none');
		$('.img-temp-header').text('Success. Crop your photo below')
		/*var fileName = '';
		if( this.files && this.files.length > 1 )
			fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
		else
			fileName = e.target.value.split( '\\' ).pop();*/
		/*
		if( fileName )
			label.querySelector( '.manual-file__txt' ).innerHTML = fileName;
		else
			label.innerHTML = labelVal; */
	});
});

var photo_draft = $('.img-temp-header');

photo_draft.mouseleave(function(){
	var selectedFile = $('#file')[0].files[0];
	image = selectedFile
	$.ajax({
		url: 'photodraft/',
		type: 'post',
		data:{
			csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
			photodraft: selectedFile,
		},
		success: function(data) {
			alert(data);
			image.src = files;
		}
	});
});


});