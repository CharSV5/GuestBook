import React from 'react';
import {CommentBox} from './CommentBox'

export class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      author: "",
      createCommentBox: false
     };
     console.log(this.state);
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleChange(event) {
    const target = event.target;
    const value = target.value
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log(this.state);
  }

  handleSubmit(event) {
    this.setState({
      createCommentBox: true
    });
    // alert('Your comment was submitted to the Guest Book');
    // console.log(this.state.message);
    // console.log(this.state.author);
    console.log(this.state);
    console.log('Setting state...');
    event.preventDefault();

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
      {this.state.createCommentBox ? <CommentBox message={this.state.message} author={this.state.author}/> : null}
    </div>
    );
  }
}
