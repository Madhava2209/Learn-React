import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={() => props.clickHandler('something')} >Alert</button>
    </div>
  )
}

export default ChildComponent