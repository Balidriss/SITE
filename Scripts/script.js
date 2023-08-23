let rowJSONContenu;

function changeLangue(lang) {

    fetch('JSON/contenu.json')

        .then(response => response.json())


        .then(data => {
            const elements = document.querySelectorAll('[contenu]');

            elements.forEach(
                element => {
                    const key = element.getAttribute('contenu');

                    if (data[lang] && data[lang][key]) {

                        element.style.display = 'block';
                        element.innerHTML = data[lang][key];

                    }

                });

        })
        .catch(error => { console.error('probleme JSON introuvable') });


}


function detecteLangue() {
    console.log(navigator.language);

    return navigator.language != 'fr' ? 'en' : 'fr';
}


changeLangue(detecteLangue());

