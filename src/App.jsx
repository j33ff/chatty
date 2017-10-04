import React, {Component} from 'react';
import MessageList from "./MessageList.jsx";
import ChatBar from "./ChatBar.jsx"
import NavBar from "./NavBar.jsx"



// // in App.jsx
// componentDidMount() {
//   console.log("componentDidMount <App />");
//   setTimeout(() => {
//     console.log("Simulating incoming message");
//     // Add a new message to the list of messages in the data store
//     const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
//     const messages = this.state.messages.concat(newMessage)
//     // Update the state of the app component.
//     // Calling setState will trigger a call to render() in App and all child components.
//     this.setState({messages: messages})
//   }, 3000);
// }

// render() {
//   // more code here..
// }






class App extends Component {
  constructor(props) {

    super(props);
    this.state = {
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
//-------------------------------------------
}

componentDidMount() {
  console.log("componentDidMount <App />");
  setTimeout(() => {
    console.log("Simulating incoming message");
    // Add a new message to the list of messages in the data store
    const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
    const messages = this.state.messages.concat(newMessage)
    // Update the state of the app component.
    // Calling setState will trigger a call to render() in App and all child components.
    this.setState({messages: messages})
  }, 3000);
}

addMessage(message) {
 console.log(message);
}

    render(){
    // console.log("Rendering <App/>");
    return (
      <div>
      <NavBar name={this.state.title}/>
      <MessageList username={this.state.currentUser.name} messages={this.state.messages} />
      <ChatBar user={this.state.currentUser} addMessage={this.addMessage}/>
      </div>
      );

    }
}

export default App;

