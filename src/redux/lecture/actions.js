const DOCUMENT = 'LECTURE_';

const actions = {
  ADD_NEW_LECTURE: DOCUMENT + 'ADD_NEW',
  UPDATE_LECTURE_FORM_DATA: DOCUMENT + 'UPDATE_FORM_DATA',
  CLEAR: DOCUMENT + 'CLEAR',

  update: data => ({
    type: actions.UPDATE_LECTURE_FORM_DATA,
    payload: data,
  }),

  clear: () => ({
    type: actions.CLEAR,
  })
};
export default actions;
