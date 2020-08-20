let container = document.createElement('div');
container.classList.add('container', 'p-5');

let highScoreDiv = createHighScoreDiv();

let name_score_arr2 = JSON.parse(sessionStorage.getItem('name_score_array'));
name_score_arr2.sort(function(a, b) {
    return b.score - a.score;
});
console.log('length in high score page is: ' + name_score_arr2.length);
console.log('sorted array is:' + JSON.stringify(name_score_arr2));

container.appendChild(highScoreDiv);

for(let i=0;i<name_score_arr2.length;i++) {
    container.appendChild(createScoreDiv(name_score_arr2[i]));
}

let goHomeButtonDiv = createButtonDiv('Go Home', 'triviaDBQuiz.html');
document.body.append(container, goHomeButtonDiv);




/**
 * Function to create  score Div 
 */
function createScoreDiv(name_score) {
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row', 'm-5', 'd-flex', 'justify-content-center');
    rowDiv.setAttribute('style', 'font-size:30px;font-weight:bold');
    rowDiv.innerText = name_score['userName'] + ': ' + name_score['score'];
    return rowDiv;   
}


/**
 * Function to create high score Div
 */
function createHighScoreDiv() {
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row', 'm-5', 'd-flex', 'justify-content-center', 'text-primary');
    rowDiv.setAttribute('style', 'font-size:30px;font-weight:bold');
    rowDiv.innerText = 'High Score';
    return rowDiv;
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
