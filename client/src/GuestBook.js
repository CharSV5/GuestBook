import React from 'react';
import { CommentForm } from './CommentForm'

class GuestBook extends React.Component {
  render() {
    return(
      <div className="GuestBook">

      <CommentForm />
      </div>
    )
  }
}

export default GuestBook;
