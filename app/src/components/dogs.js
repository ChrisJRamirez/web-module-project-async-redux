import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getDog} from "../actions/dogActions";

const Dog = (props) => {

  
  const dispatch = useDispatch();
  const {joke, loading} = useSelector((state) => state);
  console.log(joke)
  useEffect(() => {
    getDog(dispatch);
  }, [getDog]);

  if (loading) {
    return <><h2> Loading.....</h2></>
  }

  return (
    <div>
      <h2>Did this make you laugh?</h2>
      <p>{joke.data.setup}</p>

      <p>{joke.data.delivery}</p>

    </div>
  )

}

export default Dog;
