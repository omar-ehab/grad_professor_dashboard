import lectureModalActions from './actions';

export default function modalReducer(state = {lectureModalVisibility: false}, action) {
  switch (action.type) {
    case lectureModalActions.SHOW_LECTURE_MODAL:
      return {
        lectureModalVisibility: true,
      };
    case lectureModalActions.HIDE_LECTURE_MODAL:
      return {
        lectureModalVisibility: false,
      };
    default:
      return state;
  }
}
