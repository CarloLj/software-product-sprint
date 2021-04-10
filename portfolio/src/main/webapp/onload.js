function addViewLoad(){
    firebase.database()
    .ref()
    .child('Pagecounter')
    .child('views')
    .set(firebase.database.ServerValue.increment(1))
    //fetch('/add-view'); //Uses servlets to update the page view number "onload" of the page
}

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
