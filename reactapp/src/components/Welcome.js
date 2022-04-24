import React, { Component } from "react";

class Welcome extends Component {
    render() {
        const { name, heroName } = this.props
        //in case having states in components
        //const { state1, state2 } = this.state
        return (
            <div>
                <h1>Welcome {name} a.k.a {heroName}</h1>
            </div>
        );
    };
}

export default Welcome;