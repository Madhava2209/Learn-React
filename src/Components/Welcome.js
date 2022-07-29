import React, {Component} from "react";

class Welcome extends Component{
    render(){
        return (
            <div>
                <h2>{this.props.name}</h2>
                {this.props.children}
            </div>
        )
    }
}

export default Welcome