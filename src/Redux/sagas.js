// sagas.js
import { all,call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_DATA_REQUEST, fetchDataSuccess,  fetchDataFailure  ,SEARCH_MOVIES  ,searchMoviesSuccess ,searchMoviesFailure} from './actions';
import { getData , searchData } from './api';

function* fetchpopularMovieSaga() {
  try {
    const response = yield call(getData);
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

function* fetchSearchDataSaga (action) {
  const {query} = action.payload
  try {
    const response = yield call(searchData , query);
    yield put(searchMoviesSuccess(response.data));
  } catch (error) {
    yield put(searchMoviesFailure(error.message));
  }
  
}

 function* watchFetchData() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchpopularMovieSaga);
}
function* watchSearchData () {
  yield takeLatest(SEARCH_MOVIES , fetchSearchDataSaga)
}

export default function* rootSaga () {
  yield all([
    watchFetchData(),
    watchSearchData()
  ])
}