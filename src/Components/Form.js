import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         description: '',
         topic: ''
      }
    }
    nameChangeHandler = event =>{
        this.setState({
            name: event.target.value
        })
    }
    descriptionChangeHandler = event =>{
        this.setState({
            description: event.target.value
        })
    }
    topicChangeHandler = event =>{
        this.setState({
            topic: event.target.value
        })
    }
    submitHandler = event =>{
        event.preventDefault()
        alert(`${this.state.name} ${this.state.description} ${this.state.topic}`)
    }
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <label>Name</label>
                <input type="text" value={this.state.name} onChange={this.nameChangeHandler} />
            </div>
            <div>
                <label>Description</label>
                <textarea id="" cols="30" rows="10" value={this.state.description} onChange={this.descriptionChangeHandler}></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.topicChangeHandler}>
                    <option value="Vue">Vue</option>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form