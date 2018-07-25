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
    console.log('look here' + this.state.bin.slice(-1)[0]);
    this.state.comments.push(this.state.bin.slice(-1)[0])
    console.log(this.state);
  }

  addToStorage(propToAdd) {
    
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
