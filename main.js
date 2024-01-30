/*
* XO XO - anonymouse
*/


// DOM
// box
const dialougeElem = document.getElementById("dialouge");
const gridElem = document.getElementById("grid");

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
const b10 = document.getElementById("b10")

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

    get name() {
        return this.#name;
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

// changes the turn to the next player
const changeTurn = () => {
    if (playerArr[0].isTurn) {
        playerArr[0].isTurn = false;
        playerArr[1].isTurn = true;
    } else if(playerArr[1].isTurn) {
        playerArr[1].isTurn = false;
        playerArr[0].isTurn = true;
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

    // placing symbols
const placeSymbol = (box) => {
    let sym = currentPlayer().symbol;
    let boxIndex = {i: null, j: null}
    //switch(box){case 1:boxIndex={i:0,j:0};break;case 2:boxIndex={i:0,j:1};break;case 3:boxIndex={i:0,j:2};break;case 4:boxIndex={i:1,j:0};break;case 5:boxIndex={i:1,j:1};break;case 6:boxIndex={i:1,j:2};break;case 7:boxIndex={i:2,j:0};break;case 8:boxIndex={i:2,j:1};break;case 9:boxIndex={i:2,j:2};break;default:e("yep not workibng")}
    
    // returns the indexes of the current boxes as an object
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
    // checks if it's the current player's turn and if the board is unoccupied
    if (currentPlayer().isTurn == true && (board[boxIndex.i][boxIndex.j] == 0)) {
        switch(box) {
            case 1:
                board[0][0] = sym;
                b1.textContent = sym;   // sticks the symbol to the box in the grid 
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
                // very excellent error handling (*/w＼*)
                e(`${board}`);
                return e("0_0 ??? INTRUDER ALERT!!! ? >:[")
        }
    } else {
        e('yeah smth went wohrng')
    }
    
    sb(board);
    // check for matches
    let currentPlayerVar = currentPlayer();
    checkMATCHES(sym, currentPlayerVar);
    // change turn
    changeTurn();
}


// checks all 8 possible lines one could make in the grid
const checkMATCHES = (sym, player) => {
    // an if condition of about 608 characters long
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
        resetGrid();
        player.increaseScore();
        dialougeElem.innerHTML = `<h1>${sym} Won!</h1> "${player.name}"`;
        ROYGBIVANDMORE(); 
    // checks if the board occupied and no match has been found
    } 
    else if (board[0][0] && board[0][1] && board[0][2] && board[1][0] && board[1][1] && board[1][2] && board[2][0] && board[2][1] && board[2][2])
    {
        resetGrid();
        dialougeElem.innerHTML = `<h1>Tie</h1>`;
    }
}

const resetGrid = () => {
    board = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
    b1.textContent = null;
    b2.textContent = null;
    b3.textContent = null;
    b4.textContent = null;
    b5.textContent = null;
    b6.textContent = null;
    b7.textContent = null;
    b8.textContent = null;
    b9.textContent = null;
}

// flashy stuff
const ROYGBIVANDMORE = () => {
    setInterval(() => {
    //                                                                    random hue                   sat  light
    	document.getElementById("grid").style.backgroundColor = `hsl(${Math.floor(Math.random()*260)}, 70%, 50%)`;
    }, 100)
}

// the main function is called when the document and dom is finished loading
document.addEventListener(('DOMContentLoaded'), () => {
    // creates two players
    playerArr.push(new Player("hello", "X"));
    playerArr.push(new Player("hi", "O"));

    // decides which player is first by random chance
    whoseFirst();
});
