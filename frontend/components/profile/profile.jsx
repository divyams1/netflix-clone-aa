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
        
        const genre_conts = (Object.values(this.props.genres).length > 0 ? (Object.values(this.props.genres).map( (genre, idx) => {
            return <CarouselVideoContainer key={idx} genre={genre} profiles={this.props.profiles} />
        })) : <div></div> )
        const display = ( Object.values(this.props.profiles).length === 0 ? (<div> Hello </div>): (<div> Hello {this.props.profiles[this.props.match.params.profileId -1].name}</div>)) 
        const renderVideo = this.state.search?   <SearchVideoContainer searchOff={this.searchOff} videos={this.props.videos} search={this.state.currentSearch} />: (<React.Fragment> <MainVideoContainer /> {genre_conts[0]} </React.Fragment>) ;
        return(
            <div className="profile-show ">
                <div>
                    < ShowPageNavBarContainer profileId={this.props.match.params.profileId} currentUser={this.props.currentUser} profiles={this.props.profiles} history={this.props.history} Logout={this.props.Logout} videos={this.props.videos} updateSearch={this.updateSearch} />
                     {/* < MainVideoContainer /> */}
                     {/* {genre_conts} */}
                     {/* <SearchVideoContainer /> */}
                     {renderVideo}
                     <div></div>
                </div>
               
            </div>
           
        )
    }
}

export default Profile;




