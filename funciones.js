document.getElementById("myButton").addEventListener("click", buscar);


function buscar(n) {
    console.log(document.getElementsByName("text-input")[0].value)
    word = document.getElementsByName("text-input")[0].value.toString()
    console.log(word)
    url = "https://synonyms.reverso.net/sinonimo/es/" + word;
    fetch(url).then((response) => {
      // Our handler throws an error if the request did not succeed.
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status} `);
      }
      // Otherwise (if the response succeeded), our handler fetches the response
      // as text by calling response.text(), and immediately returns the promise
      // returned by `response.text()`.
      return response.text();
    })
    // When response.text() has succeeded, the `then()` handler is called with
    // the text, and we copy it into the `poemDisplay` box.
    // .then((text) => console.log( text))

    // .then(function(string) {
    //   var elem = document.createElement('div');
	  //   elem.innerHTML = string;
    //   // console.log(elem)
    //   // console.log(elem.getElementsByClassName("synonym "))
    // })

    .then(function(string) {
      // Convert the HTML string into a document object
      var parser = new DOMParser();
      var elem = parser.parseFromString(string, 'text/html');
      l = [];
      for (let i = 0; i < elem.getElementsByClassName("synonym ").length; i++) {
          l.push(elem.getElementsByClassName("synonym ")[i].textContent);
      }
      console.log(l);
      document.getElementById("respuesta").innerHTML = l.map(elem => "<li>"+elem+"</li>").join(" ");
    })

    // Catch any errors that might happen, and display a message
    // in the `poemDisplay` box.
    .catch((error) => console.log(`Could not fetch verse: ${error}`));
  }