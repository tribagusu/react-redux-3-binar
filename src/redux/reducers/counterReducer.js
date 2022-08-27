const counterState = {
  total: 0,
}

const counterReducer = (state = counterState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        total: state.total + 1,
      }
    case "DECREMENT":
      return {
        ...state,
        total: state.total > 0 ? state.total - 1 : state.total,
      }
    case "RESET":
      return {
        ...state,
        total: 0,
      }

    default:
      return state
  }
}

export default counterReducer
