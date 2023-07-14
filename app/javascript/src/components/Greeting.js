import React from "react";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getGreetingsAsync } from "../redux/greetings/greetingSlice";

const Greetings = () => {
  const {greeting, isLoading, error} = useSelector((state)=>state.greetings)

  const dispatch = useDispatch()

  useEffect(()=> {
   dispatch(getGreetingsAsync())
  },[dispatch])

  return(
    <div>
      {isLoading && <h2>Loading...</h2>}
      {error && <p>{error}</p>}
      {greeting && <h2>{greeting.greetings}</h2>}
    </div>
  )
}

export default Greetings