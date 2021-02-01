import React from 'react';

class AddProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { profile: { name: "", user_id: this.props.currentUser.id }, count: 0 }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    update(field) {
        return e => this.setState({profile: {name: e.currentTarget.value, user_id: this.props.currentUser.id }})
    }
    componentDidMount() {
        this.props.fetchProfiles();
    }

    wait()  {
        this.props.history.push('/')
    }

    handleSubmit(e)  {
        e.preventDefault();
        const new_id = Object.values(this.props.profiles).length;
        this.props.createProfile(this.state.profile)
            .then( (profile) => this.props.history.push('/'))
        // then( this.props.history.push('/')  )
        // `/profiles/${new_id}`
    }

    cancel(e) {
        e.preventDefault();
        this.props.history.push('/')
    }



    render() {
        return (
            <div className="add-profile-container">
                <h1 className=" netflix-text profile-header-text"> HeroFlix </h1>
                <div className="add-form-container">
                    <div>
                        <h1 className="Add-prof-text"> Add Profile </h1>
                        <p className="profile-subtext"> Add a profile for another person watching Netflix</p>
                    </div>
                    <form className="add-form">
                        <img className="profile-image" src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" />
                        <input className="name-form-input" type='text' value={this.state.profile.name} placeholder="Name" onChange={this.update('name')}></input>
                    </form>
                    <div className="add-prof-bottom-button-cont">
                        <button className="cont-button" type="button" onClick={this.handleSubmit}>CONTINUE</button> 
                        <button className="cancel-button" onClick={e => this.cancel(e)}> CANCEL </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddProfile;