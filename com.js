console.log('Client side javascript is loaded.')
const locationForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')
const out = document.querySelector('#help-content')
var outputText;
locationForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    //test
    //message1.textContent = 'Loading...'
    message1.textContent = 'Loading';
    message2.textContent = '';
   fetch('https://hushedhomes.herokuapp.com/noise?address=' + location).then((response) => { //sends location variable to json
       response.json().then((data) => { //receives data
           console.log(data);
        if (data.error) {
          message1.textContent = data.error
        } else {
            message1.textContent = data.location
            message2.textContent = data.latitude + " " + data.longitude
            changeMap();
	    outputText = data.noiseFactors.join().replace(/,/g, '\n\n');
	    outputText = "The RED Lines represent low flying airplane paths \n" + outputText;
	    out.textContent = outputText;
	    airports(data.latitudesAP, data.longitudesAP, data.runways);
            //receive info from server.
        }
    })
})
})
