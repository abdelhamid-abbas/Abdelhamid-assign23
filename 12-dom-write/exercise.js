function findCardByName(name) {
  return Array.from(document.querySelectorAll("#list .card")).find(
    (card) => card.querySelector("h3")?.textContent === name
  );
}

export function addProduct(name, price) {
  const li = document.createElement("li");
  li.className = "card";

  const h3 = document.createElement("h3");
  h3.textContent = name;

  const p = document.createElement("p");
  p.className = "price";
  p.textContent = `${price} EGP`;

  li.append(h3, p);
  document.querySelector("#list").append(li);
}

export function removeProduct(name) {
  const card = findCardByName(name);
  if (card) card.remove();
}

export function markSoldOut(name) {
  const card = findCardByName(name);
  if (card) card.classList.add("sold-out");
}

export function clearProducts() {
  document.querySelectorAll("#list .card").forEach((card) => card.remove());
}

export function wireButtons() {
  document.querySelector("#add").addEventListener("click", () => {
    addProduct("Notebook", 45);
  });
  document.querySelector("#reset").addEventListener("click", () => {
    clearProducts();
  });
}
