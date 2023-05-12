import React, { Component } from 'react'

class Registration extends Component {
    state = {
        firstName: "",
        lastName: "",
        mobileNo: "",
        emailId: ""
    }
    fnHandler = (event) => {
        /*  console.log(event) */
        console.log(event.target)
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({ firstName: event.target.value })
    }
    lnHandler = (event) => {
        this.setState({ lastName: event.target.value })
    }
    mnHandler = (event) => {
        this.setState({ mobileNo: event.target.value })
    }
    emailHandler = (event) => {
        this.setState({ emailId: event.target.value })
    }
    render() {
        return (
            <div>
                <h1>Registration Page</h1>
                <pre>{JSON.stringify(this.state)}</pre>
                <form >
                    <label >First Name:</label>
                    <input type="text" name="firstName" onChange={this.fnHandler} /> <br />    <br />
                    <label >Last Name:</label>
                    <input type="text" name="lastName" onChange={this.lnHandler} /> <br /><br />
                    <label >Mobile Number:</label>
                    <input type="text" name="mobileNo" onChange={this.mnHandler} /> <br /><br />
                    <label >Email Id:</label>
                    <input type="text" name="emailId" onChange={this.emailHandler} /> <br /><br />
                    <input type="submit" value="Registration" />
                </form>
            </div>
        )
    }
}

export default Registration