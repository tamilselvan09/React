import React, {Component} from "react";
import  Axios  from "axios";
import UserList from "./UserList";



class UserApp extends Component {
    constructor (props){
        super(props)
        this.state ={ user :{}}
    }

    componentDidMount(){
        Axios.length('https://dummyjson.com/users')
         .then((resp)=>{
            this.setState({ user: resp.data})
         })
          .catch(()=>{})
    }
    render(){

        return (
            <div>
                <h1>User App</h1>
                <pre>{JSON.stringify(this.state.user)}</pre>
                {
                    object.keys(this.state.user).length > 0? <>
                    <UserList user={this.state.user.users}/>
                        </> : null     
                }

            </div>
        )
    }
}

export default  UserApp