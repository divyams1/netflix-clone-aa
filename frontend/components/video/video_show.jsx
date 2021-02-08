import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPlusCircle, faChevronDown, faArrowLeft  , faChevronLeft} from '@fortawesome/free-solid-svg-icons';


class VideoShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = { show: true , video: { title: "" , description: '', videoUrl: ''} }
        this.toggleShow = this.toggleShow.bind(this);
        
        this.back = this.back.bind(this);
    }
    componentDidMount() {
        
       this.props.fetchVideos();
       this.props.fetchProfiles();
    
    }

    toggleShow() {
        if ( this.state.show === true  ) {
            this.setState({show: false})
        } else {
            this.setState({show: true})
        }
    
    }

    back() {
        const id = this.props.match.params.profileId; 
        this.props.history.push(`/profiles/${id}`)
    }

    render() {
        let video = this.props.videos || { title: "" , description: '', videoUrl: ''}
        const vid_render = Object.values(this.props.videos).filter( video => {
            return video.id === parseInt(this.props.match.params.videoId )
        })
        vid_render.length > 0 ? ( video = vid_render[0]): video;
        const videoTitle = video.title 
        const videoDescrpition = video.description 
        const videoUrl = video.videoUrl
        const description = ( this.state.show? ( <div className="show-video-desc">
            <FontAwesomeIcon onClick={this.back} icon={faChevronLeft} className="backbutton" />
            <br className="height-div"></br>
            <h1> {videoTitle} </h1>
            <p> {videoDescrpition} </p>
        </div>) : (<div></div>))
        const videoDisplay = vid_render.length > 0? (  <video className="show-video" controls>
                     <source src={videoUrl} />
                </video>) : (<video className="show-video" controls> <source src=""></source></video>)
        const paused = videoDisplay.paused;
        debugger 
        const display = ( this.props.videos?   (
            <div key={videoTitle} onClick={this.toggleShow}>
                {videoDisplay}

                    {description}
                </div>
                
            ) : <div></div> )
        return (
        <div className="show-video" >
          {display}
        </div>
        )
    }
}

export default VideoShow;
