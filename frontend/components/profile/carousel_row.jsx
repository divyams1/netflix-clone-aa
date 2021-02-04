import React from 'react';
import SmallVideo from './small_video';
import SmallVideoContainer from './small_video_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { HashLink as Link } from 'react-router-hash-link';
 
class CarouselRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = { videos: Object.values(this.props.videos), count: 0 }
        this.shiftVideos = this.shiftVideos.bind(this);
        this.resetCount= this.resetCount.bind(this);
    }
    shiftVideos() {
        // this.state.videos.push( this.state.videos.shift() )
        // debugger
        // this.setState( { videos: this.state.videos})
        let currentCount = this.state.count;
        this.setState( { count: (currentCount+1)})
    }
    componentDidMount() {
        this.props.fetchProfiles()
    }
    resetCount() {
        this.setState( {count: 0} )
    }
  
    render() {
        const allVideos = Object.values(this.props.videos);
        const genreVideoIds = Object.values(this.props.GenreVideos).map( video => {return video.id });
        let videosRender = allVideos.filter( video => { return genreVideoIds.includes(video.id )});
        videosRender = videosRender.concat(videosRender);
        this.state.videos = videosRender;
        const profileId = this.props.match.params.profileId; 
        const profile = Object.values(this.props.profiles).filter( profile => { return profile.id === parseInt(profileId) } )
        const profileVideos = profile.videos
        const right = <FontAwesomeIcon icon={faChevronRight} size={'3x'} />
        const left = <FontAwesomeIcon icon={faChevronLeft} />
        let length = Object.values(this.state.videos).length;
        let videos_to_render = this.state.videos.slice((this.state.count),(this.state.count + 6)); 
        const videoProfile = Object.values(this.props.videoProfiles).filter( videoProfile => {
            return videoProfile.profile_id === parseInt(profileId)
        })
        const videos = videos_to_render.map( (video, idx) => {
          
            return <SmallVideoContainer videoProfile={videoProfile} videoProfileIds={this.props.videoProfileIds} key={video.title+"profile"} video={video} listVideos={profileVideos} />
        })
        return (
            <React.Fragment>
                {videos}
                <button className="right-button-click" onClick={this.shiftVideos}> {right} </button>
            </React.Fragment>
        ) 
    }
}

export default CarouselRow;


    //  const video_divs = this.state.big_vids.map( (video, idx)=> {
            
    //         return (<div className="item" key={idx}>
    //             <img className="video-carousel" src={video.photoUrl} />
    //         </div>)
    //     })

  