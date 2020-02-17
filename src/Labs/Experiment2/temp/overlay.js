function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}
const right = document.getElementById("right");
const left = document.getElementById("left");

var slide1 = document.getElementById("slide1");
var slide2 = document.getElementById("slide2");
var slide3 = document.getElementById("slide3");
var slide4 = document.getElementById("slide4");

var radio_array = new Array(slide1, slide2, slide3, slide4);

var radio_length = radio_array.length;

let i = 0;

left.onclick = () => {
    i--;
    if (i < 0) {
        i = radio_length - 1;
    }
    radio_array[i].checked = true;
};


right.onclick = () => {
    i++;
    if (i > radio_length - 1) {
        i = 0;
    }
    radio_array[i].checked = true;
};



