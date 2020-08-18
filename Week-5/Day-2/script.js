var url= 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json';
method= 'Get';

let promiseData = makeRequest(method, url);

promiseData.then(function(finalData){

    // Creating container
    let container= document.createElement('div');
    container.classList.add('container', 'p-5', 'backgroundImage');

    //Creating heading for page
    let heading = document.createElement('h1');
    heading.textContent = 'Rest Countries Data';
    heading.setAttribute('style', 'font-size: 90px;font-weight:bold; color:whitesmoke;text-align:center')

    container.appendChild(heading);

    for(let i=0; i<finalData.length; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        let col1Div = createColumn(finalData[i++]);
        rowDiv.appendChild(col1Div);
        if(i<finalData.length) {
            let col2Div = createColumn(finalData[i]);
            rowDiv.appendChild(col2Div);
        } 
        container.appendChild(rowDiv);
    }

    document.body.append(container);
})

/**
 *  Declaring Function to create a column
 */
 function createColumn(finalData){
    let colDiv = document.createElement('div');
    colDiv.setAttribute('class', 'col-md-6 p-5');

    // Creating card for a country
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    // Getting url for image of flag
    let imageURL= finalData.flag;

    let image= document.createElement('img');
    image.setAttribute('src', imageURL);
    image.classList.add('card-img-top', 'img-fluid');
    
    // Creating div for Card Body
    let cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('p-4');
    
    let nameDiv = document.createElement('h5');
    nameDiv.classList.add('card-title');
    nameDiv.setAttribute('style', 'font-size: 24px; text-align:center;')
    nameDiv .innerText = finalData.name;

    let capital = createParagraphForCardBody(`Capital : ${finalData.capital}`);
    let region = createParagraphForCardBody(`Region : ${finalData.region}`);
    let latLng = createParagraphForCardBody(`Latlng : ${finalData.latlng}`);
    let currenciesName = createParagraphForCardBody(`Currency Name : ${finalData.currencies[0].name}`);
    let currenciesCode = createParagraphForCardBody(`Currency Code : ${finalData.currencies[0].code}`);
    let currenciesSymbol = createParagraphForCardBody(`Currency Symbol : ${finalData.currencies[0].symbol}`);

    //Appenders
    cardBodyDiv.append(nameDiv, capital, region, latLng, currenciesName , currenciesCode , currenciesSymbol);
    cardDiv.append(image , cardBodyDiv);
    colDiv.append(cardDiv);

    return colDiv;
 }

 /**
  * Function to generate a paragraph tag with given textContent as function parameter
  * @param {text content to be added in paragraph} textContent 
  */
 function createParagraphForCardBody(textContent) {
    let paragraph= document.createElement('p');
    paragraph.classList.add('card-text');
    paragraph.setAttribute('style', 'font-size: 20px; text-align:center');
    paragraph.innerText = textContent;
    return paragraph;
 }


/**
 *  Declaring function to make XMLHttp Request
 */
function makeRequest(method, url){
    return new Promise(function(resolve,reject){
        var request = new XMLHttpRequest();
        // Open a new connection, using the GET request on the URL endpoint
        request.open(method, url , true);
        //request.send();
        request.onload = function() {
            // Begin accessing JSON data here

            if(this.status>=200 && this.status<300)  {
                resolve(JSON.parse(this.responseText));
            }   
            else {
                reject({
                    status: this.status, statusText: request.statusText
                });
            }
        }
        request.onerror = function(){
            reject({
                status: this.status, statusText: request.statusText
            });
        };
        request.send();
    });
}