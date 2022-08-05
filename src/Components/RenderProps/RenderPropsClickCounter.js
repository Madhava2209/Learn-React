import React, { Component } from 'react'
export class RenderPropsClickCounter extends Component {
  render() {
    return (
      <button onClick={this.props.incrementCount} >Clicked {this.props.count} times</button>
    )
  }
}

export default RenderPropsClickCounter