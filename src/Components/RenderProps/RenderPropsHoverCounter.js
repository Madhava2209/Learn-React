import React, { Component } from 'react'
export class RenderPropsHoverCounter extends Component {
  render() {
    return (
      <h2 onMouseOver={this.props.incrementCount} >Hovered {this.props.count} times</h2>
    )
  }
}

export default RenderPropsHoverCounter