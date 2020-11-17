import React from 'react';

export default () => {
    return (
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
    )
}