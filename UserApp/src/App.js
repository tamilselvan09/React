import React from 'react'
import Home from './UserApp/Home'
//import UserApp from './UserApp/UserApp'
import UserApp from './UserApp-9/UserList'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
class App extends React.Component {
    render() {
        return <div>
            <Router>
                <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                    <Link to="/" className='navbar-brand'>User App</Link>
                    <div className='ml-auto'>
                        <ul className='navbar-nav'>
                            <li className='nav-list'><Link className='nav-link' to="/home">Home</Link></li>
                            <li className='nav-list'><Link className='nav-link' to="/users">Users</Link></li>
                        </ul>
                    </div>
                </nav>
                
                <Switch>
                    <Route path="/home" element={<Home />} />
                    <Route path="/users" element={<UserApp />} />
                </Switch>

                </Router>
        </div>
    }
}


export default App