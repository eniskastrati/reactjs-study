import React, {Component} from 'react'

class UserGreeting extends Component{

    constructor() {
        super();

        this.state = {
            isLoggedIn: false
        }
    }

    render() {

        let message
        if(this.state.isLoggedIn){
            message = <h1>Welcome Enis</h1>
        }else{
            message = <h1>Welcome Guest</h1>
        }

       // if(this.state.isLoggedIn){
        //     return (
        //        <div>Welcome Enis</div>
        //  )
        // }else {
        //   return (
        //      <div>Welcome Guest</div>
        //  )
        //}
        return (
            <h2>{message}</h2>
        )

    }
}

export default UserGreeting;