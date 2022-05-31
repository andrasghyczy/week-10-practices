setInterval(save, 5000);

async function save () {
    const textArea = document.querySelector("#doc-text");
    const docText = textArea.value; // input field tartalma

    const saveText = document.querySelector('#save-in-progress-text');
    saveText.classList.remove('hidden'); // class változtatása,hogy előtűnjön mentés közben, levesszük a "hidden" class css propertieit

    await fetch("http://127.0.0.1:9000/", { // a / után lehetne írni, hogy save és akkor a backendben egy adatbázisba lementené //
        method: "POST",
        body: docText
    })
        saveText.classList.add('hidden');
    }); 
}


/*fetch("http://127.0.0.1:9000/", { // a / után lehetne írni, hogy save és akkor a backendben egy adatbázisba lementené //
        method: "POST",
        body: docText
    }).then(function () { // visszajött a válasz rá, a .then() kezeli a feliratot
        saveText.classList.add('hidden');
    }); */