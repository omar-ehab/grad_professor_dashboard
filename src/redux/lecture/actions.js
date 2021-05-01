const DOCUMENT = 'LECTURE_';

const actions = {
  ADD_NEW_LECTURE: DOCUMENT + 'ADD_NEW',
  UPDATE_LECTURE_FORM_DATA: DOCUMENT + 'UPDATE_FORM_DATA',
  GET_ALL_LECTURES_REQUEST: DOCUMENT + 'GET_ALL_REQUEST',
  GET_ALL_LECTURES_SUCCESS: DOCUMENT + 'GET_ALL_SUCCESS',
  GET_ALL_LECTURES_ERROR: DOCUMENT + 'GET_ALL_ERROR',
  INSERT_REQUEST: DOCUMENT + 'INSERT_REQUEST',
  INSERT_ERROR: DOCUMENT + 'INSERT_ERROR',
  INSERT_LECTURE_TO_LIST: DOCUMENT + 'INSERT_TO_LIST',
  CLEAR: DOCUMENT + 'CLEAR',

  update: (key, value) => ({
    type: actions.UPDATE_LECTURE_FORM_DATA,
    payload: {key, value},
  }),

  insertLecture: () => ({
    type: actions.INSERT_REQUEST,
  }),
  
  insertError: () => ({
    type: actions.INSERT_ERROR,
  }),

  getLectures: () => ({
    type: actions.GET_ALL_LECTURES_REQUEST,
  }),

  clear: () => ({
    type: actions.CLEAR,
  })
};
export default actions;
