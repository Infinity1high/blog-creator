export const GET_DATA_START = 'GET_DATA_START';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';

export function getData(url) {
  return dispatch => {
    dispatch({
      type: GET_DATA_START
    })
    fetch(url)
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: GET_DATA_SUCCESS,
          payload: res
        });
      })
      .catch(err => {
        dispatch({
          type: GET_DATA_ERROR,
          payload: err
        });
      });
  };
}
