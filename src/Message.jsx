import React, {Component} from 'react';

class Message extends Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.message)
    return (

      <div className = "message">
        <span>{this.props.message.username}</span> <span>{this.props.message.content}</span>

      </div>

      )
  }
} //end of class ----------------------------



export default Message;