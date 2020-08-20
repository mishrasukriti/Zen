let container = document.createElement('div');
container.classList.add('container', 'p-5');

let scoreDiv = createScoreDiv();
let userNameDiv = createNameDiv();
let saveButtonDiv = createSaveButtonDiv();

let playAgainButtonDiv =  createButtonDiv('Play Again', 'game.html');
let goHomeButtonDiv = createButtonDiv('Go Home', 'triviaDBQuiz.html');

container.append(scoreDiv, userNameDiv, saveButtonDiv, playAgainButtonDiv, goHomeButtonDiv);
document.body.append(container);





function createSaveButtonDiv() {
    let buttonDiv = document.createElement('div');
    buttonDiv.setAttribute('class', 'row m-4 d-flex justify-content-center');

    let button = document.createElement('button');
    button.setAttribute('class', 'btn btn-info btn-lg');
    button.innerText = 'Save';
    buttonDiv.addEventListener('click', saveUserNameAndScore);
    buttonDiv.append(button);

    return buttonDiv;
}

/**
 * Function to update record in 'name_score_array'
 */
function saveUserNameAndScore() {
    let nameScoreArr = JSON.parse(sessionStorage.getItem('name_score_array'));

    let userName = document.getElementById('userName').value;
    let score = sessionStorage.getItem('score');

    let tempObj= {};
    tempObj['userName'] = userName;
    tempObj['score'] = score;

    nameScoreArr.push(tempObj);
    
    sessionStorage.setItem('name_score_array', JSON.stringify(nameScoreArr));
    console.log(sessionStorage.getItem('name_score_array'));
}

/**
 * Function to create button div
 * @param {button text} buttonText 
 */
function createButtonDiv(buttonText, href) {
    let buttonDiv = document.createElement('div');
    buttonDiv.setAttribute('class', 'row m-4 d-flex justify-content-center');

    let button = document.createElement('a');
    button.setAttribute('href', href);
    button.setAttribute('class', 'btn btn-info btn-lg');
    button.innerText = buttonText;
    buttonDiv.append(button);

    return buttonDiv;

}

/**
 * 
 */
function createNameDiv() {
    let userNameDiv = document.createElement('div');
    userNameDiv.classList.add('row', 'd-flex', 'justify-content-center', 'p-2', 'input-group' ,'input-group-lg');
    

    let textBox = document.createElement('input');
    textBox.classList.add('form-control', 'border', 'border-primary','d-flex', 'justify-content-center');
    textBox.setAttribute('type', 'text');
    textBox.setAttribute('placeholder', 'User Name');
    // textBox.setAttribute('style', );
    textBox.id = 'userName';
    userNameDiv.append(textBox);
    return userNameDiv;
}

/**
 * 
 */
function createScoreDiv() {
    let scoreDivRow = document.createElement('div');
    scoreDivRow.classList.add('row', 'text-primary', 'd-flex', 'justify-content-center');
    scoreDivRow.setAttribute('style', 'font-size: 80px;font-weight:bold; margin-top:100px');
    scoreDivRow.innerText = sessionStorage.getItem('score');
    return scoreDivRow;
}