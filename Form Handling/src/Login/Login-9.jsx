import React from "react";

const Login =()=>{
    let [user , setUser] =React.useState({email: "", password:""})
    let emailHandler = (event) =>{
        setUser({...user,email: event.target.value})
    }
    let passwordHandler = (event) =>{
        setUser({...user,password: event.target.value})
    }
    let submitHandler =(event) =>{
        event.preventDefault()
        alert(JSON.stringify(user))
        console.log(user)
    }
    return (
        <div className="containe">
            <pre>{JSON.stringify(user)}</pre>
            <div className="row">
                <div className="col-md-6">
                    <h1>LOGIN PAGE</h1>
                    <form onSubmit={submitHandler}>
                        <label>Email Id:</label>
                        <input type="text" onChange={emailHandler}/>
                        <label> Password:</label>
                        <input type="text" onChange={passwordHandler}/>
                        <input type="submit" value="login" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login