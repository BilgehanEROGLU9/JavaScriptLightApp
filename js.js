var x,y;
x=0;
y=1;
function call(){
if(x==1){
document.getElementById("tus").style.background='#00ff00';
document.getElementById("tus").value="Işığı aç";
document.getElementById("notification").innerHTML="Işık kapatıldı";
document.getElementById("notification").style.color = '#ffffff';
document.getElementById("count").style.color = '#ffffff';
document.getElementById("count").innerHTML="Tuşa "+y+" kez basıldı";
document.getElementById("change").src="LightOFF.png";
document.body.style.backgroundColor = "#000000";
x=0;
y++;}

else{
document.getElementById("tus").style.background='#ff00ff';	
document.getElementById("tus").value="Işığı kapat";
document.getElementById("notification").innerHTML="Işık açıldı";
document.getElementById("notification").style.color = '#000000';
document.getElementById("count").innerHTML="Tuşa "+y+" kez basıldı";
document.getElementById("count").style.color = '#000000';
document.getElementById("change").src="LightON.png";
document.body.style.backgroundColor = "#ffff00";
x=1;
y++;}}
var kapat = 0;
var mavi = 1;
var delay = 300;
function police(){
    kapat=0;
	document.getElementById("tus2").value="Hızlandır";
	light();
	}
   
	function light(){
	if(kapat==1)
	{return ;
	}
	else if(mavi==1)
	{document.body.style.backgroundColor = "#ff0000";
    document.getElementById("tus").style.background='#0000ff';
	document.getElementById("tus2").style.background='#0000ff';
	document.getElementById("tus3").style.background='#0000ff';
	document.getElementById("change").src="red.png";
	mavi=0;
	setTimeout(light, delay);}
    else if(mavi==0)
	{document.body.style.backgroundColor = "#0000ff";
	document.getElementById("tus").style.background='#ff0000';
	document.getElementById("tus2").style.background='#ff0000';
	document.getElementById("tus3").style.background='#ff0000';
	document.getElementById("change").src="blue.png";
	mavi=1;
    setTimeout(light, delay);}
}

function stop(){
	kapat=1;
    document.getElementById("tus2").value="Polis Işıkları";
}

	



