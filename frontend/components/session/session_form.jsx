const { ReactReduxContext } = require("react-redux");
import React from 'react';
import { Link, Redirect } from 'react-router-dom';




class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(  () => this.props.history.push('/'))
    }

    handleInput(field) {
        return e => {
            this.setState( { [field]: e.currentTarget.value })
        }
    }

    render() {
        const display = ( (this.props.formType === 'login') ? (
            <div className ='login-page'>
                <div>
                    <h1 className="loginNetflix"> Netflix </h1>
                </div>
                <div className="login-container">
                    <div className = 'session-form'>
                        <form>
                            <h1 className="login-text"> Sign In </h1>
                            <label>
                                <input type='text' className="login-input"  value={this.state.username || "Enter your username" } onChange={this.handleInput('username')}/>
                            </label>
                            <br></br>
                            <label>
                                <input type='text' className="login-input"  value={this.state.email || "Enter your email"} onChange={this.handleInput('email')}/>
                            </label>
                            <br></br>
                            <label>
                                <input type='password' className="login-input"  value={this.state.password || "password"} onChange={this.handleInput('password')}/>
                            </label>
                            <br></br>
                            <button className="signin-btn signin-login-btn" onClick = {this.handleSubmit}> Sign In </button>
                             <p className="login-text"> New to Netflix? <Link className="login-text-link" to="/signup">Sign up now.</Link></p>
                        </form>
                        <div>
                           
                        </div>
                    </div>
                </div>
            </div>
        ) : (
                <div className="signup-page">
                    <div className="signup-header">
                        <div>
                            <h1 className="loginNetflix"> Netflix </h1>
                        </div>
                        <Link className="login-text-link" to='/login'> <h2>Sign In</h2></Link>
                    </div>
                <div className="signup-form-container">
                <form className="signup-form">
                    <h1> Welcome Back!</h1> 
                    <br></br>
                    <h1>Joining Netflix is easy.</h1>
                            <input type='text' className="signup-input" value={this.state.username || "Enter your username"} onChange={this.handleInput('username')}/>
                            <br className="loginbreak" ></br>
                            <input type='text' className="signup-input" value={this.state.email || "Enter your email"} onChange={this.handleInput('email')}/>
                            <br className="loginbreak" ></br>
                            <input type='password' className="signup-input" value={this.state.password || "password"} onChange={this.handleInput('password')}/>
                            <br className="loginbreak"></br>
                        <button className="signin-btn signin-login-btn" onClick = {this.handleSubmit}> Sign Up </button>
                    </form>
                </div>
            </div>
        ))
          return (
              <div>
                  {display}
                  {this.props.errors}
              </div>
          )  
        }

}

export default SessionForm;