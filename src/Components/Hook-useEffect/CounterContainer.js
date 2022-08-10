import React, { useState } from 'react'
import CounterUseEffect from './CounterUseEffect'

function CounterContainer() {
    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button  onClick={() => setDisplay(!display)}>Toggle</button>
        {display && <CounterUseEffect />}
    </div>
  )
}

export default CounterContainer