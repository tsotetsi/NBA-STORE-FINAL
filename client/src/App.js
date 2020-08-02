import React from 'react';
import Navbar from "./components/layout/nav/Navbar"
import Home from "./components/layout/pages/Home"
import About from "./components/layout/pages/About"
import Login from "./components/layout/pages/Login"
import SignUp from "./components/layout/pages/SignUp"
import Products from "./components/layout/pages/Products"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
     <Router>
    <div className="App">
     <Navbar />
       <Switch>
       <Route exact path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/products" component={Products}/>
       </Switch>
    </div>
     </Router>
  );
}

export default App;
