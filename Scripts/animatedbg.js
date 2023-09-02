let bgAnimated = document.createElement("div");
bgAnimated.className = "bgAnime";
bgAnimated.classList.add("row");
document.body.appendChild(bgAnimated);

for (let i = 0; i < 12; i++) {
    const col = document.createElement("div");
    col.className = "col-pixel";
    bgAnimated.appendChild(col);

}



const totalPixelPerCol = 50;
bgAnimated.childNodes.forEach(element => {
    for (let currentCountPixelPerCol = 0; currentCountPixelPerCol < totalPixelPerCol; currentCountPixelPerCol++) {
        let pixelAnime = document.createElement("span");
        pixelAnime.className = "pixelAnime";
        element.appendChild(pixelAnime)

    }

});

// 


function animateRainPixel(arrayPixel) {
    setTimeout(() => {
        for (let i = 0; i < arrayPixel.length; i++) {

            setTimeout(() => { arrayPixel[i].classList.toggle("switchLight"); }, 50 * i)
        };
    }, Math.random() * 10000)
}

const arrayColPixels = document.querySelectorAll(".col-pixel");

function animateRainOnColRandom(arrayColPixels) {

    for (let i = 0; i < arrayColPixels.length; i++) {
        setInterval(() => {
            animateRainPixel(arrayColPixels[i].childNodes);
        }, 1 + (Math.random() * 1200))
    }


}

animateRainOnColRandom(arrayColPixels);
// function animateRdmPixel() {

//     let pixelsAnimes = document.querySelectorAll(".pixelAnime");
//     let rdmPixel = Math.floor(Math.random() * pixelsAnimes.length);
//     pixelsAnimes[rdmPixel].classList.toggle("switchLight");
// }

