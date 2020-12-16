import React, { Component } from 'react';
import DisplayCards from './DisplayCards';
// import Header from './Header';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>This is our home component</h1>
        <div className="flexed">
        {/* <Header /> */}
         <DisplayCards />
        </div>
      </div>
    );
  }
}

export default Home;