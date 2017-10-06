import React, {Component} from 'react';
import Message from "./Message.jsx"

class MessageList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let messages = this.props.messages.map((message, index) =>{
      return <Message message = {message} key = {index}/>
    })
    return (

      <main className="messages">
      {messages}
      </main>
      )
  }
} //end of class ----------------------------



export default MessageList;
