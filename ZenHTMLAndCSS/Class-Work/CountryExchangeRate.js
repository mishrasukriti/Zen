var url= 'https://api.covid19api.com/summary';


async function getCountry(){
    try{
        var allCountry= await fetch(url);
        var allCountryJson = await allCountry.json();

        let container= document.createElement('div');
         container.classList.add('container', 'p-5', 'backgroundImage');
        let finalData = allCountryJson.Countries;
        
        for(let i=0; i<finalData.length; i++){
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
    }

    catch(err){
        console.log(err);
    }
}

 getCountry();

 function createColumn(finalData){
    let colDiv = document.createElement('div');
    colDiv.setAttribute('class', 'col-md-6 p-5');

    // Creating card for a country
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    
    
    // Creating div for Card Body
    let cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('p-4');
    
    let nameDiv = document.createElement('h5');
    nameDiv.classList.add('card-title');
    nameDiv.setAttribute('style', 'font-size: 24px; text-align:center;')
    nameDiv .innerText = finalData.Country;

    let countryCode = createParagraphForCardBody(`Country Code : ${finalData.CountryCode}`);
    let Slug = createParagraphForCardBody(`Slug : ${finalData.Slug}`);
    let NewConfirmed = createParagraphForCardBody(`New Confirmed : ${finalData.NewConfirmed}`);
    let TotalConfirmed = createParagraphForCardBody(`Total Confirmed : ${finalData.TotalConfirmed}`);
    let NewDeaths = createParagraphForCardBody(`New Deaths  : ${finalData.NewDeaths}`);
    let TotalDeath = createParagraphForCardBody(`Total Death  : ${finalData.TotalDeath}`);
    let NewRecovered = createParagraphForCardBody(`New Recovered  : ${finalData.NewRecovered}`);
    let Date = createParagraphForCardBody(`Date : ${finalData.Date}`);

    
    let getDetails = createButton(finalData.Slug);


    

    //Appenders
    cardBodyDiv.append(nameDiv, countryCode , Slug , NewConfirmed , TotalConfirmed, NewDeaths, TotalDeath , NewRecovered, Date, getDetails);
    cardDiv.append( cardBodyDiv);
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

 function createButton(slug){
    let getDetails = document.createElement('button');
    getDetails.setAttribute('type', 'button');
    getDetails.classList.add('btn', 'btn-primary');
    getDetails.innerText= 'Get Details';
    //let url = 'https://api.covid19api.com/country/south-africa?from=2020-08-18T00:00:00Z&to=2020-08-19T00:00:00Z';
    let url_string1 = 'https://api.covid19api.com/country/';
    let url_string2 = '?from=2020-08-18T00:00:00Z&to=2020-08-19T00:00:00Z';
    let url = url_string1 + slug + url_string2 ;



    getDetails.addEventListener('click', async function (){
        var countryCaseData= await fetch(url);
        var countryCaseDataJSON = await countryCaseData.json();
        //console.log(JSON.stringify(countryCaseDataJSON));
        //countryCaseDataArray = (countryCaseDataJSON);
        //console.log(countryCaseDataArray);
        let alertString = extractAlertString(countryCaseDataJSON);
        alert(alertString);
    })
    return getDetails;
 }

 /**
  * Function to extract alert string
  */
  function extractAlertString(arr){
      //let arr2 = JSON.parse(arr);
      let alertString = `Country : ${arr[0].Country} \n CountryCode : ${arr[0].CountryCode}`
      return alertString;
  }


