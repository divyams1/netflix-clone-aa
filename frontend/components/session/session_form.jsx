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
                                <input type='text' className="login-input"  value={this.state.username || "username" } onChange={this.handleInput('username')}/>
                            </label>
                            <br></br>
                            <label>
                                <input type='text' className="login-input"  value={this.state.email || "email"} onChange={this.handleInput('email')}/>
                            </label>
                            <br></br>
                            <label>
                                <input type='password' className="login-input"  value={this.state.password || "password"} onChange={this.handleInput('password')}/>
                            </label>
                            <br></br>
                            <button className="signin-btn signin-login-btn" onClick = {this.handleSubmit}> Sign In </button>
                        </form>
                    </div>
                </div>
            </div>
        ) : (
               <form>
                    <label>Username:
                        <input type='text' value={this.state.username} onChange={this.handleInput('username')}/>
                    </label>
                     <label>Email:
                        <input type='text' value={this.state.email} onChange={this.handleInput('email')}/>
                    </label>
                     <label>Password:
                        <input type='password' value={this.state.password} onChange={this.handleInput('password')}/>
                    </label>
                    <button onClick = {this.handleSubmit}> Sign Up </button>
                </form>
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