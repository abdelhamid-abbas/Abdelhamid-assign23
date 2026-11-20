import { items } from "./items.js";

export function renderItems(list) {
  const ul = document.querySelector("#list");
  ul.innerHTML = "";

  for (const item of list) {
    const li = document.createElement("li");
    li.className = "listing";
    li.textContent = `${item.name} - ${item.price} EGP`;
    ul.append(li);
  }
}

export function matching() {
  return items.filter((item) => item.category === "kitchen");
}

export function start() {
  renderItems(items);
  document.querySelector("#apply").addEventListener("click", () => {
    renderItems(matching());
  });
}
