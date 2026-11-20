export function pageHeading() {
  return document.querySelector("h1").textContent;
}

export function productCount() {
  return document.querySelectorAll(".card").length;
}

export function productNames() {
  return Array.from(document.querySelectorAll(".card h3")).map((el) => el.textContent);
}

export function priceOf(name) {
  const card = Array.from(document.querySelectorAll(".card")).find(
    (el) => el.querySelector("h3")?.textContent === name
  );
  if (!card) return null;
  return card.querySelector(".price")?.textContent ?? null;
}

export function soldOutNames() {
  return Array.from(document.querySelectorAll(".card.sold-out h3")).map(
    (el) => el.textContent
  );
}
