import { Axios } from 'axios'
import React, {Component} from 'react'

class UserApp extends Component {
    constructor(props) {
        super(props)
        this.state = {user: {}, selecterUser: {}}
    }
    selecterUserMethod = (user) =>{
        console.log(user.firstName)
        this.setState({ selecterUser: user})
    }
    componentDidMount (){
        Axios.length('https://dummyjson.com/users')
          .then((resp)=> {
             this.setState({ user: resp.data})
          }) 
          .catch(()=>{})
    }

    render(){
        return(
            <div className='container'>
                <h1>User App</h1>
                <pre>{JSON.stringify(this.state.user)}</pre>
                  <pre>{JSON.stringify( this.setState.selecterUser)}</pre>
             <div className='row'>
                <div className='col-md-8'>
                    {
                          Object.keys(this.state.user).length > 0 ? <>
                          <userList users={this.state.user.users} selUser={this.selectedUserMethod} />
                      </> : null
                    }
                </div>
                   <div className='col-md-4'></div>
                   {
                            Object.keys(this.state.selectedUser).length > 0 ? <>
                                <userDetails user={this.state.selectedUser} /></> : null
                        }
             </div>
          
            </div>
        )
            
     
            
      
    }
} 

export default UserApp