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
        this.props.processForm(user);
    }

    handleInput(field) {
        return e => {
            this.setState( { [field]: e.currentTarget.value })
        }
    }

    render() {
        const display = ( (this.props.formType === 'login') ? (
            <div className = 'session-form'>
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
                    <button onClick = {this.handleSubmit}> Log In </button>
                </form>
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