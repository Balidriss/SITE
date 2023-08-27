let bgAnimated = document.getElementById("bgAnime");
let resolutionPixel = 1200; //a touché


for (let i = 1; i <= resolutionPixel; i++) {
    let pixel = document.createElement("span");
    pixel.setAttribute("class", "pixel");
    container.appendChild(pixel);
}