import React from 'react';
import SignUpFormContainer from '../session/signup_form_container'

class SignUpForm extends React.Component {

    constructor(props) {
        super(props)
        this.goToSignUp = this.goToSignUp.bind(this);
        this.state = { email: ''}
    }
    handleInput(field) {
        return e => {
            this.setState( { [field]: e.currentTarget.value })
        }
    }
    goToSignUp(e) {
        
        e.preventDefault();
        
        this.props.history.push(`/signup/${this.state.email}`)
    }

    render() {
        return(
            <form className="email-submit-form">
                <div className="text-box-div">
                    <input className="email-text-box" type="text" placeholder="Email address" value={this.state.email}  onChange={this.handleInput('email')} ></input>
                </div>
                <button className="email-submit-but" onClick={this.goToSignUp}> GET STARTED</button>
            </form>
        )
    }
}

export default SignUpForm;