import React, {Component} from 'react';

class MessageList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (

      <main className="messages">
      <div className="message">
        <span className="message-username">{this.props.username}</span>
        <span className="message-content">I won't be impressed with technology until I can download food.</span>
      </div>

      <div className="message system">
        Anonymous1 changed their name to nomnom.
      </div>
      </main>
      )
  }
} //end of class ----------------------------



export default MessageList;
