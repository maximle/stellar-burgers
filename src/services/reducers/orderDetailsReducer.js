import { ORDER, ORDER_SUCCESS, ORDER_FAILED } from '../actions/orderDetails';


const orderDetailsInitialState = {
  orderData: {
    orderList: [],
    number: null
  },
  orderRequest: false,
  orderFailed: false
};

export const orderDetailsReducer = (state = orderDetailsInitialState, action) => {
  switch (action.type) {
    case ORDER: {
      return {
        ...state,
        orderRequest: true,
        orderFailed: false
      }
    }
    case ORDER_SUCCESS: {
      console.log('success');
      return {
        ...state,
        orderData: {
          ...state.orderData,
          orderList: action.orderList,
          number: action.number
        },
        orderRequest: false,
        orderFailed: false
      }
    }
    case ORDER_FAILED: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true
      }
    }
    default: {
      return state;
    }
  }
};
