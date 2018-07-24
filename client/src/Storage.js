import React from 'react';

export class Storage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    comments: [] };
    this.addToStorage = this.addToStorage.bind(this);
  }

  addToStorage(propToAdd) {
    this.state.comments.push(propToAdd)
    console.log(this.state);
  }

  render() {
    const message = this.props.message
    const author = this.props.author
    const comment = { [author]: message }
    this.addToStorage(comment)
    console.log(this.state.comments);

    return(
      <div>
        <h2>{message}</h2>
        <h3>{author}</h3>

      </div>
    )
  }
}
