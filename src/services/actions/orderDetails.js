import { dataUrl } from '../../utils/constants';
import { request } from '../../utils/utils';

export const ORDER = "ORDER";
export const ORDER_SUCCESS = "ORDER_SUCCESS";
export const ORDER_FAILED = "ORDER_FAILED";

export function order() {
  return function (dispatch, getState) {
    const constructorIngredients = getState().burgerConstructor.ingredients;
    console.log(constructorIngredients);
    const orderList = constructorIngredients.buns.concat(constructorIngredients.stuffings).reduce((acc, item) => {
      acc.push(item._id);
      return acc;
    }, []);
    console.log(orderList);

    dispatch({
      type: ORDER
    });
    request(`${dataUrl}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        ingredients: orderList
      })
    })
      .then((res) => {
        console.log(res);
        dispatch({
          type: ORDER_SUCCESS,
          orderList: orderList,
          number: res.order.number
        });
      })
      .catch((err) => {
        dispatch({ type: ORDER_FAILED });
        console.log(err);
      });
  };
}
