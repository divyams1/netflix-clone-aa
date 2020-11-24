import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faInfoCircle} from '@fortawesome/free-solid-svg-icons'

class MainVideo extends React.Component {
    componentDidMount() {
        this.props.fetchVideos();
    }
    render() {
        const play = <FontAwesomeIcon icon={faPlay} />
        const info = <FontAwesomeIcon icon={faInfoCircle} />
        const display = (Object.keys(this.props.videos).length > 0 ? (   
                <div className="myVideo">
                    <video className="myVideo"  autoPlay loop>
                        <source src={this.props.videos[0].videoUrl} type="video/mp4"/>
                    </video>
                    <div className="content">
                        <h1 className="big-video-title">{this.props.videos[0].title}</h1>
                        <h2 className="big-video-desc">{this.props.videos[0].description}</h2>
                        <button className="play-vid-button"> {play} Play </button>
                        <button className="info-vid-button"> {info} More Info </button>
                    </div>
                </div>)
                 : ( <div></div>) )
        return (
            <div>
                {display}
            </div>
        )
    }
}

export default MainVideo;