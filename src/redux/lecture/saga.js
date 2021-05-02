import { all, takeEvery, put, fork, select} from 'redux-saga/effects';
import jwtConfig from '@iso/config/jwt.config';

import actions from './actions';
import lectureModalActions from '../lectureModal/actions';
import { getToken } from '@iso/lib/helpers/utility';

import SuperFetch from '../../library/helpers/superFetch';


export function* updateLectureRequest() {

  yield takeEvery('LECTURE_GET_ALL_REQUEST', function*() {
    // const doctor_id = yield getToken().get("doctorId");
    const doctor_id = 1;
    try {
      // const res = yield SuperFetch.get(`lectures/${doctor_id}`, {});
      const res = yield fetch(`${jwtConfig.fetchUrl}lectures/${doctor_id}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }
      });

      const data = yield res.json();
      if(data.success === true){
        yield put({
          type: actions.GET_ALL_LECTURES_SUCCESS,
          payload: { lectures: data.lectures }
        });
      } else {
        yield put({
          type: actions.GET_ALL_LECTURES_ERROR,
          payload: data.error
        });
      }
    
    } catch(err) {
      yield put({
        type: actions.GET_ALL_LECTURES_ERROR,
        payload: {message: "Please Connect to Internet"}
      });
    }
  });

  yield takeEvery('LECTURE_INSERT_REQUEST', function*() {
    // const doctor_id = yield getToken().get("doctorId");
    const doctor_id = 1;
    const { lecture } = yield select();
    const payload = {
      name: lecture.name,
      class: lecture.class_name,
      doctor_id
    }
    try{
      const res = yield SuperFetch.post('lectures', payload);
      console.log()
      if(res.success === true){
        yield put({ type: lectureModalActions.HIDE_LECTURE_MODAL });
        yield put({
          type: actions.INSERT_LECTURE_TO_LIST,
          payload: { lecture: res.lecture }
        });
      } else if(res.error.details) {
        yield put({
          type: actions.INSERT_ERROR,
          payload: res.error.details[0]
        });
      } else if(res.error === "Failed to fetch") {
        console.log("IN IF");
        yield put({
          type: actions.INSERT_ERROR,
          payload: {message: "Please Connect to Internet"}
        });
      }
    } catch(err) {
      console.error(err);
    }
  });
}


export default function* rootSaga() {
  yield all([
    fork(updateLectureRequest)
  ]);
}
