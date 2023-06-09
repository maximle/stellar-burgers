import { dataUrl } from '../../utils/constants';
import { request } from '../../utils/utils';
export const GET_INGREDIENTS = "GET_INGREDIENTS";
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const SET_INGREDIENTS_TAB = 'SET_INGREDIENTS_TAB';

export function getIngredients() {
  return function (dispatch) {
    dispatch({ type: GET_INGREDIENTS });

    request(`${dataUrl}/ingredients`)
      .then((res) => {
        console.log(res);
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          ingredients: res.data,
        });
      })
      .catch((err) => {
        dispatch({ type: GET_INGREDIENTS_FAILED });
        console.log(err);
      });
  };
}