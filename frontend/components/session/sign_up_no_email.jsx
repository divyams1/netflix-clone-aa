import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SignUpNoEmail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', email: ''}
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        user.username = user.email;
        this.props.processForm(user)
            .then(  (user) => this.props.history.push(`/`))
            
    }
      handleInput(field) {
        return e => {
            this.setState( { [field]: e.currentTarget.value })
        }
    }
    render() {
        const errors =  this.props.errors.map( (error,idx) => {
            return (<div key={idx} className="error-container">
                <p className="error-text"> {error} </p>
            </div>) 
        })
        if ( errors[0]=== "Invalid username or password") {
            errors = <div></div>
        }
        const display = (<div className="signup-page">
                    <div className="signup-header">
                        
                        <div>
                            <Link to='/'>
                            <h1 className="loginNetflix sign-up-header-heroflix"> HeroFlix </h1>
                            </Link>
                        </div>
                        <Link className="login-text-link" to='/login'> <h2 className="sign-up-link" >Sign In</h2></Link>
                    </div>
                <div className="signup-form-container">
                <form className="signup-form">
                    <h1 className="signup-big-text first-sign-up"> Welcome Back!</h1> 
                    <h1 className="signup-big-text">Joining HeroFlix is easy.</h1>
                    <h3> Enter your email and password and you'll be watching in no time.</h3>
                            <input type='text' className="signup-input" value={this.state.email} placeholder="Enter your email" onChange={this.handleInput('email')}/>
                            <br className="loginbreak" ></br>
                            <input type='password' className="signup-input" value={this.state.password} placeholder="Enter your password" onChange={this.handleInput('password')}/>
                            <br className="loginbreak"></br>
                        <button className="signin-btn signin-login-btn" onClick = {this.handleSubmit}> CONTINUE </button>
                        {errors}
                    </form>
                </div>
            </div>)
              return (
              <div>
                  {display}
              </div>
          )  
    }
}

export default SignUpNoEmail;