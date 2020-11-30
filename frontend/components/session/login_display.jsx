import React from 'react';

export default () => {
    return (
        <div className ='login-page'>
                <div>
                    <h1 className="loginNetflix"> HeroFlix </h1>
                </div>
                <div className="login-container">
                    <div className = 'session-form'>
                        <form>
                            <h1 className="login-text"> Sign In </h1>
                            <label>
                                <input type='text' className="login-input"  placeholder="Enter your username" value={this.state.username} onChange={this.handleInput('username')}/>
                            </label>
                            <br></br>
                            <label>
                                <input type='text' className="login-input"  placeholder="Enter your email" value={this.state.email} onChange={this.handleInput('email')}/>
                            </label>
                            <br></br>
                            <label>
                                <input type='password' className="login-input"  placeholder="Enter your password" value={this.state.password} onChange={this.handleInput('password')}/>
                            </label>
                            <br></br>
                            <button className="signin-btn signin-login-btn" onClick = {this.handleSubmit}> Sign In </button>
                             <p className="login-text"> New to HeroFlix? <Link className="login-text-link" to="/signup">Sign up now.</Link></p>
                        </form>
                        <div>
                           
                        </div>
                    </div>
                </div>
            </div>
    )
}