/** Fetches the current date from the server and adds it to the page. */
async function showServerTime() {
    //Hacer un await permite que se espere a que se termine el fetch para seguir con el codigo
  const responseFromServer = await fetch('/date');
  /*The responseFromServer variable contains a 
  response object, which provides a few 
  functions that let you access different 
  types of content. In this case the reponse 
  is plain text, so the code calls the text() 
  function*/
  /*Now that the textFromResponse variable 
  contains the text content, that text can be 
  added to the webpage*/
  const textFromResponse = await responseFromServer.text();
 //Async nos permite que cuando hagamos fetch no realentize nuestro codigo y lo hace del lado del server
  
 const dateContainer = document.getElementById('date-container');
  dateContainer.innerText = textFromResponse;
}
