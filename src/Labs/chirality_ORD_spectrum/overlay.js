function on(x) {
	s="overlay"+x;
	console.log(s);
    document.getElementById(s).style.display = "block";
}

function off(x) {
	s="overlay"+x;
    document.getElementById(s).style.display = "none";
}


