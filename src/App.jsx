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

    // console.log(data);
    // TODO have switch statement to handle different types of messages
    // this.handleMsgReceived(data);

    switch (data.type) {
      case 'editUser':
        this.handleEditUser(data)
        this.handleMsgReceived(data)
        console.log('editUser');
        break;

      case 'textMessage':
        this.handleMsgReceived(data)
        console.log('textMessage');
        break;

        case 'userCount':
        this.handleOnlineUsers(data)
        console.log('userCount');
        break;
    }
   }
  }

  handleMsgReceived = (message) => {
    console.log(message);
    const messages = this.state.messages.concat(message);
    this.setState({ messages });
  }

  handleOnlineUsers = (online)=>{
    const onlineUsers = online.online
    this.setState({ onlineUsers: onlineUsers });
  }

  handleEditUser = (user)=>{

  }



  addMessage = (message)  => {
    // TODO: add another key for type of message (in this case just 'textMessage' or something)
    const newMessage = {username: this.state.currentUser.name, content: message, type: "textMessage"};

    // this.setState({
    //   messages: this.state.messages.concat(newMessage)
    // });

    this.socket.send(JSON.stringify(newMessage));
  }

  editUser = (name) => {

    const oldName = this.state.currentUser.name;
    const newName = name;
    console.log(name);
    const names = this.state.messages.concat(newName);
    this.setState({ currentUser:{ name: newName}  });
    this.socket.send(JSON.stringify({type: "editUser", message: `${oldName} changed their name to ${newName}`}));


  }


  render(){
  // console.log("Rendering <App/>");
  return (
    <div>
    <NavBar name={this.state.title} onlineUsers={this.state.onlineUsers}/>
    <MessageList username={this.state.currentUser.name} messages={this.state.messages} />
    <ChatBar user={this.state.currentUser} addMessage={this.addMessage} editUser={this.editUser}/>
    </div>
    );

  }
}

export default App;

