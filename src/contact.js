export function loadContact() {
    const content = document.getElementById("content");

    const solidBack = document.createElement("div");
    solidBack.style.backgroundColor = "#90e0ef"
    solidBack.style.height = "96%";
    solidBack.style.width = "80vw";
    solidBack.style.display = "flex";
    solidBack.style.flexDirection = "column";
    solidBack.style.alignItems = "center";
    solidBack.style.overflow = "scroll";
    content.appendChild(solidBack);

    const headerDiv = document.createElement("div");
    headerDiv.style.backgroundColor = "#457b9d";
    headerDiv.style.width = "60%";
    headerDiv.style.display = "flex";
    headerDiv.style.flexDirection = "column";
    headerDiv.style.alignItems = "center";
    headerDiv.style.justifyContent = "center";
    headerDiv.style.borderStyle = "solid";
    headerDiv.style.borderWidth = "10px";
    headerDiv.style.borderColor = "#caf0f8";
    headerDiv.style.margin = "20px";
    solidBack.appendChild(headerDiv);

    const contactHead = document.createElement("div");
    contactHead.innerText = "Contact Us";
    contactHead.style.fontSize = "2.5em";
    contactHead.style.margin = "20px";
    contactHead.style.color = "white";
    headerDiv.appendChild(contactHead);

    const location = document.createElement("div");
    location.style.backgroundColor = "#457b9d";
    location.style.width = "60%";
    location.innerHTML = "<strong>Location</strong><br /><br />You can find us at <em>12345 Taihei Boulevard, Kamurocho, Japan</em>";
    location.style.fontSize = "1.3em";
    location.style.color = "white";
    location.style.textAlign = "center";
    location.style.margin = "20px";
    location.style.borderStyle = "solid";
    location.style.borderWidth = "10px";
    location.style.borderColor = "#caf0f8";
    location.style.margin = "20px";
    location.style.padding = "20px";
    solidBack.appendChild(location);

    const contact1 = document.createElement("div");
    contact1.style.backgroundColor = "#457b9d";
    contact1.style.width = "60%";
    contact1.innerHTML = "<strong>PoistJ</strong><br /><br />Owner<br />Tel: (123)-456-7890<br />Email: placeholder@placeholder.com";
    contact1.style.fontSize = "1.3em";
    contact1.style.color = "white";
    contact1.style.textAlign = "center";
    contact1.style.margin = "20px";
    contact1.style.borderStyle = "solid";
    contact1.style.borderWidth = "10px";
    contact1.style.borderColor = "#caf0f8";
    contact1.style.margin = "20px";
    contact1.style.padding = "20px";
    solidBack.appendChild(contact1);
}