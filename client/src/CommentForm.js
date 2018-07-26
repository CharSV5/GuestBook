import React from 'react';
import {Storage} from './Storage'


export class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      author: "",
      messages: []
     };
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.resetState = this.resetState.bind(this);
  }


  handleChange(event) {
    const target = event.target;
    const value = target.value
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  resetState() {
    this.setState({
      message: "",
      author: ""
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.state.messages.push({author: this.state.author, message: this.state.message})
    this.resetState()

    console.log(this.state);
  }


  render() {
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Message
          <textarea
            name="message"
            value={this.state.message}
            onChange={this.handleChange} />
        </label>
        <br />
        <label>
        Name
        <input
          name="author"
          type="text"
          value={this.state.author}
          onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit"/>
      </form>
      <Storage messages={this.state.messages}/>

    </div>
    );
  }
}
