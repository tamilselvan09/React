import React from 'react'
 import Employee from './Employee/Employee'
 import Navbar from './Navbar/Navbar'

import Digital from './Digital/Digital'

import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import User from './User/User'

class App extends React.Component {
    render() {
        return <div>
            <Router>
                
                <Digital />

                <hr />
                <Employee />
                <hr />
                <Navbar />
                <hr />
                <User />
            </Router>
        </div >
    }
}
export default App