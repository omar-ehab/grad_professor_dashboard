import actions from './actions';
import moment from 'moment';

const initState = {
  name: "",
  class_name: "",
  lectures: [],
  errors: {},
  lectures_error: ""
};

 
export default function reducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.UPDATE_LECTURE_FORM_DATA:
      return {
        ...state,
        [payload.key]: payload.value
      };
    case actions.INSERT_ERROR:
      return {
        ...state,
        errors: payload
      };
    case actions.GET_ALL_LECTURES_SUCCESS:
      const lecs = payload.lectures.map(lec => {
        return {
          id: lec._id,
          key: lec._id,
          lecture_name: lec.name,
          lecture_class: lec.class,
          created_at: moment(lec.date).format('YYYY-MM-DD hh:mm a'),
          qr: lec.qr,
        }
      })
      return {
        ...state,
        lectures: lecs
      };
    case actions.GET_ALL_LECTURES_ERROR:
      return {
        ...state,
        lectures_error: payload.message
      };
    case actions.INSERT_LECTURE_TO_LIST:
      const lec = {
          id: payload.lecture._id,
          key: payload.lecture._id,
          lecture_name: payload.lecture.name,
          lecture_class: payload.lecture.class,
          created_at: moment(payload.lecture.date).format('YYYY-MM-DD hh:mm a'),
          qr: payload.lecture.qr,
      }
      return {
        ...state,
        lectures: [lec, ...state.lectures],
        name: "",
        class_name: "",
        errors: {},
        lectures_error: ""
      };
    case actions.CLEAR:
      return {
        lectures: [...state.lectures],
        name: "",
        class_name: "",
        errors: {},
        lectures_error: state.lectures_error
      };
    default:
      return state;
  }
}
