import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Welcome'
      }
    }
    alertMessage = (val) =>{
        alert(this.state.message + ' ' + val)
    }
  render() {
    return (
      <div>
        <ChildComponent clickHandler={this.alertMessage} />
      </div>
    )
  }
}

export default ParentComponent