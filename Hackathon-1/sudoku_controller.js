/**
 * Div elements defining layout
 */
let outerDiv= document.createElement('div');
outerDiv.setAttribute('style', 'background-color: #FADDE1;');

let container_div= document.createElement('div');
container_div.setAttribute('style', 'height:100%;');

/**
 * Creating Title div
 */
let titleDiv= document.createElement('div');
titleDiv.innerText='Sudoku';
titleDiv.setAttribute('style', 'background-color: #FF5D8F; font-size: 50px; color: white; display:flex; justify-content:center; height:80px; padding-top:20px;font-family: Georgia, "Times New Roman, Times, serif;');

/**
 *  Creating board design
 */
let headerDiv = createHeaderDiv();
let gameBodyDiv = createGameBody();

//Appenders
container_div.append(titleDiv, headerDiv, gameBodyDiv);
outerDiv.append(container_div);
document.body.append(outerDiv);

/**
 * Variables to be used across game design
 */
var puzzleGrid;
var solutionGrid;
var timer;
var timeRemaining;
var selectedNum;
var selectedTile;
var disableSelect;

let boardCount = 0;

/**
 * Function to start the game.
 */
window.onload = function() {
    let startButton = document.getElementById('start-btn');
    startButton.classList.add('button');
    startButton.addEventListener('click', function() {
        // let board = boards[(boardCount++)%3][0];
        let puzzleAndSolutionGrids = generateGrid();
        puzzleGrid = puzzleAndSolutionGrids[0];
        solutionGrid = puzzleAndSolutionGrids[1];

        console.log("puzzleGrid is: " + puzzleGrid);
        console.log("solutionGrid is: " + solutionGrid);

        disableSelect = false;
        drawBoard(puzzleGrid);
        
        id('scoreP').textContent = 'Your Score:  0000/1000';
        startTimer();
        
        id('number-container').classList.remove("hidden");
    });

    let resetButton = id("reset-btn");
    resetButton.addEventListener('click', function() {
        let puzzleAndSolutionGrids = generateGrid();
        puzzleGrid = puzzleAndSolutionGrids[0];
        solutionGrid = puzzleAndSolutionGrids[1];
        disableSelect = false;
        drawBoard(puzzleGrid);
        startTimer();
    });

    // Add event Listener to each number in number container
     for(let i=0; i<id('number-container').children.length; i++){
        id('number-container').children[i].addEventListener('click', function(){
            // If selecting is not disabled
            if(disableSelect===false){
                // If number is already selected
                if(this.classList.contains('selected')){
                    // Then remove selection
                    this.classList.remove('selected');
                    selectedNum=null;
                }
                else {
                    // Deselect all other numbers
                    for(let i=0; i<9; i++){
                        id('number-container').children[i].classList.remove('selected');
                    }

                    // Select it and update selectNum variable
                    this.classList.add('selected');
                    selectedNum= this;
                    updateMove();
                }
            }
        });
     }
}


/**
 *  Function to check validity
 */
 function updateMove(){
     // If a tile and number is selected
     if(selectedTile && selectedNum){
         selectedTile.textContent= selectedNum.textContent;

         // If the number matches corresponding number in solution key
         if(checkCorrect(selectedTile)){
            // Deselect the tile
            selectedTile.classList.remove('selected');
            selectedTile.classList.add('filled');
            selectedNum.classList.remove('selected');

            // Clear the selected variables
            selectedNum= null;
            selectedTile = null;

            if(checkDone()) endGame();
         }
          // if the number doesn't match solution key
         else{
            // Disable selecting new numbers for one second
            disableSelect = true;
            
            selectedTile.classList.add('incorrect');

            // Run in 1 second
            setTimeout(function(){
                disableSelect = false;

                // Restore tile color and remove selected from both
                selectedTile.classList.remove('incorrect');
                selectedTile.classList.remove('selected');
                selectedNum.classList.remove('selected');

                selectedTile.textContent = '';
                selectedTile = null;
                selectedNum= null;
            }, 1000);
         }
     }
 }

 /**
  * Function to check if all the tiles are filled correctly
  */

  function checkDone(){
      let tiles= document.querySelectorAll('.tile');
      for(let i=0; i<tiles.length; i++){
          if(tiles[i].textContent === '') return false;
      }
      return true;
  }
 
/**
 *  Function to end the Game
 */
function endGame() {
    disableSelect= true;
    clearTimeout(timer);

    if(timeRemaining>0)  {
        id('congratulations-div').classList.remove('hide_congrats_div');
        setTimeout(function(){
            id('congratulations-div').classList.add('hide_congrats_div');    
        }, 6000);
        timeRemaining = 0;
        
        // alert("Congratulations, you have won !");
        let score = calculateScore(timeRemaining);
        id("scoreP").textContent = "Your Score:  " + score + "/1000";
    }
    else alert("You lost!! Better luck next time!");
}

function calculateScore(timeRemaining) {
    
    let timeTaken = 240-timeRemaining;
    if(timeTaken<60)return 1000;
    return parseInt(60*1000/timeTaken);
}

 /**
  * Function to check whether user have put the correct value in tile or not
  */
  function checkCorrect(tile){
    let solution = solutionGrid;
     // If tile's number is equal to solution's number
     if(solution.charAt(tile.id)=== tile.textContent ) return true;
     else return false;
  }

/**
 * Starts timer
 */
function startTimer() {
    timeRemaining = 240;
    let convertedRemainingTime = convertTime(timeRemaining);
    // console.log('found convertedTimeREmaining: ' + convertedRemainingTime);
    id('timerP').textContent = ("Time Remaining: " + convertedRemainingTime);
    // Set timer to update every second
    timer = setInterval(function() {
        timeRemaining--;
        if(timeRemaining === 0) endGame();
        id('timerP').textContent = ("Time Remaining: " + convertTime(timeRemaining));
    }, 1000);
}


