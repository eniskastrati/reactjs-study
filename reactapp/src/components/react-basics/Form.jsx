import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }

  handeSubmit = (event) => {
    alert(
      `${this.state.username} \n ${this.state.comments} \n ${this.state.topic}`
    );
    event.preventDefault();
  };

  handlerChangeUniversal = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { username, comments, topic } = this.state;

    return (
      <form onSubmit={this.handeSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handlerChangeUniversal}
          />
          <div>
            <label htmlFor="comments">Comments</label>
            <textarea
              name="comments"
              value={comments}
              onChange={this.handlerChangeUniversal}
              cols="25"
              rows="5"
            ></textarea>
          </div>
          <div>
            <label htmlFor="topics">Topic</label>
            <select
              name="topic"
              value={topic}
              onChange={this.handlerChangeUniversal}
            >
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
