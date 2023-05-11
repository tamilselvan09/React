import React, { Component } from 'react'
import users from './data'
class User extends Component {
    constructor(props) {
        super(props)
        console.log("First Const")
        this.state = {
            users: users
        }
    }
    componentDidMount() {
        console.log("third - after render method")
    }
    render() {
        console.log("Second render")
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <table className='table table-hover'>
                                <thead className='bg-dark text-white'>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Gender</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.users.map((user, i) => {
                                            return <tr key={i}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.gender}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default User
