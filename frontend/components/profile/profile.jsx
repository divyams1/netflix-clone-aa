import React from 'react';
import {Link} from 'react-router-dom';
import ShowPageNavBarContainer from './show_page_nav_bar';
import MainVideoContainer from './main_video_container';
import CarouselVideoContainer from './carousel_video_container';
import SearchVideoContainer from './search_video_container';

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = { search: false, currentSearch: ''} 
        this.updateSearch = this.updateSearch.bind(this);
        this.searchOff = this.searchOff.bind(this);
    }
    componentDidMount() {
        this.props.fetchProfiles()
        this.props.fetchGenres()
        this.props.fetchVideos()
        this.props.fetchVideoProfiles();
    }
    updateSearch() {
        return e => {
            
            this.setState( { 'currentSearch' : e.currentTarget.value, search: true })
          
        }
    }

    searchOff() {
        this.setState( {'search': false, currentSearch: ''} )
    }

    render() {
        const profileId = this.props.profileId; 
        const profile_to_render = Object.values(this.props.profiles).filter( profile => {
            return ( profile.id === parseInt(profileId))
        })
        const genre_conts = (Object.values(this.props.genres).length > 0 ? (Object.values(this.props.genres).map( (genre, idx) => {
            return <CarouselVideoContainer videoProfiles={this.props.videoProfiles} key={idx+genre} genre={genre} profiles={this.props.profiles} />
        })) : <div></div> )
        const display = ( Object.values(this.props.profiles).length === 0 ? (<div> Hello </div>): (<div> Hello {this.props.profiles[this.props.match.params.profileId -1].name}</div>)) 
        const renderVideo = this.state.search?   <SearchVideoContainer profileId={profileId} videoProfiles={this.props.videoProfiles} searchOff={this.searchOff} videos={this.props.videos} search={this.state.currentSearch} />: (<React.Fragment> <MainVideoContainer videos={this.props.videos} /> {genre_conts} </React.Fragment>) ;
        return(
            <div className="profile-show ">
                <div>
                    < ShowPageNavBarContainer profileId={this.props.match.params.profileId} currentUser={this.props.currentUser} profiles={this.props.profiles} history={this.props.history} Logout={this.props.Logout} videos={this.props.videos} updateSearch={this.updateSearch} />
                     {renderVideo}
                     <div></div>
                </div>
               
            </div>
           
        )
    }
}

export default Profile;




