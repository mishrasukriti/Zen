async function randomWord(){
    let word = await fetch('https://random-word-api.herokuapp.com/word?number=1');
    let wordJSON = await word.json();
    return wordJSON[0];
}

async function getGiphy(){
    let randWord = await randomWord();
    
    let url = `https://api.giphy.com/v1/gifs/search?api_key=rwdpMe7Rav7SZ74IQ1HOIyWcS5dJsEHN&q=${randWord}&limit=5&offset=0&rating=g&lang=en`;
    let giphy = await fetch(url);
    let giphyJson = await giphy.json();
    let giphyData= giphyJson.data;
    console.log(giphyData);


    

    for(let i=0; i<giphyData.length; i++){
        let imageDiv = document.createElement('div');
        imageDiv.setAttribute('class', 'card');
        let image = document.createElement('object');
        
        image.setAttribute('data', giphyData[i]["images"]["original"]["url"]);
        imageDiv.appendChild(image);
        document.body.append(imageDiv);

    }
    //document.body.append(imageDiv);


}

getGiphy();



// for(let i=0; i<data.length; i++){

// }

