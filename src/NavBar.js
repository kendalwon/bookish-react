import React, { Component } from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ active: !this.state.active });
  }

  render() {
    return (
      <div className="navBar">
        <div className="navTitle">
          <h1 className="title">Bookish</h1>
          <h2 className="tagline">raising readers</h2>
        </div>
        <ul className="menuList">
            <li className="navLink"><Link to="/tips">Tips</Link></li>
            <li className="navLink"><Link to="/reads">Reads</Link></li>
            <li className="navLink"><Link to="/Toys">Toys</Link></li>
            <li className="navLink"><Link to="/Stores">Stores</Link></li>
          </ul>
        <div className="dropdown">
          <div 
            onClick={ this.handleClick }
            className={ this.state.active ? "dropbtn change" : "dropbtn" }>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <div className={ this.state.active ? "dropdown-content show" : "dropdown-content" }>
            <Link to="/">HOME</Link>
            <Link to="/tips">TIPS</Link>
            <Link to="/reads">READS</Link>
            <Link to="/toys">TOYS</Link>
            <Link to="/stores">STORES</Link>
          </div>
        </div>   
      </div>
    );
  }
};

export default NavBar;
