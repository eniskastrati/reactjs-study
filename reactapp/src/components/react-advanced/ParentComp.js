import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers'
import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'enis'
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'enis'
            })
        }, 2000)
    }

  render() {
      console.log("******************Parent Comp reder********************")
    return (
      <div>
          <p>ParentComp</p>
          <RegularComp name={this.state.name}/>
          <PureComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp