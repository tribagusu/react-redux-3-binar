import React from "react"
import { useDispatch } from "react-redux"

const CounterAction = () => {
  const dispatch = useDispatch()

  //# actions
  const INCREMENT = "INCREMENT"
  const DECREMENT = "DECREMENT"
  const RESET = "RESET"

  const handleIncrement = () => {
    dispatch({
      type: INCREMENT,
    })
  }

  const handleDecrement = () => {
    dispatch({
      type: DECREMENT,
    })
  }

  const handleReset = () => {
    dispatch({
      type: RESET,
    })
  }

  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <div>
        <button onClick={handleReset}>reset</button>
      </div>
    </div>
  )
}

export default CounterAction
