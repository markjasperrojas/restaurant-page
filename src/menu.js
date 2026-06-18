export function createAndRenderMenu() {
  content.innerHTML = "";

  const div = document.createElement("div");
  const p = document.createElement("p");

  div.classList.add("menu");
  p.textContent = "MENU!";

  div.appendChild(p);
  content.appendChild(div);
}
