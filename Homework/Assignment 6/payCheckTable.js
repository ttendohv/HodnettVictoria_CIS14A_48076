var findPayCheck = function(hours,payRate,dblt,trplt){
	if(hours<=dblt){
		return hours * payRate;
	}else if(hours<=trplt){
		return hours * payRate + ((hours-dblt) * payRate);
	}else{
		return hours * payRate + (dblt * payRate) + (2 * (hours-trplt) * payRate);
	}
}

var print = function(hours,payChkTable){
	document.write('<table width="450" border="1">');
	document.write("<tr>");
	document.write("<th></th>");
	document.write("<th>Hours</th>");
    document.write("<th>Pay Rate</th>");
    document.write("<th>Gross Pay</th>");
    document.write("<th>Taxes (%)</th>");
    document.write("<th>Net Pay</th>");
	document.write("</tr>");
	for(var i=0;i<=hours;i++){
		document.write("<tr>");
		if(i==0){
			document.write("<td rowspan='21'><b>Straight Time</b></td>");
		}else if(i==21){
			document.write("<td rowspan='20'><b>Double Time</b></td>");
		}else if(i==41){
			document.write("<td rowspan='32'><b>Triple Time</b></td>");
		}else{
			//Do nothing
		}
		document.write("<td>"+payChkTable[0][i]+"</td>");
		document.write("<td>$"+payChkTable[1][i]+"</td>");
		document.write("<td>$"+payChkTable[2][i]+"</td>");
		document.write("<td>$"+payChkTable[3][i]+"</td>");
		document.write("<td>$"+payChkTable[4][i]+"</td>");
		document.write("</tr>");
	}
	document.write("</table>");
}