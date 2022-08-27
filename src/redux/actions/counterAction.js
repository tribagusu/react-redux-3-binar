import TYPES from "../types"
import { useSelector } from "react-redux"

export const setCounter = (result) => {
  // const { counterReducer } = useSelector((state) => state)

  return (dispatch) => {
    // const result = counterReducer.total + 1
    dispatch({
      type: TYPES.INCREMENT,
      payload: result,
    })
  }
}
