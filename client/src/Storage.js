import React from 'react';

export class Storage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    bin: [],
    comments: [] };
    this.addToStorage = this.addToStorage.bind(this);
  }

  addToStorage(propToAdd) {
    this.state.bin.push(propToAdd)
    console.log('look here' + this.state.bin.slice(-1));
    const lastComment = this.state.bin.slice(-1);
    console.log('last comment' + lastComment);
    this.state.comments.push(lastComment);
    console.log(this.state);
  }

  render() {

  const messages = this.props.messages

    return(
      messages.map((message, i) =>
        <div key={i}>
          <h2>{message.message}</h2>
          <h3>{message.author}</h3>
        </div>
      )
    )
  }
}
