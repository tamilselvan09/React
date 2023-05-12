import React, {Component} from "react";
class Registration extends Component {
    state ={
        firstName:{},
        lastName:{},
        mobileNo:"",
        emailId:"",

    }
    updateHandler =(event)=>{
        console.log(event.target.name)
        console.log(event.target.value)
         this.setstate({
            [event.target.name]: event.target.value
         })

    }
    submitHandler =(event)=>{
        event.preventDefault();
        console.log(this.state)

    }

    render(){
        return (
            <div>
                <h1>Registration Form</h1>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.submitHandler}>
                    <label>First Name</label>
                    <input type="text" name="firstName" onchance={this.updateHandler} />  <br />
                    <label>Last Name</label>
                    <input type="text" name="lastName" onchance={this.updateHandler} />   <br />
                    <label>Mobile No</label>
                    <input type="text" name="mobileNo" onchance={this.updateHandler} />   <br />
                    <label>Email Id          </label>
                    <input type="text" name="emailId" onchance={this.updateHandler} /> <br />       <br />   <br />
                    
                      <button >Register</button>
                </form>

            </div>
        )
    }
}
export default Registration