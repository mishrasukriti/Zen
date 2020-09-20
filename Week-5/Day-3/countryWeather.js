var url= 'https://restcountries.eu/rest/v2/all';

getCountry();

/**
 * Function to get rest countries Data
 */
async function getCountry(){
    try{
        var allCountry= await fetch(url);
        var allCountryJson = await allCountry.json();
        
        let finalData = allCountryJson;
        
        
        let container= document.createElement('div');
        container.classList.add('container', 'p-5', 'backgroundImage');
        

        //Creating heading for page
        let heading = document.createElement('h1');
        heading.textContent = 'Rest Countries Data';
        heading.setAttribute('style', 'font-size: 90px;font-weight:bold; color:whitesmoke;text-align:center');

        container.appendChild(heading);
    
        // Loop Creating Rows
        for(let i=0; i<finalData.length; i++){
            let rowDiv = document.createElement('div');
            rowDiv.classList.add('row');

            let col1Div = createColumn(finalData[i++]);
            rowDiv.appendChild(col1Div);
            if(i<finalData.length) {
                let col2Div = createColumn(finalData[i++]);
                rowDiv.appendChild(col2Div);
            } 

            if(i<finalData.length) {
                let col3Div = createColumn(finalData[i]);
                rowDiv.appendChild(col3Div);
            } 

            

            container.appendChild(rowDiv);
        }
        document.body.append(container);
    }

    catch(err){
        console.log(err);
    }
}

 
/**
 * Function to create coloumn
 * @param {Rest country List} finalData 
 */
 function createColumn(finalData){
    let colDiv = document.createElement('div');
    //col-md-6 p-5
    colDiv.setAttribute('class', 'col-lg-4 col-sm-6 p-5');

    // Creating card for a country
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.setAttribute('style', ' background: rgb(227,231,143);background: linear-gradient(90deg, rgba(227,231,143,1) 0%, rgba(37,37,40,1) 75%, rgba(31,34,34,1) 100%);');

    //Creating Country Name Div
    let nameDiv = document.createElement('div');
    //nameDiv.classList.add('h-50', 'd-inline-block');
    
    let name = document.createElement('h5');
    name.classList.add('card-title');
    name.setAttribute('style', 'font-size: 24px; text-align:center; background-color:black; color:white; ')
    name .innerText = finalData.name;
    nameDiv.appendChild(name);

    // Getting url for image of flag
    let imageURL= finalData.flag;
    let imageDiv= document.createElement('div');
    imageDiv.setAttribute('style', 'p-5');
    let image= document.createElement('img');
    image.setAttribute('src', imageURL);
    image.classList.add('card-img-top', 'img-fluid', 'p-3');

    imageDiv.appendChild(image);
    
    // Creating div for Card Body
    let cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('p-4');
    cardBodyDiv.setAttribute('style', 'color:white;');
    
    
    let capital = createParagraphForCardBody(`Capital : ${finalData.capital}`);
    let region = createParagraphForCardBody(`Region : ${finalData.region}`);
    let countryCode = createParagraphForCardBody(`Country Code : ${finalData.alpha3Code}`);
    
    

    let latitude= finalData.latlng[0];
    let longitude= finalData.latlng[1];
    
    let buttonDiv = document.createElement('div');
    buttonDiv.classList.add('text-center');
    let getDetails = createButton(latitude, longitude);

    buttonDiv.appendChild(getDetails);
    

    //Appenders
    cardBodyDiv.append(capital, region, countryCode , buttonDiv);
    cardDiv.append( nameDiv, imageDiv, cardBodyDiv);
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
 * Function to create button
 */

 function createButton(lat, lon){
    let getDetails = document.createElement('button');
    getDetails.setAttribute('type', 'button');
    getDetails.classList.add('btn', 'btn-primary');
    getDetails.innerText= 'Check Weather';
    let url_string1 = 'https://api.openweathermap.org/data/2.5/weather?lat=';
     let url_string2 = '&appid=a421b15d9970e5c08a67c82f0b67f444';
     let final_url = url_string1 + lat+ '&lon='+ lon + url_string2 ;



    getDetails.addEventListener('click', async function (){
        var countryCaseData= await fetch(final_url);
        var countryCaseDataJSON = await countryCaseData.json();
        
        let alertString = extractAlertString(countryCaseDataJSON);
        //let description = countryCaseDataJSON.weather[0].description;

        Swal.fire({
            title: alertString,
            width: 600,
            padding: '3em',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          })

        //alert(alertString);
    })
     return getDetails;
 }

 /**
  * Function to extract alert string
  */
  function extractAlertString(arr){
    
      let weatherDescription= arr.weather[0].description;
      let main = arr.main;
      let temparature = main.temp;
      let pressure = main.pressure;
      let humidity = main.humidity;
      let sea_level = main.sea_level;
      let alertString = `Weather Description : ${weatherDescription} \n Temparature : ${temparature} \n Pressure : ${pressure} \n Humidity : ${humidity} \n Sea Level : ${sea_level}`;
       return alertString;
  }


