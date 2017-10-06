import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props){
    super(props);
  }

  onKeyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.props.addMessage(event.target.value);
      event.target.value = "";
    }
  }

  render(){
    return (
      <footer className="chatbar">
        <input
          className="chatbar-username"
          defaultValue={this.props.user.name}
          placeholder="Your Name (Optional)" />
        <input
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          onKeyDown={this.onKeyDown.bind(this)} />
      </footer>
    )
  }
} //end of class ----------------------------

export default ChatBar;