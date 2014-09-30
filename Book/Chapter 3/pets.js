function dogYears(dogName,age){
	var years = age * 7;
	console.log(dogName + " is " + years + " years old");
}

function makeTea(cups,tea){
	console.log("Brewing " + cups + " cups of " + tea);
}

function secret(){
	console.log("The secret of life is 42");
}

function speak(kind){
	var defaultSound = "";
	if(kind == "dog"){
		alert("Woof");
	}else if(kind == "cat"){
		alert("Meow");
	}else{
		alert(defaultSound);
	}
}