import React from 'react';
import AddProfileContainer from './add_profile_container';
import {Link, Redirect} from 'react-router-dom';

class UserShowPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { addPage: false, editPage: false, count: 0}
        this.showMenu = this.showMenu.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
        this.logout = this.logout.bind(this);
    }
    componentDidMount() {
        this.props.fetchProfiles();
    }
    showMenu(e) {
        e.preventDefault();
        this.setState({ addPage: true})
    }
    logout(e) {
        e.preventDefault();
        this.props.Logout()
            .then(this.props.history.push(`/login`))
    }

    toggleShow() {
        this.setState({addPage: false})
    }

    componentDidUpdate(prevProps, prevState) {
        
        if (Object.keys(prevProps.profiles).values !== Object.keys(this.props.profiles).values ) {
            this.setState( {count: this.state.count += 1 })
        }
    }
    render() {
        
         const add_button = (this.props.currentUser.profile_ids.length < 5 ? (
                <div className="add-button-container">
                    <button onClick={this.showMenu}>
                    <img className="button-div add-button-img" src="https://i.gyazo.com/a221e2b708b2cee58bca928aede1ec6b.png"/>
                    <h2 className="add-prof-button"> Add Profile</h2>
                    </button>
                   
                </div>
            ): ( <div></div> ))
        const profiles = this.props.currentUser.profile_ids.map( (id,idx) => {
            const prof = this.props.profiles[id-1];
            if (prof) {
            return <div key={idx}  >
                <Link  to={{pathname: `/profiles/${prof.id}`, state: {profiles: this.props.profiles} }} >
                    <img className="button-div" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" />
                    <h2 > {prof.name} </h2>
                </Link> 
            </div>
            }
           
        })
        const show_profiles = (  <div className="profiles-page">
                <h1 className="netflix-text"> Netflix </h1>
                <button onClick={this.logout}>Logout</button> 
                <div className="profiles-header">
                    <h1> Who's watching? </h1>
                </div>
                <div className="profiles-col">
                    {profiles}
                    {add_button}
                </div>
                
            </div>)
        const display = (this.state.addPage ? <AddProfileContainer toggleShow={this.toggleShow} /> : show_profiles)
        return ( 
          <div className="showpage-container">
          {display}
          </div>
        )
    }
}

export default UserShowPage;