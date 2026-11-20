import { findOrderById, findAllOrders } from "./orders-db.js";

export async function loadOrders() {
  return await findAllOrders();
}

export function myOrders(orders) {
  return orders.filter((o) => o.city === "Cairo" && o.status === "paid");
}

export function summarize(orders) {
  return orders.reduce((sum, o) => sum + o.quantity, 0);
}

export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.student}: ${order.item} x${order.quantity}`;
  } catch {
    return `Missing order: ${id}`;
  }
}

export function toJsonLines(orders) {
  return JSON.stringify(
    orders.map((o) => ({ student: o.student, item: o.item }))
  );
}
