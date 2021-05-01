import { all, takeEvery, put, fork, select} from 'redux-saga/effects';

import actions from './actions';
import lectureModalActions from '../lectureModal/actions';
import { getToken } from '@iso/lib/helpers/utility';

import SuperFetch from '../../library/helpers/superFetch';


export function* updateLectureRequest() {
  yield takeEvery('LECTURE_INSERT_REQUEST', function*() {
    const doctor_id = yield getToken().get("doctorId");
    const { lecture } = yield select();
    const payload = {
      name: lecture.name,
      class: lecture.class_name,
      doctor_id
    }
    try{
      const res = yield SuperFetch.post('lectures', payload);
      if(res.success === true){
        yield put({ type: lectureModalActions.HIDE_LECTURE_MODAL });
        yield put({
          type: actions.INSERT_SUCCESS,
          lecture: res.lecture
        });
      } else {
        yield put({
          type: actions.INSERT_ERROR,
          payload: res.error.details[0]
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
