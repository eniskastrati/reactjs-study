<<<<<<< HEAD
import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return <h1>Class Component</h1>
    }
=======
import React, {Component} from "react";

class Welcome extends Component {
    render(props) {
        return (
            <div>
                <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
                {this.props.children}
            </div>
        );
    };
>>>>>>> 64dedd20fcecf42e03ab8b64365aaed00583a701
}

export default Welcome;