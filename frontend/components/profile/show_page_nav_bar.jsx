import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch, faGift, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
class ShowPageNavBar extends React.Component {
    constructor(props) {
        super(props)
        this.signOut = this.signOut.bind(this);
        this.profilePage = this.profilePage.bind(this);
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

    render() {
        
        const search = <FontAwesomeIcon icon={faSearch} />
        const gift = <FontAwesomeIcon icon={faGift} />
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
                <h2 className="nav-bar-item"> https://github.com/divyams1 </h2>
                {/* <h2 className="nav-bar-item"> TV Shows </h2>
                <h2 className="nav-bar-item"> New And Popular</h2>
                <h2 className="nav-bar-item"> My List </h2> */}
            </div>
            <div className="nav-bar-right">
                <h2 className="nav-bar-item"> https://www.linkedin.com/in/divyam-satyarthi-b6628513b/ </h2>
                {/* <h2 className="nav-bar-item"> KIDS </h2>
                <h2 className="nav-bar-item"> DVD </h2>
                <h2 className="nav-bar-item">{gift}</h2> */}
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