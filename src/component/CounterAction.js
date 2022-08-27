import React from "react"
import { useDispatch } from "react-redux"
import TYPES from "../redux/types"

const CounterAction = () => {
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch({
      type: TYPES.INCREMENT,
    })
  }

  const handleDecrement = () => {
    dispatch({
      type: TYPES.DECREMENT,
    })
  }

  const handleReset = () => {
    dispatch({
      type: TYPES.RESET,
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
