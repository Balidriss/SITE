let bgAnimated = document.getElementById("bgAnime");

function createPixel() {
    let pixelAnime = document.createElement("span");
    pixelAnime.setAttribute("class", "pixelAnime");
    bgAnimated.appendChild(pixelAnime);
}





let box = document.querySelector('#bgAnime');
let width = box.clientWidth;
let height = box.clientHeight; // ??? 0 ???
console.log({ width, height });
createPixel();

let pixelSelector = document.querySelector(".pixelAnime");
console.log(document.getElementsByClassName("pixelAnime"));
pixelWidth = pixelSelector.clientWidth;
console.log(pixelWidth);

let totalPixel = (width / pixelWidth) * (400 / pixelWidth);




for (let i = 3; i <= totalPixel; i++) {
    createPixel()
}

AnimatePixel = () => {
    let pixelsAnimes = document.querySelectorAll(".pixelAnime");
    let position = Math.floor(Math.random() * pixelsAnimes.length);
    pixelsAnimes[position].classList.toggle("switchLight");

}

setInterval(AnimatePixel, 5);
