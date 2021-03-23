/* JS FOR THE SERVLETS PART UPDATE: USING FIREBASE */
function viewmore(){
    var rootRef = firebase.database().ref();
    var urlRef = rootRef.child("Pagecounter");
    urlRef.once("value", function(snapshot) {
        snapshot.forEach(function(child) {
            var texto = document.getElementById('pagecounter-text');
            var result = child.val();
            const n = "This page has been viewed: ";
            texto.innerHTML = n +" "+result+" times";
        })
    });
    /*
    const responseFromServer = await fetch('/counter-date');
    const stats = await responseFromServer.text();
    const counterContainer = document.getElementById('pagecounter-text');
    if(counterContainer.hasChildNodes()){
        counterContainer.removeChild();
    }
    var y = document.createTextNode(stats);
    counterContainer.appendChild(y);
    */
}

/* JS FOR THE QUOTE CARROUSEL */
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

async function requestTranslation1(){
    const texts = document.querySelectorAll('[id=translate-element]')
    const languageCode = document.getElementById('language').value;
    const originaltexts = [];

    texts.forEach(element=>{
        originaltexts.push(element.innerText);
        element.innerText="Translating...";
    })
    
  
    const requestPromiseArray = originaltexts.map(element => {
        const params = new URLSearchParams();
        params.append('text', element);
        params.append('languageCode', languageCode);
        return fetch('/translate', {
            method: 'POST',
            body: params
        }).then(response => response.text())
    })

    const response = await Promise.all(requestPromiseArray);

    texts.forEach((element, i) => {
        console.log(response[i]);
        element.innerText = response[i];
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