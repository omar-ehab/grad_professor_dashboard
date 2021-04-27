import actions from './actions';

const initState = { idToken: null, error_message: "" };

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        idToken: action.token,
      };
    case actions.LOGIN_ERROR:
      return {
        error_message: action.error_message,
      };
    case actions.LOGOUT:
      return initState;
    default:
      return state;
  }
}
