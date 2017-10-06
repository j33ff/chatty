import React, {Component} from 'react';

class Message extends Component {
  constructor(props){
    super(props);
  }

  render(){

    const messageType = this.props.message.type;
    if(messageType==="textMessage"){
      return (

      <div className = "message">
        <span className="message-username">{this.props.message.username}</span>
        <span className="message-content">{this.props.message.content}</span>

      </div>

      )

    } else {
      return (

      <div className = "message system-Message">
        <span className="message-username">{this.props.message.message}</span>
      </div>

      )

    }

  }
} //end of class ----------------------------



export default Message;