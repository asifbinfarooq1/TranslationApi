function qoute() {
    let a = document.getElementById("inp").value;
    const encodedParams = new URLSearchParams();
encodedParams.append("q", a);
encodedParams.append("target", "ur");
encodedParams.append("source", "en");

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': 'GET YOUR OWN API KEY FROM RAPID API',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	},
	body: encodedParams
};

fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
	.then(response => response.json())
	.then(data => { 
        console.log(data)

       document.getElementById("result").innerHTML =`${data.data.translations[0].translatedText}`
    })
	.catch(err => console.error(err));

}
