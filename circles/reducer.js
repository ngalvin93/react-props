const initialState = [
  {
    radius: 50,
    color: '#FF00FF'
  },
  {
    radius: 30,
    color: '#FF99AA'
  },
  {
    radius: 60,
    color: '#0000FF'
  },
  {
    radius: 10,
    color: '#000000'
  }
]

const reducer = (state = initialState, action) => {
  const newState = [...state]
  // Handle actions here - make sure you don't mutate the state!
  const { type, color, radius } = action
  // ACTION: Add a random circle and remove the last circle
  switch (type) {
    case 'ADD_CIRCLE':
      return [
        ...state,
        { radius, color }
      ]
    case 'REMOVE_CIRCLE':
      newState.pop()
      return newState
    default:
      return state
  }
}
