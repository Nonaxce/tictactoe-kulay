/*
* XO XO - anonymouse
*/


// DOM
// box
const dialouge = document.getElementById("dialouge")

// init grid boxes
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const b9 = document.getElementById("b9");

// add event listeners
b1.addEventListener('click', () => {placeSymbol(1)});
b2.addEventListener('click', () => {placeSymbol(2)});
b3.addEventListener('click', () => {placeSymbol(3)});
b4.addEventListener('click', () => {placeSymbol(4)});
b5.addEventListener('click', () => {placeSymbol(5)});
b6.addEventListener('click', () => {placeSymbol(6)});
b7.addEventListener('click', () => {placeSymbol(7)});
b8.addEventListener('click', () => {placeSymbol(8)});
b9.addEventListener('click', () => {placeSymbol(9)});

// behold thy logic
let board = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];
// shortcut for console.log
const e = (what) => {
    console.log(what);
}
// shows array in console
const sb = (array) => {
    let board = "";
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++) {
            board += `${array[i][j]} `;
        }
        board += "\n";
    }
    console.log(board)
}

// player class with functions
// it's not exactly necessary to create a class but I just wanted to for the sake of learning oop
class Player {
    #name;                  // their playername
    #score = 0;             // their score
    symbol;                 // their symbol
    isTurn = false;         // bool: is it this player's turn?
    
    constructor(name, symbol) {
        this.#name = name;
        this.symbol = symbol;
    }

    // get score
    get score() {
        return this.#score;
    }

    // increases score by 1
    increaseScore() {
        this.#score += 1;
    }
}

// store the 2 player objects 
let playerArr = [];
// decides who will be the first to move 
const whoseFirst = () => {
    // generates either 0 or 1 
    const who = Math.floor(Math.random()*1);

    if (who == 0) {
        playerArr[0].isTurn = true;
    } else {
        playerArr[1].isTurn = true;
    }
}

    // placing symbols
const placeSymbol = (box) => {
    let sym = currentPlayer().symbol;
    let boxIndex = {i: undefined, j: undefined}
    //switch(box){case 1:boxIndex={i:0,j:0};break;case 2:boxIndex={i:0,j:1};break;case 3:boxIndex={i:0,j:2};break;case 4:boxIndex={i:1,j:0};break;case 5:boxIndex={i:1,j:1};break;case 6:boxIndex={i:1,j:2};break;case 7:boxIndex={i:2,j:0};break;case 8:boxIndex={i:2,j:1};break;case 9:boxIndex={i:2,j:2};break;default:e("yep not workibng")}
    
    switch(box) {
        case 1:
            boxIndex = {i: 0, j: 0};
            break;
        case 2:
            boxIndex = {i: 0, j: 1};
            break;
        case 3:
            boxIndex = {i: 0, j: 2};
            break;
        case 4:
            boxIndex = {i: 1, j: 0};
            break;
        case 5:
            boxIndex = {i: 1, j: 1};
            break;
        case 6:
            boxIndex = {i: 1, j: 2};
            break;
        case 7:
            boxIndex = {i: 2, j: 0};
            break;
        case 8:
            boxIndex = {i: 2, j: 1};
            break;
        case 9:
            boxIndex = {i: 2, j: 2};
            break;
        default:
            e("yep not workibng");
    }
    if (currentPlayer().isTurn == true) {
        switch(box) {
            case 1:
                board[0][0] = sym;
                b1.textContent = sym;
                break;
            case 2:
                board[0][1] = sym;
                b2.textContent = sym;
                break;
            case 3:
                board[0][2] = sym;
                b3.textContent = sym;
                break;
            case 4:
                board[1][0] = sym;
                b4.textContent = sym;
                break;
            case 5:
                board[1][1] = sym;
                b5.textContent = sym;
                break;
            case 6:
                board[1][2] = sym;
                b6.textContent = sym;
                break;
            case 7:
                board[2][0] = sym;
                b7.textContent = sym;
                break;
            case 8:
                board[2][1] = sym;
                b8.textContent = sym;
                break;
            case 9:
                board[2][2] = sym;
                b9.textContent = sym;
                break;
            default:
                e(`${board}`);
                return e("???")
        }
    } else {
        e('yeah smth went wohrng')
    }
    
    sb(board);
    // checkMatch(box, sym, boxIndex);
    // check for matches
    checkMATCHES15Liner(sym);
    // change turn
    changeTurn();
}


