function steal(balance,amount){
	cameraOn = false;
	if(amount < balance){
		balance = balance - amount;
	}
	return amount;
	cameraOn = true;
}