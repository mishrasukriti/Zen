// Created Container Div
let container = document.createElement('div');
container.classList.add('container', 'p-5');

let headerDiv = createHeader();

container.append(headerDiv);
document.body.append(container);
displayData();

/**
 * 
 *Function to create header
 */
function createHeader(){
    let headerDiv =document.createElement('form');
    headerDiv.classList.add('row');
    let urlDiv = createTextBox('Enter the song Url','url');
    let userNameDiv = createTextBox('Name','name');

    let submitButtonDiv = createSubmitButton();

    headerDiv.append(urlDiv, userNameDiv, submitButtonDiv);
    return headerDiv;
}

/**
 * Function to create user Name Div
 */
function createTextBox(placeholder, id) {
    let textBoxDiv = document.createElement('div');
    textBoxDiv.classList.add('col-5', 'd-flex', 'justify-content-center', 'p-2', 'input-group' ,'input-group-lg');
    

    let textBox = document.createElement('input');
    textBox.classList.add('form-control', 'border', 'border-primary','d-flex', 'justify-content-center');
    textBox.setAttribute('type', 'text');
    textBox.setAttribute('placeholder', placeholder);
    // textBox.setAttribute('style', );
    textBox.id = id;
    textBoxDiv.append(textBox);
    return textBoxDiv;
}

/**
 * Function to create Save Button
 */
function createSubmitButton(){
    let buttonDiv = document.createElement('div');
    buttonDiv.setAttribute('class', 'col-2  d-flex justify-content-center');

    let button = document.createElement('button');
    button.setAttribute('class', 'btn btn-info ');
    button.setAttribute('type','submit');
    button.innerText = 'Add to PlayList';
    buttonDiv.append(button);

    button.addEventListener('click', async function(event){
        try{
            var url =  document.getElementById('url').value;
            console.log('url is: '+ url );
            var name =  document.getElementById('name').value;
            await fetch('https://5f3f62f044212d0016feca12.mockapi.io/firstMusicApp',{
                method: "POST",
                body: JSON.stringify({
                    url: `${url}`,
                    name: `${name}`
                }),
                headers:{
                    "Content-type" : "application/json; charset = UTF-8"
                }
            });
            console.log("url sent");
            
            let audioDiv = createAudioDiv();

            container.append(audioDiv);
        }
        catch(err){
            console.log(err);
        }
        
    });

    return buttonDiv;
}

async function createAudioDiv(){
    try{
        let audioDiv = document.createElement('div');
    audioDiv.classList.add('row');

    let name = document.createElement('p');
    name.classList.add(col-3);
    name.innerText= fetchSongDatafromAPI('name');

    let audio = document.createElement('audio');
    audio.setAttribute('controls','true');
    audio.classList.add(col-6);
    let source = document.createElement('source');
    source.setAttribute('type', 'audio/mpeg');
    let songUrl = await fetchSongDatafromAPI('url');
    source.setAttribute('src', songUrl);
    audio.appendChild(source);

    audioDiv.append(name , audio);  
    return audioDiv;
    }

    catch(err){
        console.log(err);
    }
}


async function fetchSongDatafromAPI(key){
    try{
        let data = await fetch('https://5f3f62f044212d0016feca12.mockapi.io/firstMusicApp');
        let finalData = await data.json();
        
        console.log('finalData is : '+ finalData);

        return finalData[finalData.length-1].key;
        
    }

    catch(err){
        console.log(err);
    }
 
}

async function displayData(){
    let data= await fetch('https://5f3f62f044212d0016feca12.mockapi.io/firstMusicApp');
    let arr = await data.json();
    console.log('arr is: '+ arr);
    for(i of arr){
        let songDiv = document.createElement('div');
        songDiv.setAttribute('class', 'row');
        //songDiv.setAttribute('style', 'margin-left:30px;margin-top:50px;');

        let name = document.createElement('p');
        //name.classList.add(col-3);
        name.innerText= `${i['name']}`;

        let audio = document.createElement('audio');
        audio.controls = true;

        let song_src = document.createElement('source');
        song_src.setAttribute('src', `${i['url']}`)
        audio.appendChild(song_src);

        songDiv.append(name, audio);


        container.appendChild(songDiv);
    }
}








