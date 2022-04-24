import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler() {
        console.log("Clicked the Button")
    }
    render() {
        return (
            <button onClick={this.clickHandler}>Click Me</button>
        )
    }
}

export default ClassClick