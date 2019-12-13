import {takeLatest, call, all, fork} from 'redux-saga/effects';
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../constants';
import { loginAPI } from '../api';

// worker saga
function* login(action) {
  try{
    yield call(loginAPI, action.id, action.password);
    yield put({
      type: LOG_IN_SUCCESS      
    })
  }
  catch(error){
    yield put({
      type: LOG_IN_FAILURE
    })
    console.error(error);
  }
}

// watcher saga
function* watchLogin() {
  yield takeLatest(LOG_IN, login);
}

function* userSaga() {
  yield all([fork(watchLogin)]);
}

export default userSaga;