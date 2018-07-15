var noOfColors=6;
var colors = generateArray(noOfColors);
var newGame=document.getElementById("newGame");
var easy=document.getElementById("easy");
var hard=document.getElementById("hard");

easy.addEventListener("click",function()
{
	noOfColors=3;
	easy.classList.add("selected");
	hard.classList.remove("selected");
	colors=generateArray(noOfColors);
	h1.style.background="steelblue";
	pickedColor=pickColor();
	disp.textContent=pickedColor;
	for(var i=0;i<circles.length;i++)
	{
		if(colors[i])
		{
			circles[i].style.background=colors[i];
		}
		else
		{
			circles[i].style.display="none";
		}
	}
});


hard.addEventListener("click",function()
{
	noOfColors=6;
	hard.classList.add("selected");
	easy.classList.remove("selected");
	colors=generateArray(noOfColors);
	pickedColor=pickColor();
	h1.style.background="steelblue";
	disp.textContent=pickedColor;
	for(var i=0;i<circles.length;i++)
	{
			circles[i].style.background=colors[i];
			circles[i].style.display="block";
	}
});

newGame.addEventListener("click",function()
{
	setStatus.textContent="";
	colors=generateArray(noOfColors);
	pickedColor=pickColor();
	disp.textContent=pickedColor;
	//h1.style.background=#232323;
	for(var i=0;i<circles.length;i++)
	{
		if(colors[i])
		{
		circles[i].style.background=colors[i];
		circles[i].style.display="block";
		}
		else
		{
			circles[i].style.display="none";
		}
	}
	h1.style.background="steelblue";
	newGame.textContent="New Game";



});


function generateArray(num)
{
	var  colorArray=[]
	for(var i=0;i<num;i++)
	{
		colorArray.push(getColor());
	}
	return colorArray;
}

function getColor() 
{
	var r=(Math.floor)(Math.random()*255);
	var g=(Math.floor)(Math.random()*255);
	var b=(Math.floor)(Math.random()*255);
	
	return "rgb(" +r+","+" "+ g + ","+" " +b + ")"; 

}

var h1=document.querySelector("h1");

var circles=document.querySelectorAll(".circle");
var pickedColor=pickColor();

for(var i=0;i<circles.length;i++)
{
	circles[i].style.background=colors[i];

	circles[i].addEventListener("click", function(){

		var clicked=this.style.background;
		if(clicked==pickedColor)
		{
			setStatus.textContent="Correct";
			changeColors(pickedColor);	
			h1.style.backgroundColor=clicked;
			newGame.textContent="Play Again";
		}
		else
		{
			this.style.background="#232323";
				setStatus.textContent="InCorrect";
		}
	});
}

function changeColors(colorToSet)
{
	for(i=0;i<circles.length;i++)
	{
		circles[i].style.background=colorToSet;
	}
}



var disp=document.getElementById("choosedColor");
disp.textContent=pickedColor;
var setStatus=document.getElementById("status");

function pickColor()
{
	var index=(Math.floor)(Math.random()*colors.length);
	return colors[index];
}
