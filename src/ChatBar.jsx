import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (

    <footer className="chatbar">
    <input className="chatbar-username" defaultValue={this.props.user.name} placeholder="Your Name (Optional)" />
    <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
    </footer>
      )
  }
} //end of class ----------------------------

export default ChatBar;