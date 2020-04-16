var step_no=0;
var count=0;
var opacity=0;
var intervalID=0;

function cursorPointers(id1){
    document.getElementById(id1).style.cursor = "pointer";
}
cursorPointers("know")
cursorPointers("proceed")
cursorPointers("cap")
cursorPointers("click")
cursorPointers("click1")


function firstClick(id1){
	document.getElementById(id1).addEventListener('click',function(){
	document.getElementById("know").style.visibility="hidden";
	document.getElementById("proceed").style.visibility="hidden";
	// document.getElementById("arrow").src="arrow.gif"

});}
firstClick("know")
firstClick("proceed")

function zoomImg(id1,id2,a){
	var elem = document.getElementById(id2),
    fadeInInterval,
    fadeOutInterval;

    
document.getElementById(id1).addEventListener('click',function(){
		document.getElementById(id2).src=a;

    
clearInterval(fadeInInterval);
clearInterval(fadeOutInterval);

elem.fadeIn = function(timing) {
var newValue = 0;

elem.style.opacity = 0;

fadeInInterval = setInterval(function(){ 

if (newValue < 1) {
newValue += 0.02;
} else if (newValue === 1) {
clearInterval(fadeInInterval);   
}

elem.style.opacity = newValue;

}, timing);

}

elem.fadeIn(20);
});
}
zoomImg("know","arrow","gifs/arrow.gif")
zoomImg("know","equip","images/equip.png")
zoomImg("know","instruction1","images/in1.png")
zoomImg("coor","zoom","images/zoom.png")
zoomImg("coor1","eye","images/eyepiece.png")
zoomImg("coor1","digarr","gifs/diag.gif")
zoomImg("coor2","light","images/light.png");
zoomImg("coor2","cap","images/cap.svg")
zoomImg("cap","final","images/final.png")
zoomImg("cap","click","images/click.png")
zoomImg("click","last","images/last.png")
zoomImg("click","click1","images/click1.jpg")
zoomImg("proceed","sols","images/sols.png")
zoomImg("coor3","zoomsol","images/zoomsol.png")
zoomImg("coor4","zoomsol","images/zoomsol.png")
zoomImg("zoomsol","beaker","images/beaker.png")
var zoomImg=document.getElementById("coor")

zoomImg.onclick = function(){
	document.getElementById("arrow").style.visibility="hidden"
	document.getElementById("instruction1").style.visibility="hidden"
	document.getElementById("equip").style.visibility="hidden";
  	// document.getElementById("zoom").src="zoom.png"
}
var redDot=document.getElementById("coor1");

redDot.onclick = function(){
	document.getElementById("zoom").style.visibility="hidden"
  	// document.getElementById("zoom").src="zoom.png"
}

var cap=document.getElementById("coor2");

cap.onclick = function(){
	document.getElementById("eye").style.visibility="hidden"
	document.getElementById("digarr").style.visibility="hidden"
}
document.getElementById("cap").onclick=function(){
	document.getElementById("cap").style.visibility="hidden"
	document.getElementById("light").style.visibility="hidden"
}
document.getElementById("click").onclick=function(){
	document.getElementById("final").style.visibility="hidden"
	document.getElementById("click").style.visibility="hidden"
}
function clickSols(id1){
	document.getElementById(id1).addEventListener('click',function(){
	document.getElementById("sols").style.visibility="hidden";
});}
clickSols("coor3")
clickSols("coor4")

function showdata(id1){
	document.getElementById(id1).addEventListener('click',function(){
	document.getElementById("demo").innerHTML="Unknown sugar sol selected."

});}
showdata("coor3")
showdata("coor4")
// document.getElementById("demo1").innerHTML="Max Sugar conc. allowed or this sugar(g/100ml)=108."
document.getElementById("zoomsol").onclick=function(){
	document.getElementById("zoomsol").style.visibility="hidden"
}