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
        this.props.fetchVideos()
    }

    render() {
        const genre_conts = (Object.values(this.props.genres).length > 0 ? (Object.values(this.props.genres).map( (genre, idx) => {
            return <CarouselVideoContainer key={idx} genre={genre} />
        })) : <div></div> )
        const display = ( Object.values(this.props.profiles).length === 0 ? (<div> Hello </div>): (<div> Hello {this.props.profiles[this.props.match.params.profileId -1].name}</div>)) 
        return(
            <div className="profile-show ">
                <div>
                    < ShowPageNavBarContainer currentUser={this.props.currentUser} profiles={this.props.profiles} history={this.props.history} Logout={this.props.Logout} videos={this.props.videos} />
                     < MainVideoContainer />
                     {/* {genre_conts} */}
                     <div></div>
                </div>
               
            </div>
           
        )
    }
}

export default Profile;




//  {<Slider movies={this.props.entities.movies} />}
//   {/* <CarouselVideoContainer genre={Object.values(this.props.genres)[0]} />