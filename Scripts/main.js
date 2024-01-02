changeLangue(detecteLangue());
function getMyAge() {
    currentDate = new Date().getFullYear();

    return currentDate - 1989;

}

function changeLangue(lang) {

    fetch('JSON/contenu.json')
        .then(response => response.json())
        .then(data => {
            if (data) {
                const elements = document.querySelectorAll('[contenu]');
                elements.forEach(
                    element => {
                        const key = element.getAttribute('contenu');
                        if (data[lang] && data[lang][key]) {
                            element.style.display = 'inline';
                            element.innerHTML = data[lang][key];
                        }
                    });
                // inserer variables ici
                let myAge = getMyAge();
                document.querySelector(".age").innerHTML += myAge;
                let endpoint = ".";

                if (lang == 'fr') {
                    console.log("detect");
                    endpoint = " ans.";

                }
                document.querySelector(".age").innerHTML += endpoint;
                //
            }

        })
        .catch(error => { console.error('probleme JSON introuvable') });


}


function detecteLangue() {


    return navigator.language != 'fr' ? 'en' : 'fr';
}