import React from 'react';
import {Storage} from './Storage'


export class CommentForm extends React.Component {



  render() {
    return(
      <div>
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Message
          <textarea
            name="message"
            value={this.props.message}
            onChange={this.props.handleChange} />
        </label>
        <br />
        <label>
        Name
        <input
          name="author"
          type="text"
          value={this.props.author}
          onChange={this.props.handleChange} />
        </label>
        <input type="submit" value="Submit"/>
      </form>
      <Storage messages={this.props.messages}/>

    </div>
    );
  }
}
