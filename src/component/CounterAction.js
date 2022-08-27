import React from "react"
import { useDispatch, useSelector } from "react-redux"
import TYPES from "../redux/types"

const CounterAction = () => {
  const dispatch = useDispatch()
  const { counterReducer } = useSelector((state) => state)

  const handleIncrement = () => {
    const result = counterReducer.total + 1
    dispatch({
      type: TYPES.INCREMENT,
      payload: result,
    })
  }

  const handleDecrement = () => {
    const result =
      counterReducer.total > 0 ? counterReducer.total - 1 : counterReducer.total
    dispatch({
      type: TYPES.DECREMENT,
      payload: result,
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
