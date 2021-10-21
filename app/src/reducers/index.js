import {
  FETCHING_QUOTE_START,
  FETCHING_QUOTE_SUCCESS, 
  FETCHING_QUOTE_FAILURE,

} from "../actions/dogActions"


const initialState = {
  loading: false,
  joke: "",
  error: "",
  title: "Web PT32 Dog API"

}



export const AppReducer = (state = initialState, action) => {
switch (action.type) {
  case FETCHING_QUOTE_START:
    return{...state, loading: true }
  case FETCHING_QUOTE_SUCCESS:
    return{...state, loading: false, joke: action.payload }
  case FETCHING_QUOTE_FAILURE:
    return{
      ...state, loading: false, error: action.payload }

  default:
    return state;
  }
}