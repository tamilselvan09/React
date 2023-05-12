import React from 'react'
class Login extends React.Component {
    state = {
        email: "",
        password: ""
    }
    emailHandler = (event) => {
        this.setState({ email: event.target.value })
    }
    passwordHandler = (event) => {
        this.setState({ password: event.target.value    })
    }
    render() {
        return <div className='container mt-5'>
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3>Login Page</h3>
                        </div>
                        <div className="card-body">
                            <form >
                                <div className='form-group'>
                                    <input className='form-controll' onChange={this.emailHandler} type="text" placeholder='Email Id' />
                                </div>
                                <div className='form-group'>
                                    <input className='form-controll' onChange={this.passwordHandler} type="password" placeholder='Password' />
                                </div>
                                <input type="sumbit" value="Login" className='btn btn-primary' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

}
export default Login