import React, { useState } from 'react'

function HookCounter() {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)
  const [name, setName] = useState({firstName: '', lastName: ''})
  return (
    <div>
        <div>
            Count: {count}
        </div>
        <button onClick={()=> setCount(prevCount => prevCount + 1)} >Increment</button>
        <button onClick={()=> setCount(initialCount)} >Reset</button>
        <button onClick={()=> setCount(prevCount => prevCount - 1)} >Decrement</button>
        <div>
            FirstName: {name.firstName}
            <br />
            <input type="text" value={name.firstName} onChange={e => setName({...name, firstName : e.target.value})} />
            <br />
            LastName: {name.lastName}
            <br />
            <input type="text" value={name.lastName} onChange={e => setName({...name, lastName : e.target.value})} />
        </div>
    </div>
  )
}

export default HookCounter