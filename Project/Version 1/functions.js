var clickable = true;

//Initialize game board
//Input
//      board, row, col
//Output
//      board
function initial(board,row,col){
    for(var n=0; n<row; n++){
        for(var x=0; x<col; x++){
            board[x][n] = '<img src="./images/grid.png">';
        }
    }
}

//Display game board
//Input
//      board, rows, cols
//Output
//      none
/*Place board in a table instead for now */
function display(board,soltn,rows,cols){
	document.write('<h1 align="center">MINESWEEPER</h1>');
    //Print out A-I for rows, 1-9 for columns
	document.write('<table align="center" border="1">');
    document.write("<tr>");
	document.write("<th></th>");
	for(var i=0;i<cols;i++){
		document.write("<th>"+(i+1)+"</th>");
	}
	document.write("</tr>");
	for(var r=0;r<rows;r++){
		document.write("<tr>");
		document.write("<th>"+(String.fromCharCode('A'.charCodeAt() + r))+"</th>");
		for(var c=0;c<cols;c++){
			document.write('<a href="javascript:revealImage('+board+','+soltn+','+r+','+c+')"'); 
			document.write('onClick="revealImage('+board+','+soltn+','+r+','+c+')">');
			document.write("<td>"+(board[c][r])+"</a></td>");
		}
		document.write("</tr>");
	}
	document.write("</table>");
}

//Fill in solution board
//Input
//      game, rows, cols
//Output
//      none
//      reference game
function readSol(game,rows,cols){
    //Need to read in from file, but display dummy for now
	for(var i=0; i<rows; i++){
        for(var j=0; j<cols; j++){
            game[i][j]='<img src="./images/mine.png" width="64" height="64">';
        }
    }
    //Test input
//    for(int i=0; i<ROWS; i++){
//        for(int j=0; j<COL; j++){
//            cout << game[i][j];
//        }
//        cout << endl;
//    }
}

function revealImage(board,soltn,row,col){
	if(board[col][row]==soltn[col][row])
		clickable=false;
	if(clickable){ 
		board[col][row] = soltn[col][row];
	}else{
		board[col][row] = board[col][row];
	}
}


