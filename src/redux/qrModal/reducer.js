import qrModalActions from './actions';

const initialState = {
  qrModalVisibility: false,
  qrImage: "",
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case qrModalActions.SHOW_QR_MODAL:
      return {
        qrModalVisibility: true,
        qrImage: action.payload.img,
      };
    case qrModalActions.HIDE_QR_MODAL:
      return initialState;
    default:
      return state;
  }
}
