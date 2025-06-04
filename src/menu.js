export function loadMenu() {
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

    const appetizerDiv = document.createElement("div");
    appetizerDiv.style.backgroundColor = "#457b9d";
    appetizerDiv.style.width = "60%";
    appetizerDiv.style.display = "flex";
    appetizerDiv.style.flexDirection = "column";
    appetizerDiv.style.alignItems = "center";
    appetizerDiv.style.justifyContent = "center";
    appetizerDiv.style.borderStyle = "solid";
    appetizerDiv.style.borderWidth = "10px";
    appetizerDiv.style.borderColor = "#caf0f8";
    appetizerDiv.style.margin = "20px";
    solidBack.appendChild(appetizerDiv);

    const appetizerHead = document.createElement("div");
    appetizerHead.innerText = "Appetizers";
    appetizerHead.style.fontSize = "1.8em";
    appetizerHead.style.color = "white";
    appetizerHead.style.textDecoration = "underline";
    appetizerHead.style.margin = "20px 0px 0px 0px";
    appetizerDiv.appendChild(appetizerHead);

    const appetizers = document.createElement("div");
    appetizers.style.fontSize = "1.3em";
    appetizers.style.color = "white";
    appetizers.style.textAlign = "center";
    appetizers.style.margin = "20px";
    appetizers.innerHTML = 
        "<strong>Sotenbori Takoyaki</strong><br />Delicious hot octopus balls garnished with fish flakes and Sotenbori's famous takoyaki sauce. (6 pieces)"
    appetizerDiv.appendChild(appetizers);

    const entreeDiv = document.createElement("div");
    entreeDiv.style.backgroundColor = "#457b9d";
    entreeDiv.style.width = "60%";
    entreeDiv.style.display = "flex";
    entreeDiv.style.flexDirection = "column";
    entreeDiv.style.alignItems = "center";
    entreeDiv.style.justifyContent = "center";
    entreeDiv.style.borderStyle = "solid";
    entreeDiv.style.borderWidth = "10px";
    entreeDiv.style.borderColor = "#caf0f8";
    entreeDiv.style.margin = "20px";
    solidBack.appendChild(entreeDiv);

    const entreeHead = document.createElement("div");
    entreeHead.innerText = "Entrees";
    entreeHead.style.fontSize = "1.8em";
    entreeHead.style.color = "white";
    entreeHead.style.textDecoration = "underline";
    entreeHead.style.margin = "20px 0px 0px 0px";
    entreeDiv.appendChild(entreeHead);

    const entrees = document.createElement("div");
    entrees.style.fontSize = "1.3em";
    entrees.style.color = "white";
    entrees.style.textAlign = "center";
    entrees.style.margin = "20px";
    entrees.innerHTML = 
    "<strong>Serena Shoyu Ramen</strong><br />A classic hot bowl of ramen with a shoyu soy sauce base. Finishing this will surely make you feel <em>Like A Dragon</em>!"
    + "<br /><br /><strong>Champion Fried Rice</strong><br />A plate of fried rice with Chinese barbecued pork, eggs, onions, and spring onions. Seasoned wonderfully with cooking wine and soy sauce with flavour inspirations reminiscent of the Champion District."
    entreeDiv.appendChild(entrees);

    const drinkDiv = document.createElement("div");
    drinkDiv.style.backgroundColor = "#457b9d";
    drinkDiv.style.width = "60%";
    drinkDiv.style.display = "flex";
    drinkDiv.style.flexDirection = "column";
    drinkDiv.style.alignItems = "center";
    drinkDiv.style.justifyContent = "center";
    drinkDiv.style.borderStyle = "solid";
    drinkDiv.style.borderWidth = "10px";
    drinkDiv.style.borderColor = "#caf0f8";
    drinkDiv.style.margin = "20px";
    solidBack.appendChild(drinkDiv);
    
    const drinkHead = document.createElement("div");
    drinkHead.innerText = "Drinks";
    drinkHead.style.fontSize = "1.8em";
    drinkHead.style.color = "white";
    drinkHead.style.textDecoration = "underline";
    drinkHead.style.margin = "20px 0px 0px 0px";
    drinkDiv.appendChild(drinkHead);

    const drinks = document.createElement("div");
    drinks.style.fontSize = "1.3em";
    drinks.style.color = "white";
    drinks.style.textAlign = "center";
    drinks.style.margin = "20px";
    drinks.innerHTML = 
    "<strong>Staminan</strong><br />A glass of a delicious energy drink for when you need a mid-day pick-me-up!"
    + "<br /><br /><strong>Millenium Tower Coffee</strong><br />A cup of coffee from a deliciously roasted blend of beans, a Kamurocho classic."
    drinkDiv.appendChild(drinks);

    const dessertDiv = document.createElement ("div");
    dessertDiv.style.backgroundColor = "#457b9d";
    dessertDiv.style.width = "60%";
    dessertDiv.style.display = "flex";
    dessertDiv.style.alignItems = "center";
    dessertDiv.style.flexDirection = "column";
    dessertDiv.style.justifyContent = "center";
    dessertDiv.style.borderStyle = "solid";
    dessertDiv.style.borderWidth = "10px";
    dessertDiv.style.borderColor = "#caf0f8";
    dessertDiv.style.margin = "20px";
    solidBack.appendChild(dessertDiv);

    const dessertHead = document.createElement("div");
    dessertHead.innerText = "Dessert";
    dessertHead.style.fontSize = "1.8em";
    dessertHead.style.color = "white";
    dessertHead.style.textDecoration = "underline";
    dessertHead.style.margin = "20px 0px 0px 0px";
    dessertDiv.appendChild(dessertHead);

    const dessert = document.createElement("div");
    dessert.style.fontSize = "1.3em";
    dessert.style.color = "white";
    dessert.style.textAlign = "center";
    dessert.style.margin = "20px";
    dessert.innerHTML = 
    "<strong>Nakamichi Matcha Cake</strong><br />A slice of moist matcha cake inspired by a famous cafe on Nakamichi Street."
    + "<br /><br /><strong>Majima Milkshake</strong><br />A tasty banana chocolate milkshake topped with whipped cream. Its unexpected taste will blindside you!"
    dessertDiv.appendChild(dessert);
} 