import React, { Component } from 'react'

class MountingLifeCycleB extends Component {
    constructor(props) {
      super(props)
      console.log('LifeCycleB constructor')
      this.state = {
         message: 'something'
      }
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleB getDerivedState')
        return null
    }
    shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }
  render() {
    console.log('LifeCycleB render')
    return (
      <div>MountingLifeCycleB</div>
    )
  }
  componentDidMount(){
    console.log('LifeCycleB componentDidMount')
  }
  componentDidUpdate(){
    console.log('LifeCycleB componentDidUpdate')
  }
}

export default MountingLifeCycleB