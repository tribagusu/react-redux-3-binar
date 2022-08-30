import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  setIncrement,
  setDecrement,
  setReset,
} from "../redux/actions/counterAction"

const CounterAction = () => {
  const dispatch = useDispatch()
  const { counterReducer } = useSelector((state) => state)

  const handleIncrement = () => {
    dispatch(setIncrement(counterReducer))
  }

  const handleDecrement = () => {
    dispatch(setDecrement(counterReducer))
  }

  const handleReset = () => {
    dispatch(setReset(counterReducer))
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
