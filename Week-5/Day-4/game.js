// Fetch quiz data
getQuizData();
// let allQuestions = getQuizData();
// console.log('All questions: '+ allQuestions);
// let arrIndex=0;


/**
 * Function to get data from triviDB 
 */
async function getQuizData(){
    try{
        let data = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple');
        let finalData = await data.json();
        let allQuestions = finalData.results;
        let nameScoreArr = JSON.parse(sessionStorage.getItem('name_score_array'));
        console.log('play again nameScoreArr is:' + JSON.stringify(nameScoreArr));
        if(nameScoreArr === null || nameScoreArr === undefined) {
            nameScoreArr = [];
            console.log('In Null/Undefined: play again nameScoreArr is:' + JSON.stringify(nameScoreArr));
        }
        sessionStorage.setItem('allQuestions', JSON.stringify(allQuestions));
        sessionStorage.setItem('currQuesIndex', 0);
        sessionStorage.setItem('score', 0);
        sessionStorage.setItem('disabled', false);
        sessionStorage.setItem('name_score_array', JSON.stringify(nameScoreArr));
        
        formQuestion(allQuestions, 0);
        
        
    }

    catch(err){
        console.log(err);
    }

}


function formQuestion(allQuestions, questionNum) {
    // Created Container Div
    let questionData = allQuestions[0]
    let container = document.createElement('div');
    container.classList.add('container', 'p-5');

    let headerRowDiv = createHeaderDiv(questionNum);
    let progressBarDiv = createProgressBarDiv(questionNum);
    let questionDiv = createQuestionDiv(questionData.question);

    container.append(headerRowDiv, progressBarDiv, questionDiv);

    let answerOptions = buildAnswerOptions(questionData);
    for(let i=0; i<answerOptions.length; i++) 
    {   
        let optionRow = createOptionRow( String.fromCharCode(i + 65), answerOptions[i]);
        container.appendChild(optionRow);
    };

    document.body.append(container);


}


function createOptionRow(optionPrefix, option) {
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row', 'border', 'border-info', 'm-3');
    
    let col1Div = document.createElement('div');
    col1Div.classList.add('col-sm', 'bg', 'bg-primary', 'd-flex', 'justify-content-center');
    col1Div.setAttribute('style', 'color: white; font-size:20px');
    col1Div.innerText= optionPrefix;
    

    let col2Div = document.createElement('div');
    col2Div.classList.add('col-11');
    col2Div.setAttribute('style', 'font-size:15px');
    col2Div.id = 'option-' + optionPrefix;
    col2Div.innerText = option;

    rowDiv.append(col1Div, col2Div);

    col2Div.addEventListener('click', onOptionclick);

    return rowDiv;
}

/**
 * 
 * @param {*} questionData 
 */
function onOptionclick(e) {
    let isDisabled = sessionStorage.getItem('disabled');
    if(isDisabled === 'false') {
        sessionStorage.setItem('disabled', true);
        let allQuestions = JSON.parse(sessionStorage.getItem('allQuestions'));
        let currQuesIndex = parseInt(sessionStorage.getItem('currQuesIndex'));
    
        let clickedAnswer = e.target.innerText;
        if(clickedAnswer === allQuestions[currQuesIndex].correct_answer) {
            e.target.classList.add('bg', 'bg-success');
            let currScore = parseInt(sessionStorage.getItem('score'));
            sessionStorage.setItem('score', currScore+10);
            document.getElementById('score').innerText = currScore+10;
        } else {
            e.target.classList.add('bg', 'bg-danger');
        }
        
        setTimeout(function() {
            e.target.classList.remove('bg');
            if(e.target.classList.contains('bg-success'))e.target.classList.remove('bg-success');
            if(e.target.classList.contains('bg-danger'))e.target.classList.remove('bg-danger');
            if(currQuesIndex===9) {
                window.location.href = 'end.html'; 
            }
        
            document.getElementById('question-content').innerText = allQuestions[currQuesIndex+1].question;
            let newOptionsArray = buildAnswerOptions(allQuestions[currQuesIndex+1]);
        
            for(let i=0;i<4;i++) {
                let optionId = 'option-' + String.fromCharCode(i+65);
                document.getElementById(optionId).innerText = newOptionsArray[i];
            }
        
            document.getElementById('ques-num-div').innerText = `Question ${currQuesIndex+2}/10`;

            console.log('got the progress bar:' + document.getElementById('progress-bar').getAttribute('aria-valuenow'));
            document.getElementById('progress-bar').setAttribute('style', `width: ${10*(currQuesIndex+2)}%`);
            
            sessionStorage.setItem('currQuesIndex', currQuesIndex+1);
            sessionStorage.setItem('disabled', false);
        }, 1000);
    }
    
}

