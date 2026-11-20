export function readForm() {
  const name = document.querySelector("#name").value.trim();
  const price = Number(document.querySelector("#price").value);
  return { name, price };
}

export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

export function renderList(items) {
  const list = document.querySelector("#list");
  list.innerHTML = "";

  for (const item of items) {
    const li = document.createElement("li");
    li.className = "card";

    const h3 = document.createElement("h3");
    h3.textContent = item.name;

    const p = document.createElement("p");
    p.className = "price";
    p.textContent = `${item.price} EGP`;

    li.append(h3, p);
    list.append(li);
  }
}

export function wireForm() {
  const items = [];
  const form = document.querySelector("#product-form");
  const priceInput = document.querySelector("#price");
  const errorEl = document.querySelector("#error");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { name, price } = readForm();
    const rawPrice = priceInput.value.trim();

    if (!name) {
      errorEl.textContent = "Give the product a name.";
      return;
    }

    if (rawPrice === "" || Number.isNaN(price) || price <= 0) {
      errorEl.textContent = "Give the product a price.";
      return;
    }

    errorEl.textContent = "";
    items.push({ name, price });
    renderList(items);
    clearForm();
  });
}
