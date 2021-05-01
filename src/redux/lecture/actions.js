const DOCUMENT = 'LECTURE_';

const actions = {
  ADD_NEW_LECTURE: DOCUMENT + 'ADD_NEW',
  UPDATE_LECTURE_FORM_DATA: DOCUMENT + 'UPDATE_FORM_DATA',
  INSERT_REQUEST: DOCUMENT + 'INSERT_REQUEST',
  INSERT_SUCCESS: DOCUMENT + 'INSERT_SUCCESS',
  INSERT_ERROR: DOCUMENT + 'INSERT_ERROR',
  CLEAR: DOCUMENT + 'CLEAR',

  update: (key, value) => ({
    type: actions.UPDATE_LECTURE_FORM_DATA,
    payload: {key, value},
  }),

  insertLecture: () => ({
    type: actions.INSERT_REQUEST,
  }),

  insertSucces: () => ({
    type: actions.INSERT_SUCCESS,
  }),

  insertError: () => ({
    type: actions.INSERT_ERROR,
  }),


  clear: () => ({
    type: actions.CLEAR,
  })
};
export default actions;
