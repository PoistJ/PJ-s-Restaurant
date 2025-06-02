import ramenImg from "./ramen.svg";

export function loadHome() {
    const content = document.getElementById("content");

    const solidBack = document.createElement("div");
    solidBack.style.backgroundColor = "#90e0ef"
    solidBack.style.height = "96%";
    solidBack.style.width = "80vw";
    solidBack.style.display = "flex";
    solidBack.style.flexDirection = "column";
    solidBack.style.alignItems = "center";
    content.appendChild(solidBack);

    const headerDiv = document.createElement("div");
    headerDiv.style.backgroundColor = "#457b9d";
    headerDiv.style.width = "60%";
    headerDiv.style.display = "flex";
    headerDiv.style.alignItems = "center";
    headerDiv.style.justifyContent = "center";
    headerDiv.style.borderStyle = "solid";
    headerDiv.style.borderWidth = "10px";
    headerDiv.style.borderColor = "#caf0f8";
    headerDiv.style.margin = "20px";
    solidBack.appendChild(headerDiv);

    const leftRamenImg = document.createElement("img");
    leftRamenImg.src = ramenImg;
    leftRamenImg.style.height = "100px";
    leftRamenImg.style.width = "100px";
    leftRamenImg.style.margin = "10px";
    headerDiv.appendChild(leftRamenImg);

    const headline = document.createElement("div");
    headline.innerText = "PJ's Ramen & Izakaya";
    headline.className = "headline";
    headline.style.color = "white";
    headline.style.fontSize = "2.5em";
    headline.style.margin = "20px";
    headerDiv.appendChild(headline);

    const rightRamenImg = document.createElement("img");
    rightRamenImg.src = ramenImg;
    rightRamenImg.height = "100";
    rightRamenImg.width = "100";
    headerDiv.appendChild(rightRamenImg);

    const sloganDiv = document.createElement("div");
    sloganDiv.style.backgroundColor = "#457b9d";
    sloganDiv.style.width = "60%";
    sloganDiv.style.display = "flex";
    sloganDiv.style.flexDirection = "column";
    sloganDiv.style.borderStyle = "solid";
    sloganDiv.style.borderWidth = "10px";
    sloganDiv.style.borderColor = "#caf0f8";
    sloganDiv.style.margin = "20px";
    sloganDiv.style.flex = "auto";
    solidBack.appendChild(sloganDiv);

    const slogan = document.createElement("div");
    slogan.innerText = "Kamurocho's #1 top rated ramen & izakaya joint!";
    slogan.className = "slogan";
    slogan.style.color = "white";
    slogan.style.margin = "50px 0px 30px 0px";
    slogan.style.textAlign = "center";
    slogan.style.fontSize = "1.5em";
    slogan.style.flex = "auto";
    slogan.style.alignContent = "center";
    sloganDiv.appendChild(slogan);

    const editor = document.createElement("div");
    editor.innerText = "- Millenium Editorial";
    editor.style.color = "white";
    editor.style.fontSize = "1.1em";
    editor.style.alignSelf = "end";
    editor.style.margin = "30px";
    sloganDiv.appendChild(editor);

    const hoursDiv = document.createElement("div");
    hoursDiv.style.backgroundColor = "#457b9d";
    hoursDiv.style.borderStyle = "solid";
    hoursDiv.style.borderColor = "#caf0f8";
    hoursDiv.style.borderWidth = "10px";
    hoursDiv.style.width = "60%";
    hoursDiv.style.display = "flex";
    hoursDiv.style.flexDirection = "column";
    hoursDiv.style.flex = "auto";
    hoursDiv.style.margin = "20px";
    solidBack.appendChild(hoursDiv);

    const hoursHeader = document.createElement("div");
    hoursHeader.innerText = "Hours";
    hoursHeader.style.color = "white";
    hoursHeader.style.fontSize = "1.5em";
    hoursHeader.style.margin = "10px 10px 10px 30px";
    hoursDiv.appendChild(hoursHeader);

    const hoursInfo = document.createElement("div");
    hoursInfo.innerHTML =
        "Monday - Thursday: 9am - 10pm<br />Friday - Saturday: 9am - 11pm<br    />Sunday: 10am - 7pm";
    hoursInfo.style.color = "white";
    hoursInfo.style.alignSelf = "center";
    hoursInfo.style.textAlign = "center";
    hoursInfo.style.fontSize = "1.5em";
    hoursInfo.style.margin = "10px";
    hoursInfo.style.flex = "auto";
    hoursDiv.appendChild(hoursInfo);
};
