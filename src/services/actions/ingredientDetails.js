export const OPEN_POPUP = 'OPEN_POPUP';
export const CLOSE_POPUP = 'CLOSE_POPUP';

export const openModal = (item) => {
  return {
      type: OPEN_POPUP,
      payload: item
  }
}

export const closeModal = () => {
  return {
      type: CLOSE_POPUP,
      payload: null
  }
}