function buildAnswerOptions(questionData) {
    let answerOptions = [];
    let incorrect_ans_index = 0;

    let correctAnswerIndex = Math.floor(Math.random()*1000)%4;
    for(let i=0;i<correctAnswerIndex;i++) {
        answerOptions.push(questionData.incorrect_answers[incorrect_ans_index++]);
    }
    answerOptions.push(questionData.correct_answer);
    for(let i=correctAnswerIndex+1;i<4;i++) {
        answerOptions.push(questionData.incorrect_answers[incorrect_ans_index++]);
    }
    return answerOptions;
}

/**
 * 
 * @param {question detail} questionData 
 */
function createQuestionDiv(question) {
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row', 'mt-5', 'd-flex', 'justify-content-left');
    rowDiv.setAttribute('style', 'font-size:25px');

    let colDiv = document.createElement('div');
    colDiv.classList.add('col');
    colDiv.id = 'question-content';
    colDiv.innerText = question;

    rowDiv.append(colDiv);
    return rowDiv;
}

/**
 * Function to create progress bar div with progress bar and score
 */
function createProgressBarDiv(questionNum) {
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    rowDiv.setAttribute('style', 'font-size:25px');

    let progressBarCol = document.createElement('div');
    progressBarCol.classList.add('col-6');

    let progressDiv = document.createElement('div');
    progressDiv.classList.add('progress', 'd-flex', 'justify-content-left', 'mt-4', 'border', 'border-primary');
    progressDiv.setAttribute('style', 'height:30px;');

    let progressBarDiv = document.createElement('div');
    progressBarDiv.classList.add('progress-bar', 'd-flex', 'justify-content-left');
    progressBarDiv.id = 'progress-bar';
    progressBarDiv.setAttribute('role', 'progressbar');
    progressBarDiv.setAttribute('aria-valuenow', '10');
    progressBarDiv.setAttribute('aria-valuemin', '0');
    progressBarDiv.setAttribute('aria-valuemax', '100');
    progressBarDiv.setAttribute('style', `width: ${10*(questionNum+1)}%`);

    progressDiv.append(progressBarDiv);
    progressBarCol.append(progressDiv);

    let scoreDiv = document.createElement('div');
    scoreDiv.classList.add('col-6', 'd-flex', 'justify-content-end', 'text', 'text-primary', 'pr-5');
    scoreDiv.innerText = 0;
    scoreDiv.id = 'score';
    
    rowDiv.append(progressBarCol, scoreDiv);
    
    return rowDiv;
}

/**
 * Function to create header
 * @param {question number} questionNum 
 */
function createHeaderDiv(questionNum) {
    let headerRowDiv = document.createElement('div');
    headerRowDiv.classList.add('row', 'mt-5');
    headerRowDiv.setAttribute('style', 'font-size:30px');
    
    let questionNumberDiv = document.createElement('div');
    questionNumberDiv.setAttribute('class', 'col-6 d-flex justify-content-left');
    questionNumberDiv.id = 'ques-num-div';
    questionNumberDiv.innerText = `Question ${questionNum+1}/10`;
    
    let scoreDiv = document.createElement('div');
    scoreDiv.setAttribute('class', 'col-6 d-flex justify-content-end');
    scoreDiv.innerText = 'Score';

    headerRowDiv.append(questionNumberDiv, scoreDiv);
    return headerRowDiv;
}
