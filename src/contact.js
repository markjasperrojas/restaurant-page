export function createAndRenderContact() {
  content.innerHTML = "";

  const div = document.createElement("div");
  const p = document.createElement("p");

  div.classList.add("menu");
  p.textContent = "CONTACT!";

  div.appendChild(p);
  content.appendChild(div);
}
