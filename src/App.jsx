import React, {Component} from 'react';
import MessageList from "./MessageList.jsx";
import ChatBar from "./ChatBar.jsx"
import NavBar from "./NavBar.jsx"



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      onlineUsers: 0,
      title: "chatty",
      currentUser: {name: "Anonymous"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    }
  }



  componentDidMount() {
   this.socket = new WebSocket("ws://localhost:3001");
   this.socket.onopen = (event) => {
    console.log('Socket connected!');
   };
   this.socket.onmessage = (event) => {
    const data = JSON.parse(event.data)
    // TODO have switch statement to handle different types of messages
    this.handleMsgReceived(data);

    // switch (data.type) {
    //   case 'textMessage': {
    //     this.handleMsgReceived(data)
    //   }
    //   case 'changeUsername': {
    //     this.handleUserChange(data)
    //   }
        // case 'userCount': {
    //   this.handleUserCountChange(data)
    // }
    // }
   }
  }

  handleMsgReceived = (message) => {
    const messages = this.state.messages.concat(message);
    this.setState({ messages });
  }

  // TODO create another function to handle changing username
  // TODO add this function to the first input of chat bar
  // pretty much same thing as message, expect the type is different
  // TODO the function above must change state of the currentUser object

  addMessage = (message)  => {
    // TODO: add another key for type of message (in this case just 'textMessage' or something)
    const newMessage = {username: this.state.currentUser.name, content: message};

    const messages = this.state.messages.concat(newMessage);
    this.setState({ messages });

    this.socket.send(JSON.stringify(newMessage));
  }

  editUser = (name) => {

    const newName = {username: name}
    console.log(name);
    const names = this.state.messages.concat(newName);
    this.setState({ names });
    this.socket.send(JSON.stringify(newName));

  }


  render(){
  // console.log("Rendering <App/>");
  return (
    <div>
    <NavBar name={this.state.title} onlineUsers={this.state.onlineUsers}/>
    <MessageList username={this.state.currentUser.name} messages={this.state.messages} />
    <ChatBar user={this.state.currentUser} addMessage={this.addMessage}/>
    </div>
    );

  }
}

export default App;

