import React, { Component } from 'react'
import FRInput from './FRInput'

export class FRInputParent extends Component {
    constructor(props) {
      super(props)
    
      this.frInput = React.createRef()
    }
    clickHandler = () =>{
        this.frInput.current.focus()
    }
  render() {
    return (
      <div>
        <FRInput ref={this.frInput} />
        <button onClick={this.clickHandler}>Focus</button>
      </div>
    )
  }
}

export default FRInputParent