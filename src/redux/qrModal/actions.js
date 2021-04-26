const qrModalActions = {
  SHOW_QR_MODAL: 'SHOW_QR_MODAL',
  HIDE_QR_MODAL: 'HIDE_QR_MODAL',

  openModal: payload => ({
    type: qrModalActions.SHOW_QR_MODAL,
    payload,
  }),
  closeModal: () => ({
    type: qrModalActions.HIDE_QR_MODAL,
  }),
};

export default qrModalActions;
