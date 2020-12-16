import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
// import DisplayCards from './Components/DisplayCards';
import Header from './Components/Header';
import './Components/Header.css';
import Home from './Components/Home';
import About from './Components/About';
import Users from './Components/Users';
import Services from './Components/Services';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App"> 
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/users" component={Users}/>
        <Route exact path="/services" component={Services}/>
      </Switch>

      <Footer />

    </div>
  );
}

export default App;
