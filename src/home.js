import ramenImg from "./ramen.svg";

export function loadHome() {
    const content = document.getElementById("content");
    
    const image = document.createElement("img");
    image.src = ramenImg;
    image.height = "100";
    image.width = "100";

    content.appendChild(image);

    const headline = document.createElement("div");
    headline.innerText = "PJ's Ramen & Izakaya";
    headline.className = "headline";

    content.appendChild(headline);

    const slogan = document.createElement("div");
    slogan.innerText = "Woodbridge's #1 top rated ramen & izakaya joint!";
    slogan.className = "slogan";

    content.appendChild(slogan);
};
