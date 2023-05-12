import React,{Component} from "react";
import Axios from 'axios'
class Users extends Component{
    constructor(props){
        super(props)
        this.state ={
        users:[]
    }

  }
    getUserHandler =()=>{
       Axios.get('https://jsonplaceholder.typicode.com/users')
       .then((response)=>{
             console.log(response)
       })
       .catch(()=>{})
  }

    render(){
        return(
            <div>
                <h1>Users data</h1>
                <pre>{JSON.stringify(this.state)}</pre>
                 <button onClick={this.getUserHandler}></button>
            </div>
        )
    }
}
export default Users