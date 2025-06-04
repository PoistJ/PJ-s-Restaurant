import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";
import "./styles.css";

const homeBtn = document.getElementsByClassName("home")[0];
const menuBtn = document.getElementsByClassName("menu")[0];
const aboutBtn = document.getElementsByClassName("about")[0];

homeBtn.addEventListener("click", function() {
    document.getElementById("content").innerHTML = "";
    loadHome();
});

menuBtn.addEventListener("click", function() {
    document.getElementById("content").innerHTML = "";
    loadMenu();
});

aboutBtn.addEventListener("click", function() {
    document.getElementById("content").innerHTML = "";
    loadContact();
});

loadHome();