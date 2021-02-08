import React from 'react';
import SmallVideoContainer from './small_video_container';

class SearchVideo extends React.Component {
    constructor(props) {
        super(props)
    }
    toggle() {
        this.props.searchOff();
    }
    render() {
       const videoProfiles = Object.values(this.props.videoProfiles) || [];
       const videoProfileIds = videoProfiles.map( videoProfile => { return videoProfile.id})
        const videos_to_render = Object.values(this.props.videos).filter( video => {
             const length = this.props.search.length;
             return video.title.toLowerCase().includes(this.props.search.toLowerCase());
        })
      
       const profileId = this.props.profileId;
        let video_carousels = videos_to_render.map( (video,idx) => {
            const videoProfile = videoProfiles.filter( videoProfile => {
                return videoProfile.profile_id === parseInt(profileId)
            })
           return <SmallVideoContainer videoProfile={videoProfile} video={video} key={idx} />
        })
         if (this.props.search === "") {
            this.toggle();
        }
        let searchable = videos_to_render.map( video => { return video.title })
        if ( this.props.search === "") {
            searchable = [];
        }
        
        return (
        <div className="search-show">
            <h3 className="title-search"> Explore titles related to: {searchable.join(' , ')} </h3>
         <div className="video-search-container">
             {video_carousels}
         </div>   
         </div>
        )
    }
}

export default SearchVideo;