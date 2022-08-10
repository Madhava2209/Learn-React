import React, { useEffect, useState } from 'react'

function CounterUseEffect() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    useEffect(() =>{
        document.title = `Clicked ${count} times`
    }, [count])
    // run effects only once
    useEffect(() =>{
        console.log('useeffect')
        window.addEventListener('mousemove', getMousePosition)

        // remove event Listener on unmount
        return () =>{
            console.log('removed event listener')
            window.removeEventListener('mousemove', getMousePosition)
        }
    }, [])
    const getMousePosition = (e) =>{
        console.log(e)
        setX(e.clientX)
        setY(e.clientY)
    }
  return (
    <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <br />
        Count: {count}
        <br />
        <button onClick={() => setCount(prevCount => prevCount + 1)} >Click</button>
        <br />
        MouseX: {x}
        <br />
        MouseY: {y}
    </div>
  )
}

export default CounterUseEffect