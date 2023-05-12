import React, {Component} from 'react'

class UserList extends Component {
    selectedUserHandler =(user)=>{
           
        this.props.selUser(user)
    }

    render(){
        return(
            <div className='container'>
                <h1>User List</h1>
                <pre>{JSON.stringify(this.props.users)}</pre>

                <div className='row'>
                    <div className='col'>
                        <table className='table'>
                            <thead className='bg-super text-white'>
                                <tr>
                                    <th>Id</th>
                                    <td>Name</td>
                                    <td>Email</td>
                                </tr>

                            </thead>
                            <tbody>
                                {
                                    this.props.user.map((user) =>{
                                        return <tr key={user.id} onMouseMove={this.selectedUserHandler.bind(this, user)}>
                                                <td>{user.id}</td>
                                                <td>{user.firstName}</td>
                                                <td>{user.email}</td>
                                        </tr>
                                    })
                                }

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        )
            
     
            
      
    }
} 

export default UserList