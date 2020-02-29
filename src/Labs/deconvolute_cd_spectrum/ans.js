function correct(s){
	// console.log(s);
	swal({
		text : "Name of Sample: "+s,
		title : "Good Job",
		icon: "success",
		// butttons: false,
		// timer: 1000,
	});
}

function incorrect(){
	swal({
		text : "Wrong Structure",
		title : "Try Again!!!",
		icon: "error",
		// butttons: false,
		// timer: 1000,
	})
}

