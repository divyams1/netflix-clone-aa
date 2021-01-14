import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPlusCircle, faChevronDown, faArrowLeft  , faChevronLeft} from '@fortawesome/free-solid-svg-icons';

class VideoShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = { show: true}
        this.toggleShow = this.toggleShow.bind(this);
    }
    componentDidMount() {
        
        this.props.fetchVideo( (this.props.match.params.videoId) );
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
        this.props.history.push('/')
    }

    render() {
        
        
        const video = this.props.video || { title: "" , description: '', videoUrl: ''}
        const backImage = <img src="https://www.kindpng.com/picc/m/597-5978257_transparent-arrow-png-transparent-background-png-icon-back.png" className="backbutton"></img>
        const back = <FontAwesomeIcon onClick={this.back} icon={faChevronLeft} className="backbutton" />
        const videoTitle = video.title 
        const videoDescrpition = video.description 
        const title =  (this.state.show ? (    <div className="show-video-title">
                        <h1> {videoTitle} </h1>
                    </div>): <div></div>);
        const description = ( this.state.show? ( <div className="show-video-desc">
            <h1> {video.title} </h1>
            <p> {videoDescrpition} </p>
        </div>) : (<div></div>))
        
        const display = ( this.props.video?   (
            <div>
                <video className="show-video" controls onClick={this.toggleShow}>
                     <source src={video.videoUrl} />
                </video>
                    {backImage}
                    {title}
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
