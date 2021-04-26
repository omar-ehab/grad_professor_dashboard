const lectureModalActions = {
  SHOW_LECTURE_MODAL: 'SHOW_LECTURE_MODAL',
  HIDE_LECTURE_MODAL: 'HIDE_LECTURE_MODAL',

  openModal: () => ({
    type: lectureModalActions.SHOW_LECTURE_MODAL,
  }),
  closeModal: () => ({
    type: lectureModalActions.HIDE_LECTURE_MODAL,
  }),
};

export default lectureModalActions;
