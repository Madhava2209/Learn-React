import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
      super(props)
      
      this.inputRef = React.createRef()
      this.secInputRef = null
      this.setCbRef = element =>{
        this.secInputRef = element
      }
    }
    
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
      </div>
    )
  }
  componentDidMount(){
    console.log(this.inputRef)
    this.inputRef.current.focus()
    this.secInputRef?.focus()
  }
}

export default RefsDemo