const initHome = {
  food: [],
  newTaste: [],
  popular: [],
  recommended: []
}

export const homeReducer = (state = initHome, action) => {
  if (action.type === 'SET_FOOD') {
    return {
      ...state,
      food: action.value
    }
  }
  if (action.type === 'SET_NEW_TASTE') {
    return {
      ...state,
      food: action.value
    }
  }
  if (action.type === 'SET_POPULAR') {
    return {
      ...state,
      food: action.value
    }
  }
  if (action.type === 'SET_RECOMMENDED') {
    return {
      ...state,
      food: action.value
    }
  }
  return state
}