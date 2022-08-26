import React from 'react'
import { useReducer } from 'react'

function CounterWithReducer() {
  const initialState = 0
  const reducer = (currentState, action) =>{
    switch (action) {
        case 'increment':
            return currentState + 1
        case 'decrement':
            return currentState - 1
        case 'reset':
            return initialState
    }
  }
  const [count,dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h5>Count: {count}</h5>
      <button onClick={()=> dispatch('increment')} >Increment</button>
      <button onClick={()=> dispatch('decrement')}>Decrement</button>
      <button onClick={()=> dispatch('reset')}>Reset</button>
    </div>
  )
}

export default CounterWithReducer
