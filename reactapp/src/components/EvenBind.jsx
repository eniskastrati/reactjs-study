import React, { Component } from 'react'

class EvenBind extends Component {
   
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello"
      }
    }

    changeMessage(){
        this.setState({
            message: "Goodbye"
        })
        console.log(this)
    }
  render() {
    return (
      <div>
          <div>{this.state.message}</div>
          {/* <button onClick={this.changeMessage.bind(this)}>Click</button> */}
          <button onClick={() => this.changeMessage()}>Click</button>
      </div>
    )
  }
}

export default EvenBind