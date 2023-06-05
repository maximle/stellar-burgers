import { dataUrl } from "./constants";
import { request } from "./utils";

export function getIngredients() {
  return request(`${dataUrl}/ingredients`)
}

export function order(orderList) {
  return request(`${dataUrl}/orders`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      ingredients: orderList
    })
  });
} 