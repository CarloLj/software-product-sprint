/* JS FOR THE SERVLETS PART */
async function viewmore(){
    const responseFromServer = await fetch('/counter-date');
    const stats = await responseFromServer.text();
    const counterContainer = document.getElementById('pagecounter-text');
    if(counterContainer.hasChildNodes()){
        counterContainer.removeChild();
    }
    var y = document.createTextNode(stats);
    counterContainer.appendChild(y);
}

function addViewLoad(){
    fetch('/add-view'); //Uses servlets to update the page view number "onload" of the page
}

/* JS FOR THE QUOTE CARROUSEL */
function addQuotesOnLoad(){
    const quotescontainer = document.getElementById('quotescontainer');
    fetch("https://type.fit/api/quotes") //Fetches an array of a quote API
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        for (var i = 0; i < 5; i++) { //Searches for 5 random quotes 
            const randomval = Math.floor(Math.random() * data.length);
            const textcontainer = document.getElementById('text'+i);
            const authorcontainer = document.getElementById('author'+i);
            textcontainer.innerHTML = data[randomval].text;
            authorcontainer.innerHTML = "-"+data[randomval].author;
        }
    });
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function requestTranslation1(){
    const texts = document.querySelectorAll('[id=translate-element]')
    const languageCode = document.getElementById('language').value;
    const originaltexts = [];

    texts.forEach(element=>{
        originaltexts.push(element.innerText);
        element.innerText="Translating...";
    })
    
    /*
    const requestPromiseArray = originaltexts.map(element => {
        const params = new URLSearchParams();
        params.append('text', element);
        params.append('languageCode', languageCode);
        return fetch('/translate', {
            method: 'POST',
            body: params
        })
    })

    const response = Promise.all(requestPromiseArray);

    originaltexts.forEach((element, i) => {
        console.log(response[i].text);
        element.text = response[i].text;
    })
    */
    var i = 0;
    originaltexts.forEach(element=>{
        const params = new URLSearchParams();
        params.append('text', element);
        params.append('languageCode', languageCode);
        texts[i].innerText = getTranslatedMessage(params)
        i++;
    })
}

async function getTranslatedMessage(paramss){
    var mensaje = "";
    const responsee = await fetch('/translate', {
            method: 'POST',
            body: paramss
        }).then(response => response.text())
            .then((translatedMessage) => {
                mensaje = translatedMessage;
            });
    console.log(mensaje)
    return mensaje;
}

/*TRANSLATE*/
function requestTranslation(){
    const text = document.getElementById('text').value;
    const languageCode = document.getElementById('language').value;

    const resultContainer = document.getElementById('result');
    resultContainer.innerText = 'Loading...';

    const params = new URLSearchParams();
    params.append('text', text);
    params.append('languageCode', languageCode);

    fetch('/translate', {
        method: 'POST',
        body: params
    }).then(response => response.text())
        .then((translatedMessage) => {
            resultContainer.innerText = translatedMessage;
        });
}