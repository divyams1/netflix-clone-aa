const { ReactReduxContext } = require("react-redux");
import React from 'react';
import { Link, Redirect } from 'react-router-dom';




class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        const newState = ( this.props.formType === 'login'? { username: '', password: '', email: ''} : { username: this.props.match.params.email, password: '', email: this.props.match.params.email} )
        this.state = newState
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
    // componentWillUnmount() {
    //     this.props.removeErrors();
    // }

    render() {
        const signUp = this.props.errors.signup || [];
        const signInErrors = this.props.errors.login || [];
        const errors =  signInErrors.map( (error, idx) => {
            return (<div key={idx} className="error-container">
                <p className="error-text"> {error} </p>
            </div>) 
        })
        const signUpErrors =  signUp.map( (error,idx) => {
            return (<div key={idx} className="error-container">
                <p className="error-text-sign-in"> {error} </p>
            </div>) 
        })
        const display = ( (this.props.formType === 'login') ? (
            <div className ='login-page'>
                <div>
                    <Link to="/">
                    <h1 className="loginNetflix"> HeroFlix </h1>
                    </Link>
                </div>
                <div className="login-container">
                    <div className = 'session-form'>
                        <form>
                            <h1 className="login-page-text login-page-header"> Sign In </h1>
                            { errors[0] }
                            <br></br>
                            <label>
                                <input type='text' className="login-input"  value={this.state.email } placeholder="Enter your Email" onChange={this.handleInput('email')}/>
                            </label>
                            <br></br>
                            <label>
                                <input type='password' className="login-input"  value={this.state.password} placeholder="Enter your password" onChange={this.handleInput('password')}/>
                            </label>
                            <br></br>
                            <button className=" signin-login-btn signin-btn" onClick = {this.handleSubmit}> Sign In </button>
                             <p className="login-page-text"> New to HeroFlix? <Link className="login-text-link" to="/signup">Sign up now.</Link></p>
                             
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
                            <Link to="/">
                            <h1 className="loginNetflix"> HeroFlix </h1>
                            </Link>
                        </div>
                        <Link className="login-text-link" to='/login'> <h2 className="sign-up-link">Sign In</h2></Link>
                    </div>
                <div className="signup-form-container">
                <form className="signup-form">
                    <h1 className="signup-big-text first-sign-up"> Welcome Back!</h1> 
                    <h1 className="signup-big-text">Joining HeroFlix is easy.</h1>
                    <h3 className="signup-small-text"> Enter your password and you'll be watching in no time.</h3>
                            <h4 className="email-text-title"> Email </h4>
                            <p className="email-text"> {this.state.email} </p>
                            <br className="loginbreak" ></br>
                            <input type='password' className="signup-input" value={this.state.password} placeholder="Enter your password" onChange={this.handleInput('password')}/>
                            {signUpErrors}
                            <br className="loginbreak"></br>
                        <button className="signup-btn-last" onClick = {this.handleSubmit}> CONTINUE </button>
                        
                    </form>
                </div>
            </div>
        ))
          return (
              <div>
                  {display}
                  
              </div>
          )  
        }

    }

export default SessionForm;