import React from 'react';

export class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "Please leave a comment" };
  }

  render() {
    return(
      <form>
        <label>
          Message
          <textarea />
        </label>
        <br />
        <label>
        Name
        <input type="text" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
