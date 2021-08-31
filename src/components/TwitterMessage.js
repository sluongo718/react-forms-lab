import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
    })
  }

  handleCount = () => {
    let counter = this.props.maxChars - this.state.message.length 
    return counter
 }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
        name="message" id="message" value={this.state.message}
        onChange={this.handleChange} />
        <br></br>
        <h1>{this.handleCount()}</h1>
      </div>
    );
  }
}

export default TwitterMessage;
