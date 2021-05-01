import { all } from 'redux-saga/effects';
import authSagas from '@iso/redux/auth/saga';
import lectureSagas from '@iso/redux/lecture/saga';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    lectureSagas()
  ]);
}
