function setup(width,height){
	centerX = width/2;
	centerY = height/2;
}

function computeDistance(x1,y1,x2,y2){
	var dx = x1 - x2;
	var dy = y1 - y2;
	var d2 = (dx * dx) + (dy * dy);
	var d = Math.sqrt(d2);
	return d;
}

function circleArea(r){
	var area = Math.PI * r * r;
	return area;
}