/*
//Begin play
//Input
//      board, soltn, row, col, mines
//Output
//      none
//      reference board array
function play(board,soltn,row,col,mines){
    var num1;//char
    var num2;//int
    var num3;//int
    var winner;//string
    // Need to read in from file in JS
    //ofstream allWnrs; 
    var wnnrs = [];//char
    var size = row*col;//int
    var gameOvr;//bool
    var invInpt;//bool
    //Need to start time with JS 
    //int begin = time(0);
    do{
        do{
            //Make move
            var str = prompt("Type in which square to uncover (e.g. A1) ");
            var split = str.split("");
            num1 = split[0];
            num2 = split[1];
            //Convert input to used for grid
            num1 = num1.toUpperCase();
    		num3 = num1.charCodeAt(0) - 65;
    		num2--;

            invInpt = mkMove(num2,num3,row,col);//What is num3, do I need it here? Cannot return multiple values
        }while(invInpt);
        //Determine if lost or may continue
        gameOvr = winLose(board,soltn,row,col,num3,num2);
        //Determine if won
        var count = 0;//int
        for (var n=0; n<row; n++){
            for(var x=0; x<col; x++){
                if(board[n][x] == soltn[n][x]) count++;
            }
        }
        if(count == ((row*col)-mines)){
            alert("Congratulations! You win!");
            //Need to end time with JS
            //int end = time(0);
            //Print out winners board with flags
            wnrsBrd(soltn,row,col,wnnrs);
            winner = prompt("Please enter your name to record you as a winner: ");
			//Append winners to file in JS
            //winner += " ";
            //allWnrs.open("Winners.txt",ios::app);
            //allWnrs << winner << endl;
            //allWnrs.close();
            //Display time and score
            points(begin,end,mines,row);
            gameOvr = true;
        }
    }while(!gameOvr);
    //Update board
    return board;
}


//Validate choice
//Input
//      num2, num3,rows,cols
//Output
//      bool = true or false
//      reference num2,num3
function mkMove(num2,num3,rows,cols){
    if ((num2<0||num2>cols-1)||(num3<0||num3>rows-1)){ 
        alert("Invalid choice. Please try again.");
        return true;
    }
    else
        return false;
}


//Determine if won or may continue
//Input
//      board, soltn, rows, cols, num1, num2
//Output
//      none
//      reference board
//What to do.. Need to return both board and boolean
function winLose(board,soltn,rows,cols,num1,num2){
    if (soltn[num1][num2] == '*'){
        board[num1][num2] = soltn[num1][num2];
        display(board, rows,cols);
        alert("Game Over. You lose!");
        return true;
    }else{
        cascade(board,soltn,rows,num1,num2);
        display(board,rows,cols);
        return false;
    }
}



//Uncover tiles, determine if more than one
//may be uncovered
//Input
//      board, soltn, rows, num1, num2
//Output
//      none
//      reference board
function cascade(board,soltn,rows,num1,num2){
    int count = 0;
    //Test center of board
    //If any mines surround the chosen tile, only 
    //uncover the chosen tile
    if ((num1>0 && num1<rows-1)&&(num2>0 && num2<rows-1)){
        for(var n=(num1-1); n<=(num1+1); n++){
            for(var x=(num2-1); x<=(num2+1); x++){
                if (soltn[n][x] == '*'){
                    count++;
                }
            }
        }
        if(count > 0){
            board[num1][num2] = soltn[num1][num2];
            return;
        }
        //If no mines surround the chosen tile, uncover
        //all adjacent to the chosen tile
        else{
            for(var n=(num1-1); n<=(num1+1); n++){
                for(var x=(num2-1); x<=(num2+1); x++){
                    board[n][x] = soltn[n][x];
                }
            }
        }
    //Test corners, only a partial cascade to remain in bounds of array
    }else{
        uncvCnr(board,soltn,rows,num1,num2);
    }
}

//Test corners, uncover only what's in the array
//Input
//      board, soltn, rows, num1, num2
//Output
//      none
//      reference board
function uncvCnr(board,soltn,rows,num1,num2){
    if(num1==0){
            if(num2==0){
                if((soltn[num1][num2+1] == '*')||(soltn[num1+1][num2+1] == '*')
                    ||(soltn[num1+1][num2] == '*')){
                    board[num1][num2] = soltn[num1][num2];
                    return;
                }else{
                    board[num1][num2] = soltn[num1][num2];
                    board[num1][num2+1] = soltn[num1][num2+1];
                    board[num1+1][num2] = soltn[num1+1][num2];
                    board[num1+1][num2+1] = soltn[num1+1][num2+1];
                }
            }else if(num2>0 && num2<rows-1){
                if((soltn[num1][num2-1] == '*')||(soltn[num1][num2+1] == '*')
                    ||(soltn[num1+1][num2-1] == '*')
                    ||(soltn[num1+1][num2+1] == '*')
                    ||(soltn[num1+1][num2] == '*')){
                    board[num1][num2] = soltn[num1][num2];
                    return;
                }else{
                    board[num1][num2] = soltn[num1][num2];
                    board[num1][num2-1] = soltn[num1][num2-1];
                    board[num1][num2+1] = soltn[num1][num2+1];
                    board[num1+1][num2] = soltn[num1+1][num2];
                    board[num1+1][num2+1] = soltn[num1+1][num2+1];
                    board[num1+1][num2-1] = soltn[num1+1][num2-1];
                }
            }else{//if num2==8
                if((soltn[num1][num2-1] == '*')||(soltn[num1+1][num2-1] == '*')
                    ||(soltn[num1+1][num2] == '*')){
                    board[num1][num2] = soltn[num1][num2];
                    return;
                }else{
                    board[num1][num2] = soltn[num1][num2];
                    board[num1][num2-1] = soltn[num1][num2-1];
                    board[num1+1][num2] = soltn[num1+1][num2];
                    board[num1+1][num2-1] = soltn[num1+1][num2-1];
                }
            }
        }else if(num1>0 && num1<rows-1){
            if(num2==0){
                if((soltn[num1-1][num2] == '*')||(soltn[num1-1][num2+1] == '*')
                    ||(soltn[num1][num2+1] == '*')||(soltn[num1+1][num2] == '*')
                    ||(soltn[num1+1][num2+1] == '*')){
                    board[num1][num2] = soltn[num1][num2];
                    return;
                }else{
                    board[num1][num2] = soltn[num1][num2];
                    board[num1-1][num2] = soltn[num1-1][num2];
                    board[num1-1][num2+1] = soltn[num1-1][num2+1];
                    board[num1][num2+1] = soltn[num1][num2+1];
                    board[num1+1][num2] = soltn[num1+1][num2];
                    board[num1+1][num2+1] = soltn[num1+1][num2+1];
                }
            }else{//if num2==8
                if((soltn[num1-1][num2] == '*')||(soltn[num1-1][num2-1] == '*')
                    ||(soltn[num1][num2-1] == '*')||(soltn[num1+1][num2] == '*')
                    ||(soltn[num1+1][num2-1] == '*')){
                    board[num1][num2] = soltn[num1][num2];
                    return;
                }else{
                    board[num1][num2] = soltn[num1][num2];
                    board[num1-1][num2] = soltn[num1-1][num2];
                    board[num1-1][num2-1] = soltn[num1-1][num2-1];
                    board[num1][num2-1] = soltn[num1][num2-1];
                    board[num1+1][num2] = soltn[num1+1][num2];
                    board[num1+1][num2-1] = soltn[num1+1][num2-1];
                }
            }
        }else{//if num1==8
            if(num2==0){
                if((soltn[num1-1][num2] == '*')||(soltn[num1-1][num2+1] == '*')
                    ||(soltn[num1][num2+1] == '*')){
                    board[num1][num2] = soltn[num1][num2];
                    return;
                }
                else{
                    board[num1][num2] = soltn[num1][num2];
                    board[num1-1][num2] = soltn[num1-1][num2];
                    board[num1-1][num2+1] = soltn[num1-1][num2+1];
                    board[num1][num2+1] = soltn[num1][num2+1];
                }
            }else if(num2>0 && num2<rows-1){
                if((soltn[num1][num2-1] == '*')||(soltn[num1][num2+1] == '*')
                    ||(soltn[num1-1][num2-1] == '*')
                    ||(soltn[num1-1][num2] == '*')
                    ||(soltn[num1-1][num2+1] == '*')){
                    board[num1][num2] = soltn[num1][num2];
                    return;
                }else{
                    board[num1][num2] = soltn[num1][num2];
                    board[num1][num2-1] = soltn[num1][num2-1];
                    board[num1][num2+1] = soltn[num1][num2+1];
                    board[num1-1][num2-1] = soltn[num1-1][num2-1];
                    board[num1-1][num2] = soltn[num1-1][num2];
                    board[num1-1][num2+1] = soltn[num1-1][num2+1];
                }
            }else{//if num2==8
                if((soltn[num1][num2-1] == '*')||(soltn[num1-1][num2-1] == '*')
                    ||(soltn[num1-1][num2] == '*')){
                    board[num1][num2] = soltn[num1][num2];
                    return;
                }else{
                    board[num1][num2] = soltn[num1][num2];
                    board[num1][num2-1] = soltn[num1][num2-1];
                    board[num1-1][num2-1] = soltn[num1-1][num2-1];
                    board[num1-1][num2] = soltn[num1-1][num2];
                }
            }
        }
}

//Choose level and assign board accordingly
//Input
//      choice, mines, soltn, rows, cols
//Output
//      none
//      reference mines, rows, cols
//Need to return 3 thing
function chsLevel(choice,mines,soltn,rows,cols){
    //ifstream game;
    switch(choice){
        case 1:{
            cout << "You have chosen Level: Easy " << endl;
            cout << endl;
            //game.open("Game1.txt");
            rows = cols = 9;
            mines = 10;
            //Read in solution
            //read from file into soltn array
            readSol(soltn,rows,cols,game);
            break;}
        case 2:{
            cout << "You have chosen Level: Not so Easy " << endl;
            cout << endl;
            //game.open("Game2.txt");
            rows = cols = 16;
            mines = 40;
            readSol(soltn,rows,cols,game);
            break;}
        default:
            break;
    }
}

/*
//Read in solution from file
//Input
//      game, rows, cols, mineswp
//Output
//      none
//      reference game
void readSol(char game[][COL], int rows, int cols, ifstream& mineswp){
    for(int i=0; i<rows; i++){
        for(int j=0; j<cols; j++){
            mineswp >> game[i][j];
        }
    }
    mineswp.close();
    //Test input
//    for(int i=0; i<ROWS; i++){
//        for(int j=0; j<COL; j++){
//            cout << game[i][j];
//        }
//        cout << endl;
//    }
}

//Display flags on the winners board
//Input
//      soltn, rows, cols, winner
//Output
//      none
//      reference winner
function wnrsBrd(soltn,rows,cols,winner){
    var x=0;
    for(var i=0; i<rows; i++){
        for(var j=0; j<cols;j++){
            if(soltn[i][j]=='*')winner[x++]='F';
            else winner[x++]=soltn[i][j];
        }
    }
    //Output winners board
    for(var x=0; x<rows*cols; x++){
        cout << winner[x] << "   ";
        if(x%cols==cols-1){
            cout << endl;
        }
    }
	return winner;
}

//Calculate total time and points awarded
//Display points
//Input
//      begin, end, mines, rows
//Output
//      none
function points(begin,end,mines,rows){
    //Display amount of time
    var totTime =  end - begin;
    //cout << "You completed this level in " 
    //        << totTime << " seconds. " << endl;
    //Calculate points
    var pts = 0;
    //2 points for every mine survived
    pts += mines * 3;
    //1 point for each tile on the board
    pts += rows*rows;
    //Subtract points for time
    if (totTime > 40){
        totTime -= 40;
        //Subtract 3 points for every 5 seconds over 40
        pts -= (totTime%5) * 3;
    }
    
	//Display points
    //cout << "You have been awarded " << pts << " points!" << endl;
    //Write points to file
    //ofstream points;
    //points.open("Points.txt",ios::app);
    //points << setw(4);
    //points << pts;
    //points.close();
    
	//Sort winners
    //srtWnrs();
}

/*
//Sort winners and print top 5 high scores
//to file
//Input
//      none
//Output
//      none
void srtWnrs(){
    ifstream win, point;
    string name;
    int num;
    vector<string> names;
    vector<int> numbers;
    win.open("Winners.txt");
    point.open("Points.txt");
    //Read in values into vectors
    while(!win.eof()){
        win >> name;
        names.push_back(name);
    }
    
    while(!point.eof()){
        point >> num;
        numbers.push_back(num);
    }
    //Sort points in order from highest to lowest
    mrkSort(names,numbers);
    
//    //Print out all scores to console
//    cout << endl;
//    cout << "Order of Scores" << endl << endl;
//    for(int i=0; i<numbers.size(); i++){
//        cout << names[i] << " ";
//        cout << numbers[i];
//        cout << endl;
//    }
    //Write top 5 scores to file
    ofstream topScr;
    topScr.open("HighScores.txt");
    for(int i=0;(i<numbers.size()&&i!=5);i++){
        topScr << i+1 << ". " << names[i]
                << ": " << numbers[i] << " " << endl;
    }
    win.close();
    point.close();
    topScr.close();
}

//Sort scores and names from highest score
//to lowest score
//For functions
//      mrkSort,minPos,swap,swap
//return a and b
void mrkSort(a,b){
    for(var i=0;i<b.size()-1;i++){
        minPos(a,b,i);
    }
}

//return a and b (arrays)
function minPos(a,b,int pos){
    for(var i=pos+1;i<b.size();i++){
        if(b[pos]<b[i]){
            swap(a[pos],a[i]);
            swap(b[pos],b[i]);
        }
    }
}

//return a and b
function swap(a,b){
    var temp=a;
    a=b;
    b=temp;
}

//return a and b
function swap(a,b){
    var temp=a;
    a=b;
    b=temp;
}*/
