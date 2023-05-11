import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <Link to="#" className="navbar-brand">React Routing</Link>
                <div className='ml-auto'>
                    <ul className='navbar-nav'>
                        <li className='nav-list'><Link to="/index" className='nav-link'>Home</Link></li>
                        <li className='nav-list'><Link to="/about" className='nav-link'>About</Link></li>
                        <li className='nav-list'><Link to="/service" className='nav-link'>Services</Link></li>
                        <li className='nav-list'><Link to="/contact" className='nav-link'>Contact us</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar