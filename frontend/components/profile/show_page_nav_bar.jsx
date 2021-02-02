import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch, faGift, faCaretDown, faLink ,faTimes } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
class ShowPageNavBar extends React.Component {
    constructor(props) {
        super(props)
        this.signOut = this.signOut.bind(this);
        this.profilePage = this.profilePage.bind(this);
        this.state = { search: false , titleSearch: false, currentSearch: '' }
        this.toggleSearch = this.toggleSearch.bind(this);
        this.myList = this.myList.bind(this);
        this.toggleOff = this.toggleOff.bind(this);
    }
    signOut(e) {
        e.preventDefault();
        this.props.Logout();
        this.props.history.push('/')
    }

    profilePage(e) {
        e.preventDefault();
        this.props.history.push('/')
    }
    toggleSearch() {
        this.setState({ search: true })
    }
    toggleOff() {
        this.setState({ search: false })
    }
    myList(e) {
        e.preventDefault();
        const profileId = this.props.match.params.profileId; 
        this.props.history.push(`/profiles/${profileId}/myList`)
    }
    render() {
        const x = <FontAwesomeIcon icon={faTimes} size={'1x'} onClick={this.toggleOff} />
        const git = <img  className="link-icon github" alt="icon" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" height={30} width={30}></img>;
         const link = <img  target="_blank" className="link-icon linked" alt="icon" src="https://pngmind.com/wp-content/uploads/2019/08/Linkedin-Logo-Png-Transparent-Background.png" width={30} height = {30} margin-top= {20} ></img>




        const search = <FontAwesomeIcon  icon={faSearch} size={'1x'} onClick={this.toggleSearch} />
        const searchBar = <div className="search-div-bar"> {search} <input onChange={this.props.updateSearch()} className="search-bar"  placeholder={`Search Titles`}  type="text"></input> </div>












        // const searchShow = this.state.search? searchBar : search
        const down = <FontAwesomeIcon id="nav-bar-down" icon={faCaretDown} />
        let allProfiles = this.props.profiles || [];
        const profiles = Object.values(allProfiles).filter((profile) => {
            return profile.user_id === this.props.currentUser.id
        } )
        const profiles_drop = Object.keys(this.props.profiles).length > 0 ? ( 
            <div className="dropdown-content">
                {profiles.map( (profile, idx) => {
                    return <div className="single-div-dropdown" key={idx}>
                                <Link to={`/profiles/${profile.id}`}>
                                    <div className="nav-bar-dropdown-item">
                                    <p className="nav-bar-dropdown-text"> {profile.name}  </p>
                                    <img className="nav-bar-dropdown-image" src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" />
                                    </div>
                                </Link>
                           </div>
                })}
                <button onClick={this.profilePage} className="sign-out-button"> Account </button>
                 <button onClick={this.signOut} className="account-button"> Sign Out of HeroFlix </button>
            </div>
        ) : ( <div></div>);
        const myListDiv = (   <Link className="my-list-link" to={`/profiles/${this.props.profileId}/myList`}>
                    <p className="my-list-text"> My List </p>
                </Link>)
        
        return(
        <div className="nav-bar-show">
            <div className="nav-bar-left">
                <Link to={`/profiles/${this.props.profileId}`}>
                <h1 className="netflix-text netflix-text-navbar"> HeroFlix </h1>
                </Link>
                <a  className="nav-bar-link" target="_blank" href="https://github.com/divyams1"> {git} </a>
                <a  className="nav-bar-link" target="_blank" href="https://www.linkedin.com/in/divyam-satyarthi-b6628513b/"> {link} </a>

                <a className="my-list-link portfolio-link" target="_blank" href="https://divyams1.github.io/divyam-satyarthi/"> Portfolio </a>
              
                {myListDiv}
            </div>
            <div className="nav-bar-right">
                <h2 className="nav-bar-item">{searchBar}</h2> 
                <div className="dropdown-hover">
                    <h2 className="nav-bar-item last-item dropbtn"><img className="nav-bar-image" src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" />{down}</h2>
                    {profiles_drop}
                   
                </div>
            </div>
        </div>
        )
        }
}

export default ShowPageNavBar;

//   const gift = <FontAwesomeIcon icon={faGift} />