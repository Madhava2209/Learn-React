import React from 'react'
import { useContext } from 'react'
import ChildC from './ChildC'
import { reducerContext } from './ReducerContextParentComponent'

function ChildB() {
  const context = useContext(reducerContext)
  return (
    <div>
      Child B {context.count} <br />
      <button onClick={() => context.countDispatch('increment')}>+1</button>
      <button onClick={() => context.countDispatch('decrement')}>-1</button>
      <button onClick={() => context.countDispatch('reset')}>Reset</button>
      <ChildC />
    </div>
  )
}

export default ChildB
