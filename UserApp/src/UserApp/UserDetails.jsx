import { prettyDOM } from '@testing-library/react'
import React, {Component} from 'react'

class UserDetails extends Component {

    render(){
        let { user } = this.props
        return(
            
            <div>
                <h1>User Details</h1>
                 <pre>{JSON.stringify(user)}</pre>
                  <div className='card'>
                    <div className='card-hader'>
                        <img src= {user.image} alt="" />

                    </div>
                    <div className='card-body'>
                        <ul className='list-group'>
                            <li className='list-group-item'>{user.firstName}</li>
                            <li className='list-group-item'>{user.email}</li>
                            <li className='list-group-item'>{user.id}</li>
                            <li className='list-group-item'>{user.age}</li>
                            <li className='list-group-item'>{user.phonenumber}</li>
                        </ul>
                    </div>
                  </div>
            </div>
        )
            
     
            
      
    }
} 

export default UserDetails