import React from 'react';
import { Link} from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    const display = currentUser ? (
        <div>
            <h1> Welcome, { currentUser.username } </h1>
            <button onClick={logout}> Log Out </button>
        </div>
    ): (
        <div>
            <div className="top-greeting-box">
                <div className="login-bar">
                    <h1> Netflix </h1>
                    <Link className="btn signin-btn" to="/login">Sign In</Link>
                </div>
                <div className="signup-box">
                    <div></div>
                    <div>
                    <h1> Unlimited movies, TV shows, and more.</h1>
                    <h3> Watch anywhere. Cancel anytime.</h3>
                    <h4> Ready to watch? Enter your email to create or restart your membership</h4>
                    <Link className="btn signup-btn" to="/signup">  Sign Up</Link>
                    </div>
                    <div></div>
                </div>
                
            </div>
            <div className="tv">
                <div className="tv-text">
                    <h1 className="tv-text-header"> Enjoy on your TV.</h1>
                    <h2 className="tv-text-text"> Watch on Smart TVs, PLaystation, XBOX, Chromecast, Apple TV
                        Blu-ray players, and more.
                    </h2>
                </div>
                <img className="tv-image" src="https://9to5mac.com/2015/06/15/netflix-redesigned-homepage/jaw_en/" />
            </div>
            <div className="download">
                <img className="download-image" src="https://content.fortune.com/wp-content/uploads/2017/04/netflix1.gif?resize=1200,600" />
                <div className="download-text">
                    <h1 className="download-text-header">Watch everywhere.</h1>
                    <h2 className="download-text-text">Stream unlimited movies and TV shows on your phone, tablet, labtop, and TV without paying more.</h2>
                </div>
            </div>
            <div className="faq">
                <h1> Frequently Asked Questions </h1>
                <button className="dropbtn-1">What is Netflix?</button>
                    <div className="dropcontent-1">
                        <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                    </div>
            </div>
        </div>
       )

    return (
        <div>
            {display}
        </div>
    )
}

export default Greeting;