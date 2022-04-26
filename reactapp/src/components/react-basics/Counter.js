import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increase() {
        this.setState((prevState) => (
            {
                count: prevState.count + 1
            }
        ))
    }

    incrementFive() {
        this.increase();
        this.increase();
        this.increase();
        this.increase();
        this.increase();
    }

    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={() => this.incrementFive()}>Increase</button>
            </div>
        )
    }
}

export default Counter