/**
 * Converts time in seconds to minutes and seconds 
 */
function convertTime(time) {
    let minutes = Math.floor(time/60);
    if(minutes<10)minutes = "0" + minutes;
    let seconds = time % 60;
    if(seconds<10) seconds = "0" + seconds;
    return minutes + ":" + seconds;
    
}


/**
 * Function to draw board
 */
function drawBoard(board) {
    clearPreviousBoard();

    let idCount = 0;
    for(let i=0;i<81;i++) {
        let tile = document.createElement('p');
        if(board.charAt(i)!='-') {
            tile.innerText = board.charAt(i);
        } else {
            //Add click event listener later
            tile.addEventListener('click', function(){
                // If selecting is not disabled
                if(disableSelect===false){
                    // If the tile is already selected
                    if(tile.classList.contains('selected')){
                        // Then remove selection
                        tile.classList.remove('selected');
                        selectedTile=null;
                    }
                    else{
                        // Deselect all other tiles
                        for(let i=0; i<81; i++){
                            document.querySelectorAll('.tile')[i].classList.remove('selected');
                        }

                        // Add selected and update variable
                        tile.classList.add('selected');
                        selectedTile= tile;
                        updateMove();
;                    }
                }
            });
        }
        tile.id = idCount;
        idCount++;

        tile.classList.add('tile');
        if((tile.id > 17 && tile.id<27) || (tile.id>44 && tile.id<54)) {
            tile.classList.add("bottomBorder");
        }
        if((tile.id+1)%9 ==3 || (tile.id+1)%9 ==6) {
            tile.classList.add("rightBorder");
        }
        id("board").appendChild(tile);
    }
}

function clearPreviousBoard() {
    let tiles = document.querySelectorAll(".tile");

    for(let i=0;i<tiles.length;i++) {
        tiles[i].remove();
    }

    if(timer) clearTimeout(timer);

    // Deselect all number from number containers
    for(let i=0;i<id('number-container').children.length;i++) {
        id('number-container').children[i].classList.remove('selected');
    }
    selectedNum = null;
    selectedTile = null;
}

/**
 * Function to create Header div
 */
function createHeaderDiv() {
    let headerDiv= document.createElement('div');
    headerDiv.id='header';
    headerDiv.classList.add('headerDiv');

    let buttons_div = createButtonsBar();
    headerDiv.append(buttons_div);
    return headerDiv;
}

/**
 * Function to create Game c
 */
function createGameBody() {
    let game_body_div =  document.createElement('div');
    let congratulationsDiv = createCongratulationsDiv();
    let statsDiv = createGameStatsDiv();
    let board_number_container_div = createBoardAndNumberContainerDiv();
    game_body_div.append(congratulationsDiv, statsDiv, board_number_container_div);
    return game_body_div;
}

function createCongratulationsDiv() {
    let congratulationsDiv = document.createElement('div');
    congratulationsDiv.id = 'congratulations-div';
    congratulationsDiv.classList.add('hide_congrats_div');

    let congratsImage = document.createElement('img');
    congratsImage.setAttribute('src', 'https://media.tenor.com/images/3662a3689f597dfa2d90d889d8a80686/tenor.gif');
    congratsImage.setAttribute('width', '550px');
    congratsImage.setAttribute('height', '450px');
    congratsImage.setAttribute('style', 'margin-left:370px;align-content: center;');

    congratulationsDiv.append(congratsImage);

    return congratulationsDiv;
}

/**
 * Function to create board number container div
 */
function createBoardAndNumberContainerDiv() {
    let board_number_container_div = document.createElement('div');
    board_number_container_div.id = 'game';
    
    let board_div = document.createElement('div');
    board_div.id = 'board';
    
    let number_selector_div = createNumberSelectorDiv();
    
    board_number_container_div.append(board_div, number_selector_div);
    return board_number_container_div;
}

/**
 * Function to create Stats div to show timer.
 */
function createGameStatsDiv() {
    let statsDiv = document.createElement('div');
    statsDiv.id = 'stats';
    
    let timerParagraph = document.createElement('span');
    timerParagraph.id = 'timerP';

    let scoreParagraph = document.createElement('span');
    scoreParagraph.id = 'scoreP';

    statsDiv.append(timerParagraph, scoreParagraph);
    return statsDiv;
}

/**
 * Function to add digits 1 to 9 to number selector div
 */
function createNumberSelectorDiv() {
    let number_selector_div = document.createElement('div');
    number_selector_div.id = 'number-container';
    number_selector_div.classList.add('hidden');

    for(let i=1;i<=9;i++) {
        let p_tag = document.createElement('p');
        p_tag.id = 'num' + i;
        p_tag.innerText = i; 
        number_selector_div.appendChild(p_tag);
    }
    return number_selector_div;
}


function createButtonsBar() {
    let buttons_div = document.createElement('div');
    buttons_div.setAttribute('style', 'margin:10px;')

    let startButton = document.createElement('button');
    startButton.id = 'start-btn';
    //  startButton.addEventListener('click', startGame);
    startButton.innerText = 'Start New Game';

    let resetButton = document.createElement('button');
    //resetButton.addEventListener('click', resetGame);
    resetButton.id = 'reset-btn';
    resetButton.setAttribute('style', 'margin-left:40px');
    resetButton.innerText = 'Reset Game';

    buttons_div.append(startButton, resetButton);
    return buttons_div;
}

/**
 * Utility functions
 */
function id(id) {
    return document.getElementById(id);
}
