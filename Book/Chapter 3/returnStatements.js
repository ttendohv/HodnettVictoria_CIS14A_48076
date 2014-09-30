function bake(degrees){
	var message;
	
	if(degrees > 500){
		message = "I'm not a nuclear reactor!";
	}else if(degrees < 100){
		message = "I'm not a refrigerator!";
	}else{
		message = "That's a very comfortable temperature for me.";
	}
	return message;
}

function calculateArea(r){
	var area;
	if(r <= 0){
		return 0;
	}else{
		area = Math.PI * r * r;
		return area;
	}
}