function checkMatch(box, sym, boxIndex) {
    console.time("a")
    const i = boxIndex.row;
    const j = boxIndex.col;
    switch (box) {
        case 1:
            if ((board[i+1][j] == sym && board[i + 2][j] == sym) || 
                (board[i][j+1] == sym && board[i][j + 2] == sym) || 
                (board[i+1][j+1] == sym && board[i+2][j+2] == sym)) {
                console.log("1")
            }
            break;
        case 2:
            if ((board[i][j-1] == sym && board[i][j+1] == sym) || 
                (board[i][j+1] == sym && board[i][j+2] == sym)) {
                console.log("2")
            }
            break;
        case 3:
            console.log("a")
            if ((board[i+1][j-1] == sym && board[i+2][j-2] == sym) || 
                (board[i+1][j-1] == sym && board[i+2][j-2] == sym) || 
                (board[i+1][j] == sym && board[i+2][j] == sym)) {
                console.log("3");
            }
            break;
        case 4:
            if ((board[i][j+1] == sym && board[i][j+2]) || 
                (board[i-1][j] == sym && board[i-1][j] == sym)) {
                console.log("4")
            }
            break;
        case 5:
            // AGHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
            if ((board[i+1][j] == sym && board[i-1][j]) || (board[i][j-1] == sym && board[i][j+1] == sym) || (board[i-1][j-1] == sym && board[i+1][j+1] == sym) || 
                (board[i+1][j-1] == sym && board[i-1][j+1] == sym)) {
                console.log("5")
            }
            break;
        case 6:
            if ((board[i-1][j] && board[i-2][j]) || 
                (board[i][j+1] && board[i][j-1])){
                console.log("6")
            }
            break;
        case 7:
            
            
            
        default:
            console.log("this is not")
        
    }
    console.timeEnd("a")
}


// compacter version
// checks matches for all 
const checkMATCHES15Liner = (sym) => {
    if ((board[0][0] == sym && board[1][0] == sym && board[2][0] == sym) || 
        (board[0][0] == sym && board[0][1] == sym && board[0][2] == sym) || 
        (board[0][0] == sym && board[1][1] == sym && board[2][2] == sym) || 
        (board[1][1] == sym && board[0][1] == sym && board[2][1] == sym) || 
        (board[1][1] == sym && board[1][0] == sym && board[1][2] == sym) || 
        (board[2][0] == sym && board[1][1] == sym && board[0][2] == sym) ||
        (board[2][2] == sym && board[2][1] == sym && board[2][0] == sym) || 
        (board[2][2] == sym && board[1][2] == sym && board[0][2] == sym))
    {
        board = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
        currentPlayer().increaseScore();
        dialouge.innerHTML = `<h1>${sym} Won!</h1>`;
        ROYGBIVANDMORE(); // ooooooh
    } 
}

// changes the turn to the next player
const changeTurn = () => {
    if (playerArr[0].isTurn) {
        playerArr[0].isTurn = false;
        playerArr[1].isTurn = true;
    } else if(playerArr[1].isTurn) {
        playerArr[1].isTurn = false;
        playerArr[0].isTurn = true
    }
}

// returns player who has the turn
const currentPlayer = () => {
    if(playerArr[0].isTurn) {
        return playerArr[0];
    } else {
        return playerArr[1];
    }
}


playerArr.push(new Player("hello", "X"));
playerArr.push(new Player("hi", "O"));

whoseFirst();


const ROYGBIVANDMORE = () => {
    setInterval(() => {
    	document.getElementById("whole").style.backgroundColor = `hsl(${Math.floor(Math.random()*250)}, 50%, 50%)`;
    }, 100)
}







 
 
 