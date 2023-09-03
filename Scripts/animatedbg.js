let bgAnimated = document.createElement("div");
bgAnimated.className = "bgAnime";
bgAnimated.classList.add("row");
document.body.appendChild(bgAnimated);

// !!
const nmbCol = 50;
const totalPixelPerCol = 80;
const vitesseRain = 500;
const minimumDelay = 1000;
const randomRange = 6000;
// !!


for (let i = 0; i < nmbCol; i++) {
    const col = document.createElement("div");
    col.className = "col-pixel";
    bgAnimated.appendChild(col);

}


bgAnimated.childNodes.forEach(element => {
    for (let currentCountPixelPerCol = 0; currentCountPixelPerCol < totalPixelPerCol; currentCountPixelPerCol++) {
        let pixelAnime = document.createElement("span");
        pixelAnime.innerText = "IB";
        pixelAnime.className = "pixelAnime";
        element.appendChild(pixelAnime)

    }

});

function animateRainPixel(arrayPixel) {

    for (let i = 0; i < arrayPixel.length; i++) {

        setTimeout(() => { arrayPixel[i].classList.toggle("switchLight"); }, vitesseRain * i)
    };

}

const arrayColPixels = document.querySelectorAll(".col-pixel");

function animateRainOnColRandom(arrayColPixels) {


    for (let i = 0; i < arrayColPixels.length; i++) {
        setInterval(() => {
            animateRainPixel(arrayColPixels[i].childNodes);
        }, (minimumDelay + Math.random() * randomRange));
    }

}




animateRainOnColRandom(arrayColPixels);
// function animateRdmPixel() {

//     let pixelsAnimes = document.querySelectorAll(".pixelAnime");
//     let rdmPixel = Math.floor(Math.random() * pixelsAnimes.length);
//     pixelsAnimes[rdmPixel].classList.toggle("switchLight");
// }

