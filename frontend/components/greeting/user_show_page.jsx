import React from 'react';
import AddProfileContainer from './add_profile_container';
import {Link, Redirect} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

class UserShowPage extends React.Component {
    constructor(props) {
        super(props)
        this.showMenu = this.showMenu.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
        this.logout = this.logout.bind(this);
        this.goAdd = this.goAdd.bind(this);
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

    goAdd(e) {
        e.preventDefault();
        this.props.history.push('/add')
    }
    shouldComponentUpdate(nextProps,nextState) {
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        if ( Object.values(prevProps.profiles).length !== Object.values(this.props.profiles).length ) {
            this.props.fetchProfiles();
        }
    }
    render() {
        
         const add_button = (this.props.currentUser.profile_ids.length < 5 ? (
                <div className="add-button-container">
                    <button className="add-button-whole" onClick={this.goAdd}>
                    <FontAwesomeIcon className="button-div" id="add-profile-icon" size='10x' icon={faPlusCircle} />
                    <h2 className="add-prof-button"> Add Profile</h2>
                    </button>
                   
                </div>
            ): ( <div></div> ))
        const profiles = this.props.currentUser.profile_ids.map( (id,idx) => {
            const prof = this.props.profiles[id-1];
            if (prof) {
            return <div key={idx}  >
                <Link className="add-profile-cont-whole" to={{pathname: `/profiles/${prof.id}`, state: {profiles: this.props.profiles} }} >
                    <img className="button-div" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" />
                    <h2 className="profile-name-text-show" > {prof.name} </h2>
                </Link> 
            </div>
            }
           
        })
        const show_profiles = (  <div className="profiles-page">
                <h1 className="netflix-text profile-header-text"> HeroFlix </h1>
                <div className="profiles-header">
                    <h1 className="who-watch"> Who's watching? </h1>
                </div>
                <div className="profiles-col">
                    
                    {profiles}
                    {add_button}
                </div>
                
            </div>)
        return ( 
          <div className="showpage-container">
          {show_profiles}
          </div>
        )
    }
}

export default UserShowPage;