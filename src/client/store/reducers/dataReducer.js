import { GET_DATA_START, GET_DATA_SUCCESS, GET_DATA_ERROR } from "../actions/getDataActions";

const initState = {
  errorMessage: '',
  data: null,
  loading: false,
};

export default function(state = initState, action) {
  switch (action.type) {
    case GET_DATA_START:
      return {
        ...state,
        loading: true,
      };
    case GET_DATA_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      };
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
}
