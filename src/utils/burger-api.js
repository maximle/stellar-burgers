import { dataUrl } from "./constants";
import { checkReponse } from "./utils";

export function getIngredients() {
  return fetch(dataUrl).then(checkReponse)
}