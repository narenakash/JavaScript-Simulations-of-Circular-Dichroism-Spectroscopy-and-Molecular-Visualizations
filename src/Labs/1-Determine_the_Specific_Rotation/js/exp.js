var step_no = 0;
var count = 0;
var opacity = 0;
var intervalID = 0;

function cursorPointers(id1) {
	document.getElementById(id1).style.cursor = "pointer";
}
cursorPointers("know")
cursorPointers("proceed")
cursorPointers("cap")
cursorPointers("click")
cursorPointers("click1")

function firstClick(id1) {
	document.getElementById(id1).addEventListener('click', function () {
		document.getElementById("know").style.visibility = "hidden";
		document.getElementById("proceed").style.visibility = "hidden";
		// document.getElementById("arrow").src="arrow.gif"

	});
}
firstClick("know")
firstClick("proceed")

function zoomImg(id1, id2, a) {
	var elem = document.getElementById(id2),
		fadeInInterval,
		fadeOutInterval;


	document.getElementById(id1).addEventListener('click', function () {
		document.getElementById(id2).src = a;


		clearInterval(fadeInInterval);
		clearInterval(fadeOutInterval);

		elem.fadeIn = function (timing) {
			var newValue = 0;

			elem.style.opacity = 0;

			fadeInInterval = setInterval(function () {

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
zoomImg("know", "arrow", "../gifs/arrow.gif")
zoomImg("know", "equip", "../images/equip.png")
zoomImg("know", "instruction1", "../images/in1.png")
zoomImg("coor", "zoom", "../images/zoom.png")
zoomImg("coor1", "eye", "../images/eyepiece.png")
zoomImg("coor1", "digarr", "../gifs/diag.gif")
zoomImg("coor2", "light", "../images/light.png");
zoomImg("coor2", "cap", "../images/cap.svg")
zoomImg("cap", "final", "../images/final.png")
zoomImg("cap", "click", "../images/click.png")
// szoomImg("click", "last", "../images/last.png")
// zoomImg("click", "click1", "../images/click1.jpg")
zoomImg("proceed", "sols", "../images/sols.png")
// zoomImg("coor3", "zoomsol", "../images/zoomsol.png")
// zoomImg("coor4", "zoomsol", "../images/zoomsol.png")
//zoomImg("zoomsol", "beaker", "../images/beaker.png")
zoomImg("coord1", "zoomsol", "../images/zoomsol.png")
zoomImg("coord2", "zoomsol", "../images/zoomsol.png")
zoomImg("coord3", "zoomsol", "../images/zoomsol.png")
zoomImg("coord4", "zoomsol", "../images/zoomsol.png")
zoomImg("coord5", "zoomsol", "../images/zoomsol.png")
zoomImg("coord6", "zoomsol", "../images/zoomsol.png")
var zoomImg = document.getElementById("coor")

zoomImg.onclick = function () {
	document.getElementById("arrow").style.visibility = "hidden"
	document.getElementById("instruction1").style.visibility = "hidden"
	document.getElementById("equip").style.visibility = "hidden";
	// document.getElementById("zoom").src="zoom.png"
}
var redDot = document.getElementById("coor1");

redDot.onclick = function () {
	document.getElementById("zoom").style.visibility = "hidden"
	// document.getElementById("zoom").src="zoom.png"
}

var cap = document.getElementById("coor2");

cap.onclick = function () {
	document.getElementById("eye").style.visibility = "hidden"
	document.getElementById("digarr").style.visibility = "hidden"
}
document.getElementById("cap").onclick = function () {
	document.getElementById("cap").style.visibility = "hidden"
	document.getElementById("light").style.visibility = "hidden"
}
// document.getElementById("click").onclick = function () {
// 	// document.getElementById("final").style.visibility = "hidden"
// 	// document.getElementById("click").style.visibility = "hidden"
// }
function clickSols(id1) {
	document.getElementById(id1).addEventListener('click', function () {
		document.getElementById("sols").style.visibility = "hidden";
	});
}
clickSols("coord1")
clickSols("coord2")
clickSols("coord3")
clickSols("coord4")
clickSols("coord5")
clickSols("coord6")
var first, second;
function showdata(id1, num) {
	document.getElementById(id1).addEventListener('click', function () {
		document.getElementById("demo").innerHTML = "Unknow Sample No " + num + " Selected!"
		swal("Please Enter Concentration:", {
			content: "input",
		})
			.then((value) => {
				document.getElementById('next3').innerHTML = "Concentration:  " + value + " ml";
				localStorage.setItem("conc", value)
				localStorage.setItem("samplenum", num)

			});
		document.getElementById('next3').style.visibility = "visible";
		document.getElementById('next5').style.visibility = "visible";


		//console.log(first)



	});
}
showdata("coord6", 6)

showdata("coord5", 3)

showdata("coord4", 5)
showdata("coord3", 4)
showdata("coord2", 2)
showdata("coord1", 1)
// document.getElementById("demo1").innerHTML="Max Sugar conc. allowed or this sugar(g/100ml)=108."
document.getElementById("next5").onclick = function () {
	document.getElementById('beaker').src = "./../images/beaker.png"
	document.getElementById("zoomsol").style.visibility = "hidden"
	swal("Please Enter Cell Size:(8cm/10cm)", {
		content: "input",
	})
		.then((value) => {
			console.log(value);
			if(value==8){
				document.getElementById('next42').style.visibility = "visible";
			}
			else{
	document.getElementById('next41').style.visibility = "visible";
			}
			localStorage.setItem("cell", value)

		});
}