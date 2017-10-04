import React, {Component} from 'react';

class Message extends Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.message)
    return (

      <div className = "message">
        <span className="message-username">{this.props.message.username}</span> <span className="message-content">{this.props.message.content}</span>

      </div>

      )
  }
} //end of class ----------------------------



export default Message;