function correct(){
	swal({
		text : "Asymmetric Carbon",
		title : "Good Job",
		icon: "success",
		butttons: false,
		timer: 800,
	});
}

function correctans(s){
	swal({
		text : "That's a "+s+" configuration carbon",
		title : "Good Job",
		icon: "success",
		butttons: false,
		timer: 1500,
	});
}

function incorrectc(){
	swal({
		text : "Not an asymmetric Carbon",
		title : "Try Again!!!",
		icon: "error",
		butttons: false,
		timer: 800,
	});
}

function incorrectans(s){
	swal({
		text : "That's not a "+s+" configuration carbon",
		title : "Try Again!!!",
		icon: "error",
		butttons: false,
		timer: 1500,
	});
}
function incorrecto(){
	swal({
		text : "It's oxygen",
		title : "Try Again!!!",
		icon: "error",
		butttons: false,
		timer: 800,
	});
}