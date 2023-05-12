import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import User from "./User/User-2";
import {BrowserRouter as Router} from 'react-router-dom'
import {Route,Switch } from 'react-router-dom/cjs/react-router-dom.min'

function App (){
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
                   <Route path="/index" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/services" component={Services} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/users" component={User} />
        </Switch>
      </Router>
    </div>
  )
}
 export default App