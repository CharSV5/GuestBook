import React from 'react';
import {CommentForm} from '../components/CommentForm'

export class CommentFormContainer extends React.Component {
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
      <CommentForm
        message={this.state.message}
        author={this.state.author}
        messages={this.state.messages}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange} />
    )
  }
}
