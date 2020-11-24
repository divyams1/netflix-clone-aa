import React from 'react';
import { Link} from 'react-router-dom';
import DropDown from './drop_down'
import UserShowPage from './user_show_page_container'
import {Login} from '../../actions/profile_actions';

const demo = () => {
    const demo_user = { username: 'demo', email: 'demo', password:'hunter2'};
    return () => dispatch(Login(demo_user));
}
const Greeting = ({currentUser, profiles, fetchProfiles, logout}) => {
    const BTNTEXT1 = "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
    const BTNTEXT2 = "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8.99 to $17.99 a month. No extra costs, no contracts."
    const BTNTEXT3 = "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    const BTNTEXT4 = "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    const BTNTEXT5 = "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    const display = currentUser ? (
        <div>
            
            <UserShowPage />
        </div>
    ): (
        <div>
            <div className="top-greeting-box">
                <div className="login-bar">
                    <h1> Netflix </h1>
                    <div className="sign-in-demo">
                    <Link className="btn signin-btn" to="/login">Sign In</Link>
                    <Link className="btn signin-btn" to="/demo" > Demo</Link>
                    </div>
                </div>
                <div className="signup-box">
                    <div></div>
                    <div className="greeting-text-div">
                    <h1 className="greeting-header"> Unlimited movies, TV shows, and more.</h1>
                    <h3 className="greeting-subtext1"> Watch anywhere. Cancel anytime.</h3>
                    <h3 className="greeting-subtext2"> Ready to watch? Enter your email to create or restart your membership</h3>
                    <Link className="btn signin-btn" to="/signup">  Sign Up</Link>
                    
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
            <div className="Download your shows ">

            </div>
            <div className="download">
                <img className="download-image" src="https://content.fortune.com/wp-content/uploads/2017/04/netflix1.gif?resize=1200,600" />
                <div className="download-text">
                    <h1 className="download-text-header">Download your shows to watch offline.</h1>
                    <h2 className="download-text-text">Save your favoties easily and always have something to watch.</h2>
                </div>
            </div>
            <div className="watch">
                <div className="watch-text">
                    <h1> Watch everywhere </h1>
                    <h2> Stream unlimited movies and TV shows on your phone, tablet, labtop, and TV without paying more</h2>
                </div>
                <img className="watch-image" src="https://miro.medium.com/max/2000/1*ulKLJ2v0_-eOl20qVzSkaA.gif" />

            </div>
            {/* <div className="faq">
                <h1> Frequently Asked Questions </h1>
               <DropDown btntext="What is Netflix?" showtext={BTNTEXT1} />
               <DropDown btntext="How much does Netflix cost?" showtext={BTNTEXT2} />
               <DropDown btntext="Where can I watch?" showtext={BTNTEXT3} />
               <DropDown btntext="How do I cancel?" showtext={BTNTEXT4} />
               <DropDown btntext="What can I watch on Netflix?" showtext={BTNTEXT5} />
            </div> */}

        </div>
       )
       

    return (
        <div>
            {display}
        </div>
    )
}

export default Greeting;