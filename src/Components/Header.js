import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <ul>
          <li><Link to="/" className="link">Home</Link><br/></li>
          <li><Link to="/about" className="link">About</Link><br/></li>
          <li><Link to="/users" className="link">Users</Link><br/></li>
          <li><Link to="/services" className="link">Services</Link></li>
        </ul>
      </div>
    );
  }
}

export default Header;