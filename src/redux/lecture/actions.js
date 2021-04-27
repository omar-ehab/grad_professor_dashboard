const DOCUMENT = 'LECTURE_';

const actions = {
  ADD_NEW_LECTURE: DOCUMENT + 'ADD_NEW',
  UPDATE_LECTURE_FORM_DATA: DOCUMENT + 'UPDATE_FORM_DATA',
  CLEAR: DOCUMENT + 'CLEAR',

  update: (key, value) => ({
    type: actions.UPDATE_LECTURE_FORM_DATA,
    payload: {key, value},
  }),

  clear: () => ({
    type: actions.CLEAR,
  })
};
export default actions;
