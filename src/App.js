import React, {Component} from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";


class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

//Route used for the sake of matching route with 
//which component to render to the page
