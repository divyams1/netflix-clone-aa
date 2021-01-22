import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch, faGift, faCaretDown, faLink } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
class ShowPageNavBar extends React.Component {
    constructor(props) {
        super(props)
        this.signOut = this.signOut.bind(this);
        this.profilePage = this.profilePage.bind(this);
        this.state = { search: false , titleSearch: false, currentSearch: '' }
        this.toggleSearch = this.toggleSearch.bind(this);
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
    render() {
        const git = <img className="link-icon github" alt="icon" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" height={30} width={30}></img>;
         const link = <img  className="link-icon linked" alt="icon" src="https://pngmind.com/wp-content/uploads/2019/08/Linkedin-Logo-Png-Transparent-Background.png" width={30} height = {30} margin-top= {20} ></img>
        const search = <FontAwesomeIcon icon={faSearch} size={'1x'} onClick={this.toggleSearch} />
        const searchBar = <div className="search-div-bar"> {search} <input onChange={this.props.updateSearch()} className="search-bar" placeholder={`Search Titles`}  type="text"></input> </div>
        const searchShow = this.state.search? searchBar : search
        const down = <FontAwesomeIcon icon={faCaretDown} />
        const profiles_drop = Object.keys(this.props.profiles).length > 0 ? ( 
            <div className="dropdown-content">
                {this.props.currentUser.profile_ids.map( (id, idx) => {
                    return <div className="single-div-dropdown" key={idx}>
                                <Link to={`/profiles/${id}`}>
                                    <div className="nav-bar-dropdown-item">
                                    <p className="nav-bar-dropdown-text"> {this.props.profiles[id-1].name}  </p>
                                    <img className="nav-bar-dropdown-image" src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" />
                                    </div>
                                </Link>
                           </div>
                })}
                <button onClick={this.profilePage} className="sign-out-button"> Account </button>
                 <button onClick={this.signOut} className="account-button"> Sign Out of HeroFlix </button>
            </div>
        ) : ( <div></div>);
        return(
        <div className="nav-bar-show">
            <div className="nav-bar-left">
                <h1 className="netflix-text netflix-text-navbar"> HeroFlix </h1>
                <a  className="nav-bar-link" href="https://github.com/divyams1"> {git} </a>
                <a  className="nav-bar-link"href="https://www.linkedin.com/in/divyam-satyarthi-b6628513b/"> {link} </a>
            </div>
            <div className="nav-bar-right">
                <h2 className="nav-bar-item">{searchShow}</h2> 
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