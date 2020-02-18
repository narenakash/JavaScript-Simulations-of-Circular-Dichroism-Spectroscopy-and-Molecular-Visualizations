function on(x) {
	s="overlay"+x;
	console.log(s);
    document.getElementById(s).style.display = "block";
}

function off(x) {
	s="overlay"+x;
	console.log(s,"band krunga");
    document.getElementById(s).style.display = "none";
    // document.getElementById("overlay1").style.display = "none";
    // document.getElementById("overlay2").style.display = "none";
}


