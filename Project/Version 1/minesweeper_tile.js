    //Constructor for the Tile class
	function Tile(num){
		this.tileNum=num;
		//this.row=r;
		//this.col=c;
		//this.back="Cards/"+this.name+this.suit+".jpg";
		this.solution='"./images/mine.png" width="64" height="64"';
	}
//Create an array of 81 tiles
	//var board=new Array(9);
	//for(var i=0;i<9;i++){
	//	board[i]=new Array(9);
	//}
	//for(var i=0;i<9;i++){
	//	for(var j=0;j<9;j++){
	//		board[i][j]=new Tile(i,j);
	//	}
	//}

//Read in solution
//Until I find out how to read from file
Tile.prototype.solution=function(){
	var solution=new Array(9);
	for(var i=0;i<9;i++){
		solution[i]=new Array(9);
	}
	var row=0;
	var col=0;
	//Row 1
	solution[row][col++]="1";
	solution[row][col++]="1";
	solution[row][col++]="1";
	solution[row][col++]="1";
	solution[row][col++]="*";
	solution[row][col++]="2";
	solution[row][col++]="1";
	solution[row][col++]="1";
	solution[row][col++]="0";
	//Row 2
	col=0;
	row++;
	solution[row][col++]="1";
	solution[row][col++]="*";
	solution[row][col++]="1";
	solution[row][col++]="1";
	solution[row][col++]="1";
	solution[row][col++]="2";
	solution[row][col++]="*";
	solution[row][col++]="1";
	solution[row][col++]="0";
	//Row 3
	col=0;
	row++;
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	//Row 4
	col=0;
	row++;
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	//Row 5
	col=0;
	row++;
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	//Row 6
	col=0;
	row++;
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	//Row 7
	col=0;
	row++;
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	//Row 8
	col=0;
	row++;
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	//Row 9
	col=0;
	row++;
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
	solution[row][col++]=
}