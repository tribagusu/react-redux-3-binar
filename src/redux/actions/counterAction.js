import TYPES from "../types"

export const setIncrement = (counterReducer) => {
  return {
    type: TYPES.INCREMENT,
    payload: counterReducer.total + 1,
  }
}

export const setDecrement = (counterReducer) => {
  return {
    type: TYPES.DECREMENT,
    payload:
      counterReducer.total > 0
        ? counterReducer.total - 1
        : counterReducer.total,
  }
}

export const setReset = (counterReducer) => {
  return {
    type: TYPES.RESET,
  }
}
