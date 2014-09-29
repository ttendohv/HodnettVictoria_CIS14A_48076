//Input
	//	bal -> Initial balance $'s
	// intR -> Interest rate %/year
	// nPer -> Number of compounding periods, years
	// mDep -> Monthly deposits accrued until end of year, $'s
//Output
	//	retirement -> $'s
function retire(bal,intR,nPer,mDep){
	var retirement = bal;
	for(var year=1;year<=nPer;year++){
		retirement*=(1+(intR/100));
		retirement+=(mDep/12);
	}
	retirement=retirement.toFixed(2);
	return retirement;
}

//Input
	//	bal -> Initial balance $'s
	// intR -> Interest rate %/year
	// nPer -> Number of compounding periods, years
	// mDep -> Monthly deposits accrued until end of year, $'s
//Output
	//	retirement in an array -> $'s
function retireArray(bal,intR,nPer,mDep){
	var retirement = [];
	retirement[0] = bal;
	for(var year=1;year<=nPer;year++){
		retirement[year]=retirement[year-1]*(1+(intR/100));
		retirement[year]+=(mDep/12);
		retirement[year]=retirement[year].toFixed(2);
	}
	return retirement;
}

//Display table function
//Input
//	heading -> array with column names
//	data -> array with data
//Output
//	str -> formatted table
function display(heading,data){
	var str="";
	str+='<table width="200" border="1">';
	str+="<tr>";
	for(var col=0;col<heading.length;col++){
		str+="<th>"+heading[col]+"</th>";
	}
	str+="</tr>";
	for(var year=1;year<data.length;year++){
		str+="<tr>";
		str+=("<td>"+year+"</td>");
		str+=("<td>"+retirement[year]+"</td>");
		str+="</tr>";
	}
	str+="</table>";
	return str;
}