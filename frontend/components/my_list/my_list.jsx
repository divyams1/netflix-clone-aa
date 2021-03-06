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
        const videoProfiles = this.state[1].videoProfiles;
        const videos = this.state[0].videos;
        const profileId = this.props.match.params.profileId; 
        const profiles = this.state[2].profiles;
        const profile = Object.values(profiles).filter( profile => { return profile.id === parseInt(profileId) })
        let containers = <div></div>
        const userProfiles = videoProfiles.filter( videoProfile => { return videoProfile.profile_id === parseInt(profileId) });
        if (profile.length > 0)  {
            const profileVideos = profile[0].videos;
            const videosWithGenres = profileVideos.map( video => { return video.id });
            const newVideos = videos.filter( video => { return videosWithGenres.includes(video.id) })
            containers = newVideos.map( (video, idx)  => {
                const videoProfile = userProfiles.filter( profile => { return profile.video_id === video.id } )
                return <SmallVideoContainer videoProfile={videoProfile} videoProfileIds={videosWithGenres} video={video} key={idx} />
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