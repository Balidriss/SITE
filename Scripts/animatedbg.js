let bgAnimated = document.createElement("div");
bgAnimated.className = "bgAnime";
document.body.appendChild(bgAnimated);
let pixelAnime = document.createElement("span");
pixelAnime.className = "pixelAnime";
bgAnimated.appendChild(pixelAnime)
console.log(bgAnimated);

const row = 3;

for (let currentW = pixelAnime.clientWidth; currentW < bgAnimated.clientWidth * row; currentW += pixelAnime.clientWidth) {
    let pixelAnime = document.createElement("span");
    pixelAnime.className = "pixelAnime";
    bgAnimated.appendChild(pixelAnime)
    console.log(currentW, pixelAnime.clientWidth, bgAnimated.clientWidth);
}



setInterval(animateRdmPixel, 1000);








function getNmbPerRow(container, element) {
    console.log(container.clientWidth);
    console.log(element.clientWidth);
    return container.clientWidth / element.clientWidth;
}


function animateRdmPixel() {

    let pixelsAnimes = document.querySelectorAll(".pixelAnime");
    let rdmPixel = Math.floor(Math.random() * pixelsAnimes.length);
    pixelsAnimes[rdmPixel].classList.toggle("switchLight");
}

