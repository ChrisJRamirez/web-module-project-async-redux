import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getJoke} from "../actions/jokeActions";

const Joke = (props) => {

  
  const dispatch = useDispatch();
  const {joke, loading} = useSelector((state) => state);
  console.log(joke)
  useEffect(() => {
    getJoke(dispatch);
  }, [getJoke]);

  if (loading) {
    return <><h2> Loading.....</h2></>
  }

  return (
    <div>
      <h2>Did this make you laugh?</h2>
      <p>{joke.data.setup}</p>

      <p>{joke.data.delivery}</p>

      <button onClick={() => getJoke(dispatch)}>Click for new joke!</button>
    </div>
  )

}

export default Joke;
