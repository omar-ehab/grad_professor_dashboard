import actions from './actions';

const initState = {
  name: "",
  class_name: "",
  errors: {}
};

export default function reducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.UPDATE_LECTURE_FORM_DATA:
      return {
        ...state,
        name: payload.name,
        class_name: payload.class_name
      };
    case actions.CLEAR:
      return initState;
    default:
      return state;
  }
}
