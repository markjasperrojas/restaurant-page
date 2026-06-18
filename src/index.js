import "./styles.css";
import { createAndRenderMenu } from "./menu.js";
import { createAndRenderContact } from "./contact.js";

const content = document.getElementById("content");
const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");

homeBtn.addEventListener("click", () => {
  content.innerHTML = "";
});

menuBtn.addEventListener("click", createAndRenderMenu);

contactBtn.addEventListener("click", createAndRenderContact);
