import TYPES from "../types"

const counterState = {
  total: 0,
}

const counterReducer = (state = counterState, action) => {
  switch (action.type) {
    case TYPES.INCREMENT:
      return {
        ...state,
        total: action.payload,
      }
    case TYPES.DECREMENT:
      return {
        ...state,
        total: action.payload,
      }
    case TYPES.RESET:
      return {
        ...state,
        total: 0,
      }

    default:
      return state
  }
}

export default counterReducer
