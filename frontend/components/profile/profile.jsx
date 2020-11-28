import React from 'react';
import {Link} from 'react-router-dom';
import ShowPageNavBarContainer from './show_page_nav_bar';
import MainVideoContainer from './main_video_container';
import CarouselVideoContainer from './carousel_video_container';

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchProfiles()
        this.props.fetchGenres()
    }

    render() {
        const genre_conts = (Object.values(this.props.genres).length > 0 ? (Object.values(this.props.genres).map( (genre, idx) => {
            return <CarouselVideoContainer key={idx} genre={genre} />
        })) : <div></div> )
       
        const display = ( Object.values(this.props.profiles).length === 0 ? (<div> Hello </div>): (<div> Hello {this.props.profiles[this.props.match.params.profileId -1].name}</div>)) 
        return(
            <div className="profile-show ">
                <div>
                    < ShowPageNavBarContainer />
                    < MainVideoContainer />
                </div>
                {genre_conts}
            </div>
           
        )
    }
}

export default Profile;