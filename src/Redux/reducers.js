import { combineReducers } from 'redux';
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS,  FETCH_DATA_FAILURE } from './actions';
import { SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_FAILURE } from './actions'

const initialState = {
  data: [],
  loading: false,
  error: null,
};

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case FETCH_DATA_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

function dataSearchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIES_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case SEARCH_MOVIES_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }

}

//Combining all the reducers

const rootReducer = combineReducers({
  popularMovieData: dataReducer,
  searchData: dataSearchReducer,
})

export default rootReducer