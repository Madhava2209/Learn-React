import React from 'react'
import { useReducer } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'
export const reducerContext = React.createContext()
function ReducerContextParentComponent() {
  const initialState = 0
  const reducer = (currentState, action) =>{
    switch (action) {
        case 'increment':
            return currentState + 1
        case 'decrement':
            return currentState - 1
        case 'reset':
            return initialState
        default:
            return currentState
    }
  }
  const [count, dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        Parent {count}
      <reducerContext.Provider value={{count,countDispatch: dispatch}}>
        <ChildA />
        <ChildB />
      </reducerContext.Provider>
    </div>
  )
}

export default ReducerContextParentComponent
