import React from 'react';
import { CommentFormContainer } from '../containers/CommentFormContainer'

class GuestBook extends React.Component {
  render() {
    return(
      <div className="GuestBook">

      <CommentFormContainer />
      </div>
    )
  }
}

export default GuestBook;
