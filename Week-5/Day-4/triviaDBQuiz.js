
// Created Container Div
let container = document.createElement('div');
container.classList.add('container', 'p-5');

let headingDiv = document.createElement('div');
headingDiv.setAttribute('class', 'row m-4 d-flex justify-content-center');

let heading = document.createElement('h1');
heading.setAttribute('style', 'color:#56a5eb;');
heading.innerText = 'Quick Quiz';

headingDiv.append(heading);

let playButtonDiv = document.createElement('div');
playButtonDiv.setAttribute('class', 'row m-4 d-flex justify-content-center');

let playButton = document.createElement('a');
playButton.setAttribute('href', 'game.html');
playButton.setAttribute('class', 'btn btn-info btn-lg');
playButton.innerText = 'Play';
playButtonDiv.append(playButton);

let highScoreButtonDiv = document.createElement('div');
highScoreButtonDiv.setAttribute('class', 'row m-4 d-flex justify-content-center');
let highScoreButton = document.createElement('a');
highScoreButton.setAttribute('href', 'highScore.html');
highScoreButton.setAttribute('class', 'row btn btn-info btn-lg');
highScoreButton.innerText = 'High Score';
highScoreButtonDiv.append(highScoreButton);


container.append(headingDiv, playButtonDiv, highScoreButtonDiv);
document.body.append(container);
