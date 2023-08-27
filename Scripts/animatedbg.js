let bgAnimated = document.getElementById("bgAnime");
let resolutionPixel = 500; //a touché

let box = document.querySelector('#bgAnime');
let width = box.clientWidth;
let height = box.clientHeight;

console.log({ width, height });

for (let i = 1; i <= resolutionPixel; i++) {
    let pixelAnime = document.createElement("span");
    pixelAnime.setAttribute("class", "pixelAnime");
    bgAnimated.appendChild(pixelAnime);
}

Animate = () => {
    let pixelsAnimes = document.querySelectorAll(".pixelAnime");
    let position = Math.floor(Math.random() * pixelsAnimes.length);
    pixelsAnimes[position].classList.toggle("switchLight");

}

setInterval(Animate, 5);
