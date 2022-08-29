import React from 'react'
import { useContext } from 'react'
import { reducerContext } from './ReducerContextParentComponent'

function ChildC() {
  const context = useContext(reducerContext)
  return (
    <div>
      Child C {context.count} <br />
      <button onClick={() => context.countDispatch('increment')}>+1</button>
      <button onClick={() => context.countDispatch('decrement')}>-1</button>
      <button onClick={() => context.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ChildC
