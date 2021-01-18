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
       
    
    }

    toggleShow() {
        if ( this.state.show ) {
            this.setState({show: false})
        } else {
            this.setState({show: true})
        }
    }

    back() {
        const profileId = this.props.profiles[0].id
        this.props.fetchVideos();
        
        this.props.history.push(`/profiles/${profileId}`)
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
        // const title =  (this.state.show ? (    <div className="show-video-title">
        //                 <h1> {videoTitle} </h1>
        //             </div>): <div></div>);
        const description = ( this.state.show? ( <div className="show-video-desc">
            <FontAwesomeIcon onClick={this.back} icon={faChevronLeft} className="backbutton" />
            <br className="height-div"></br>
            <h1> {videoTitle} </h1>
            <p> {videoTitle} </p>
        </div>) : (<div></div>))
        
        const display = ( this.props.videos?   (
            <div key={videoTitle}>
                <video className="show-video"  controls onClick={this.toggleShow}>
                     <source src={videoUrl} />
                </video>
                    {/* {backImage} */}
                    {/* {title} */}
                    {description}
                </div>
                
            ) : <div></div> )
        return (
        <div className="show-video">
          {display}
        </div>
        )
    }
}

export default VideoShow;
