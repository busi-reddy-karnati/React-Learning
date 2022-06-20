let lastId = 0

//initial state is empty array
export default function reducer(state = [], action) {
  if (action.type === 'bugAdded')
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ]
  else if (action.type === 'bugRemoved')
    return state.filter((bug) => bug.id !== action.payload.id)

  return state //If no action exists
}
