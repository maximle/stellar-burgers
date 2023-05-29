import { dataUrl } from "./constants";
import { checkReponse } from "./utils";

export function getIngredients() {
  return fetch(`${dataUrl}/ingredients`).then(checkReponse)
}

export function order(orderList) {
  return fetch(`${dataUrl}/orders`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      ingredients: orderList
    })
  }).then(checkReponse);
} 