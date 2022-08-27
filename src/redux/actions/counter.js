import { useDispatch } from "react-redux"

const CounterAction = () => {
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch({
      type: "INCREMENT",
    })
  }

  const handleDecrement = () => {
    dispatch({
      type: "DECREMENT",
    })
  }

  const handleReset = () => {
    dispatch({
      type: "RESET",
    })
  }
}

export default CounterAction
