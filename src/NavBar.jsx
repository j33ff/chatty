import React, {Component} from 'react';

class NavBar extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (

      <nav className="navbar">
      <a href="/" className="navbar-brand">{this.props.name}</a>
      <button className="counter"> {this.props.onlineUsers} Online User(s)</button>
      </nav>
      )
  }
} //end of class ----------------------------



export default NavBar;