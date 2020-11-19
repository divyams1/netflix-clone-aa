import React from 'react';

class AddProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: null, user_id: this.props.currentUser.id }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    update(field) {
        return e => this.setState({name: e.currentTarget.value})
    }

    handleSubmit(e)  {
        e.preventDefault();
        this.props.createProfile(this.state)
            .then(this.props.toggleShow())
    }



    render() {
        return (
            <div className="add-profile-container">
                <h1 className="netflix-text"> Netflix </h1>
                <div className="add-form-container">
                    <div>
                        <h1> Add Profile </h1>
                        <p className="profile-subtext"> Add a profile for another person watching Netflix</p>
                    </div>
                    <form>
                        <img className="profile-image" src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" />
                        <input type='text' value={this.state.name} placeholder="Name" onChange={this.update('name')}></input>

                        <button type="button" onClick={this.handleSubmit}>Continue</button> 
                        
                    </form>
                    <button onClick={this.props.toggleShow}> Cancel </button>
                </div>
            </div>
        )
    }
}

export default AddProfile;