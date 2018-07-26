import React from 'react';

export class Storage extends React.Component {
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
