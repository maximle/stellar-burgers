import PropTypes from "prop-types";

export const ingredientPropType = PropTypes.shape({
  //укажите здесь prop-types для ингридиента
  calories: PropTypes.number,
  carbohydrates: PropTypes.number,
  fat: PropTypes.number,
  image: PropTypes.string,
  image_large: PropTypes.string,
  image_mobile: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  proteins: PropTypes.number,
  type: PropTypes.string,
  _v: PropTypes.number,
  _id: PropTypes.string
});

export const tabObjPropType = PropTypes.shape({
  //укажите здесь prop-types для ингридиента
  bun: PropTypes.string,
  sauce: PropTypes.string,
  main: PropTypes.string
});


export const cardPropType = PropTypes.shape({
  
})
