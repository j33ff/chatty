import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props){
    super(props);
  }

  onKeyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      console.log('press enter')
      this.props.addMessage(event.target.value);
      event.target.value = "";
    }
  }

  onEditName(event){
    if (event.keyCode === 13){
      event.preventDefault();
      this.props.editUser(event.target.value);

    }
  }

  render(){
    return (
      <footer className="chatbar">
        <input
          className="chatbar-username"
          defaultValue={this.props.user.name}
          placeholder="Your Name (Optional)"
          onKeyDown = {this.onEditName.bind(this)} />
        <input
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          onKeyDown={this.onKeyDown.bind(this)} />
      </footer>
    )
  }
} //end of class ----------------------------

export default ChatBar;