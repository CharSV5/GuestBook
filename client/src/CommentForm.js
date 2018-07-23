import React from 'react';

export class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      author: ""
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
    alert('Your comment was submitted to the Guest Book');
    console.log(this.state.message);
    console.log(this.state.author);
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return(
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
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
