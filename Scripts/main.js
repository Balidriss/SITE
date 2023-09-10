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
                myAge += ".";
                document.querySelector(".age").innerHTML += myAge;

                //
            }

        })
        .catch(error => { console.error('probleme JSON introuvable') });


}


function detecteLangue() {
    console.log(navigator.language);

    return navigator.language != 'fr' ? 'en' : 'fr';
}