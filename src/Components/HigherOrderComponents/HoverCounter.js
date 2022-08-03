import React, { Component } from 'react'
import UpdateComponent from './WithCounter'
export class HoverCounter extends Component {
  render() {
    return (
      <h2 onMouseOver={this.props.incrementCount} >Hovered {this.props.count} times</h2>
    )
  }
}

export default UpdateComponent(HoverCounter)