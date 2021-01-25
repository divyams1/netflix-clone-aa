import React from 'react';
import NavBar from '../profile/show_page_nav_bar_container';
import SmallVideoContainer from '../profile/small_video_container';

class myList extends React.Component {
    constructor(props) {
        super(props)
        this.updateSearch = this.updateSearch.bind(this);
        this.state = { 0: { videos: [] }, 1: { videoProfiles: [] } , 2: {profiles: [] }, search: false, currentSearch: ''}
    }

    componentDidMount() {
        const promises = Promise.all( [this.props.fetchVideos(), this.props.fetchVideoProfiles(), this.props.fetchProfiles() ])
        promises 
            .then( (results) => { this.setState( results )})
 
        
    }
      updateSearch() {
        return e => {
            this.setState( { 'currentSearch' : e.currentTarget.value })
            if (this.state.currentSearch.length !== 0) {
                this.setState( { 'search' : true })
            } 
            if (this.state.currentSearch.length === 0) {
                this.setState( {'search': false})
            }
        }
    }

    render() { 
        const videos = this.state[0].videos;
        const profiles = this.state[1].videoProfiles;
        const profileId = this.props.match.params.profileId; 
        let containers = <div></div>
        debugger 
        if (videos.length > 0 && profiles.length > 0) {
            let profileVideos = profiles.filter( profile => profile.profile_id === parseInt(profileId) ); 
            let videoIds = profileVideos.map( profile => {return profile.video_id} )
            let videosToRender = videoIds.map( id => {
               return videos.find( video => { return video.id === id })
            })
            containers = videosToRender.map( (video, idx)  => {
                return <SmallVideoContainer video={video} key={idx} />
            })
        }
        return( 
            <div className="my-list-cont"> 
            <NavBar currentUser={this.props.currentUser} profiles={this.state[2].profiles} history={this.props.history} Logout={this.props.Logout} updateSearch={this.updateSearch} />
                <div className="my-list-shows">
                <h1> My List </h1>
           
                <div className="my-list-cont-shows"> 
                    {containers}
                </div>
                </div>
            </div>
        )
    }
}

export default myList;