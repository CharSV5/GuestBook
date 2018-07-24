import React from 'react';

export class CommentBox extends React.Component {

  render() {
    return(
      <div>
        <h2>{this.props.message}</h2>
        <h3>{this.props.author}</h3>

      </div>
    );
  }
}
