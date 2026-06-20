import "./styles.css";
import { createAndRenderMenu } from "./menu.js";
import { createAndRenderContact } from "./contact.js";

const content = document.getElementById("content");
const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");

// default tab active
homeBtn.classList.add("active");

homeBtn.addEventListener("click", () => {
  content.innerHTML = "";
  homeBtn.classList.add("active");
  menuBtn.classList.remove("active");
  contactBtn.classList.remove("active");
});

menuBtn.addEventListener("click", () => {
  createAndRenderMenu();
  homeBtn.classList.remove("active");
  menuBtn.classList.add("active");
  contactBtn.classList.remove("active");
});

contactBtn.addEventListener("click", () => {
  createAndRenderContact();
  homeBtn.classList.remove("active");
  menuBtn.classList.remove("active");
  contactBtn.classList.add("active");
});
