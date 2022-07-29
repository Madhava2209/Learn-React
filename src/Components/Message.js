import React, {Component} from 'react'

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message: 'Text Message'
        }
    }
    changeMessage(){
        this.setState({
            message: 'Text Message Changed'
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()} >Change</button>
            </div>
        )
    }
}

export {Message}