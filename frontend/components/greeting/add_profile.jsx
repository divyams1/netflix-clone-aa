import React from 'react';

class AddProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", user_id: this.props.currentUser.id }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    update(field) {
        return e => this.setState({name: e.currentTarget.value})
    }

    handleSubmit(e)  {
        e.preventDefault();
        this.props.createProfile(this.state)
        this.props.toggleShow()
    }



    render() {
        return (
            <div className="add-profile-container">
                <h1 className="netflix-text"> Netflix </h1>
                <div className="add-form-container">
                    <div>
                        <h1 className="Add-prof-text"> Add Profile </h1>
                        <p className="profile-subtext"> Add a profile for another person watching Netflix</p>
                    </div>
                    <form className="add-form">
                        <img className="profile-image" src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" />
                        <input className="name-form-input" type='text' value={this.state.name} placeholder="Name" onChange={this.update('name')}></input>
                    </form>
                    <div className="add-prof-bottom-button-cont">
                        <button className="cont-button" type="button" onClick={this.handleSubmit}>CONTINUE</button> 
                        <button className="cancel-button" onClick={this.props.toggleShow}> CANCEL </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddProfile;