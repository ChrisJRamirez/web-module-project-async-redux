import axios from "axios";

export const FETCHING_QUOTE_START = "FETCHING_QUOTE_START";
export const FETCHING_QUOTE_SUCCESS = "FETCHING_QUOTE_SUCCESS";
export const FETCHING_QUOTE_FAILURE = "FETCHING_QUOTE_FAILURE";

export const getDog = (dispatch) => {
  

  

  dispatch({type: FETCHING_QUOTE_START})

  axios.get("https://v2.jokeapi.dev/joke/Any")

  .then(response => {
    dispatch({type: FETCHING_QUOTE_SUCCESS, payload: response});
  })
  
  .catch(err => {
    dispatch({type: FETCHING_QUOTE_FAILURE, payload:err})
  })
}