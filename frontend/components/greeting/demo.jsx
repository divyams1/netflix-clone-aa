import React from 'react';
import {Link} from 'react-router-dom';
class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user={username: 'demouser', password:'demouser', email:'demouser'}
        this.props.processForm(user)
            .then(  (user) => this.props.history.push(`/`))
    }
    render() {
        
        const demoDisplay = (  <div className ='login-page'>
                <div>
                    <h1 className="loginNetflix"> HeroFlix </h1>
                </div>
                <div className="login-container">
                    <div className = 'session-form'>
                        <form>
                            <h1 className="login-text"> Sign In </h1>
                            <label>
                                <input type='text' readOnly className="login-input"  value="demouser" />
                            </label>
                            <br></br>
                            <label>
                                <input type='text' readOnly className="login-input"   value="demouser" />
                            </label>
                            <br></br>
                            <label>
                                <input type='password' readOnly className="login-input"   value="demouser" />
                            </label>
                            <br></br>
                            <button className="signin-btn signin-login-btn" onClick = {this.handleSubmit}> Sign In </button>
                             <p className="login-text"> New to Heroflix? <Link className="login-text-link" to="/signup">Sign up now.</Link></p>
                        </form>
                        <div>
                           
                        </div>
                    </div>
                </div>
            </div>)
    return (
       <div>
           {demoDisplay}
       </div>
    )
    }
}

export default Demo;