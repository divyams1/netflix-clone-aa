import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPlusCircle, faChevronDown, faArrowLeft  , faChevronLeft} from '@fortawesome/free-solid-svg-icons';

class VideoShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = { show: true , video: { title: "" , description: '', videoUrl: ''} }
        this.toggleShow = this.toggleShow.bind(this);
    }
    componentDidMount() {
        
       this.props.fetchVideo( (this.props.match.params.videoId) );
       this.state.video = this.props.video;
       debugger
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
    
        // const back = <FontAwesomeIcon onClick={this.back} icon={faChevronLeft} className="backbutton" />
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
            <div key={video.videoUrl}>
                <video className="show-video"  controls onClick={this.toggleShow}>
                     <source src={video.videoUrl} />
                </video>
                    {/* {backImage} */}
                    {title}
                    {description}
                </div>
                
            ) : <div></div> )
            debugger
        return (
        <div className="show-video">
          {display}
        </div>
        )
    }
}

export default VideoShow;
