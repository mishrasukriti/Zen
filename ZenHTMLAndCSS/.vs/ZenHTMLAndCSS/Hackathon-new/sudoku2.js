/**
 * Variables to be used across game
 */
var table;

// puzzle grid
var puzzle = [];

// solution grid 
var solution = [];

// variable to check if "Sudoku Solver" solve the puzzle
var isSolved = false;
var canSolved = true;

// Timer variables
var timer = 0;
var intervalId;
var gameOn = false;




/**
 * Function to create board table
 */
function createBoardDiv() {
    let board_div = document.createElement('div');
    board_div.setAttribute('style', 'background-color: pink;')

    let board_table = document.createElement('table');
    board_table.setAttribute('id', 'board-table');
    board_table.setAttribute('style', 'border:2px solid #000000');
    for(let i=1;i<=9;i++) {
        let tile_row = createTileRow();
        tile_row.id = 'tile-row' + i;
        board_table.appendChild(tile_row);
    }
    return board_div;
}

/**
 * Function to create a tile row for board table
 */
function createTileRow() {
    let tile_row = document.createElement('tr');
    // Appending 9 tiles to the row
    for(let i=1;i<=9;i++) {
        let tile = createATile();
        tile_row.appendChild(tile);
    }
    return tile_row;
}

/**
 * Function to create a Tile
 */
function createATile() {
    let tile_data = document.createElement('td');

    let tile_input_box = document.createElement('input');
    tile_input_box.type = 'text';
    tile_input_box.addEventListener('change', validateTileData());
    tile_input_box.innerText = '1';

    tile_data.appendChild(tile_input_box);
    return tile_data;
}

/**
 * Function to validate data is entered correctly in a tile input box
 */
function validateTileData() {

}

/**
 * Function to create Game status div
 */
function createGameStatusDiv() {
    let game_status_div = document.createElement('div');
    return game_status_div;
}

/**
 * Function to create Buttons bar
 */
function createButtonsBar() {
    let buttons_div = document.createElement('div');
    buttons_div.setAttribute('style', 'margin-top:40px;margin-left:600px')

    let startButton = document.createElement('button');
    startButton.addEventListener('click', startGame);
    startButton.innerText = 'Start New Game';

    let resetButton = document.createElement('button');
    resetButton.addEventListener('click', resetGame);
    resetButton.setAttribute('style', 'margin-left:40px');
    resetButton.innerText = 'Reset Game';

    buttons_div.append(startButton, resetButton);
    return buttons_div;
}

/**
 * Function to start game on clicking new game button
 */
function startGame() {

}

/**
 * Function to start game on clicking new game button
 */
function resetGame() {

}


/**
 * Varibles to be used across sudoku game design
 */


 

/**
 * Function to generate sudoku problem board from server https://sugoku.herokuapp.com/board?difficulty=easy
 */
function fetchSudokuProblemBoard() {
    var request = new XMLHttpRequest();
    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://sugoku.herokuapp.com/board?difficulty=easy' , true);
    request.onload = function() {
        dataArr = this.responseText;
        localStorage.setItem("jsonData", dataArr);
    }
    request.send();
}



window.onload = function () {

    /**
 * Div elements defining layout
 */
let outerDiv= document.createElement('div');
outerDiv.setAttribute('style', 'top:0px');
let container_div= document.createElement('div');

/**
 * Creating Title div
 */
let titleDiv= document.createElement('div');
titleDiv.innerText='Sudoku';
titleDiv.setAttribute('style', 'background-color: blue; font-size: 50px; color: white; display:flex; justify-content:center; height:80px; padding-top:20px;');

/**
 *  Creating board design
 */
let sudokuDiv= document.createElement('div');
sudokuDiv.id='sudoku';

let buttons_div = createButtonsBar();
let board_div = createBoardDiv();
let game_status_div= createGameStatusDiv();

//Appenders
sudokuDiv.append(buttons_div, board_div, game_status_div);
container_div.append(titleDiv, sudokuDiv);
outerDiv.append(container_div);
document.body.append(outerDiv);

    // Extracting board table
    table = document.getElementsByTagName('table')[0];
    console.log(table);

    //Creating empty table
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            var input = table.rows[i].cells[j].getElementsByTagName('input')[0];
            input.onchange = function () {

                //remove color from cell
                addClassToCell(this);

                // check if the new value entered is allowed
                function checkInput(input) {
                    if (input.value[0] < '1' || input.value[0] > '9') {
                        if (input.value != "?" && input.value != "؟") {
                            input.value = "";
                            alert("only numbers [1-9] and question mark '?' are allowed!!");
                            input.focus()
                        }
                    }
                }
                checkInput(this);
                //reset canSolved value when change any cell
                canSolved = true;
            };

            //change cell 'old value' when it got focused to track numbers and changes on grid
            input.onfocus = function () {
                this.oldvalue = this.value;
            };
        }
    }
}