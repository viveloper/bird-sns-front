import { all, call } from 'redux-saga/effects';
import userSaga from './user';
import postSaga from './post';

function* rootSaga() {
  yield all([call(userSaga), call(postSaga)]);
}

export default rootSaga;