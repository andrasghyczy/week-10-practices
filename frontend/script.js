const googleSearchButton = document.querySelector("#btn-google-search"); // kikeressük a button-t, amit figyelni szeretnénk //

googleSearchButton.addEventListener("click",function (event){ // a button-re rátesszük a "click" eseményfigyelőt//
    event.preventDefault(); // preventDefault() megakadályozza az a submitolást, annak érdekében, hogy pl tudjunk alert üzenetet megadni / validálni az inputot//
    
    const form = document.querySelector("#form-google-search"); // kikeressük a form-ot Elements-->Copy--->Copy JS path //
    const searchTerm = form.querySelector('input[name="q"]').value; // kikeressük form-on belül az input tag [name="q"] értékét a .valueval//

    if (searchTerm === ''){ //megvizsgálja, hogy üres-e a form//
        alert("Írj be valamit!");
    } else {
        form.submit; // submitolja a formot //
    }
})

console.log(googleSearchButton);