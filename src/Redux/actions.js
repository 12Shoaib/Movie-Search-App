
//Popular Movies Action
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});


// Search Movie Actions

export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';
export const SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE';

export const searchMovies = (query) => ({
  type: SEARCH_MOVIES,
  payload: { query },
});

export const searchMoviesSuccess = (data) => ({
  type: SEARCH_MOVIES_SUCCESS,
  payload: { data },
});

export const searchMoviesFailure = (error) => ({
  type: SEARCH_MOVIES_FAILURE,
  payload: { error },
});
  