import React from 'react'
import Message from './EventBinding/Message'
import Salary from './EventBinding/Salary'
import Messagess from './EventBinding/Messagess'

class App extends React.Component {
  render(){
    return <div>
      <nav className='navbar navbar-dark bg-dark'>
        <a href='#' className='navbar-brand'>product Data</a>
      </nav>
      <hr />
      <Message />
      <hr />
      <Salary />
      <hr />
      <Messagess />
    </div>
    
  }
}
export default App