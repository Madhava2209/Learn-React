import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    incrementCount(){
        this.setState((prevState) =>({
            count : prevState.count + 1
        }))
    }
    incrementFive(){
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
    }
  render() {
    return (
        <div>
            <h1>Count {this.state.count}</h1>
            <button onClick={() => this.incrementFive()}>Increment</button>
        </div>
    )
  }
}

export default Counter