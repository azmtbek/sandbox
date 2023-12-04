
import React from 'react'

const initialState = {
  online: true,
  items: []
}
const reducer = (state:typeof initialState, action){
  switch (action.type) {
    case 'toggleOnline':
      return {...state, online:action.payload}
  }
}

function useReducer2() {
  const [state,dispatch] = useReducer(reducer, initialState)

  return (
    <div>useReducer2</div>
  )
}

export default useReducer2