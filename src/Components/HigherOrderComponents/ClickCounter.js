import React, { Component } from 'react'
import UpdateComponent from './WithCounter'
export class ClickCounter extends Component {
  render() {
    return (
      <button onClick={this.props.incrementCount} >Clicked {this.props.count} times</button>
    )
  }
}

export default UpdateComponent(ClickCounter)