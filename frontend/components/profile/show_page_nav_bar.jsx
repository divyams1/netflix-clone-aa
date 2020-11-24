import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch, faGift, faCaretDown } from '@fortawesome/free-solid-svg-icons';
class ShowPageNavBar extends React.Component {


    render() {
        const search = <FontAwesomeIcon icon={faSearch} />
        const gift = <FontAwesomeIcon icon={faGift} />
        const down = <FontAwesomeIcon icon={faCaretDown} />
        return(
        <div className="nav-bar-show">
            <div className="nav-bar-left">
                <h1 className="netflix-text netflix-text-navbar"> Netflix </h1>
                <h2 className="nav-bar-item"> Home </h2>
                <h2 className="nav-bar-item"> TV Shows </h2>
                <h2 className="nav-bar-item"> New And Popular</h2>
                <h2 className="nav-bar-item"> My List </h2>
            </div>
            <div className="nav-bar-right">
                <h2 className="nav-bar-item">{search}</h2>
                <h2 className="nav-bar-item"> KIDS </h2>
                <h2 className="nav-bar-item"> DVD </h2>
                <h2 className="nav-bar-item">{gift}</h2>
                <h2 className="nav-bar-item last-item"><img className="nav-bar-image" src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" />{down}</h2>

            </div>
        </div>
        )
        }
}

export default ShowPageNavBar;