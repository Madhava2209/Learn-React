import React, { Component } from 'react'
import MountingLifeCycleB from './MountingLifeCycleB'

class MountingLifeCycleA extends Component {
    constructor(props) {
      super(props)
      console.log('LifeCycleA constructor')
      this.state = {
         message: 'something'
      }
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA getDerivedState')
        return null
    }
    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }
    changeState = () =>{
        this.setState({
            message: 'change'
        })
    }
  render() {
    console.log('LifeCycleA render')
    return (
      <div>MountingLifeCycleA
        <button onClick={this.changeState} >Change</button>
        <MountingLifeCycleB />
      </div>
    )
  }
  componentDidMount(){
    console.log('LifeCycleA componentDidMount')
  }
  componentDidUpdate(){
    console.log('LifeCycleA componentDidUpdate')
  }
}

export default MountingLifeCycleA