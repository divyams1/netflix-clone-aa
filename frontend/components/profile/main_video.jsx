import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';


class MainVideo extends React.Component {
    constructor(props) {
        super(props);
        this.playClick  = this.playClick.bind(this);
    }
    componentDidMount() {
        this.props.fetchVideos();
    }

    playClick() {
        this.props.history.push('/videos/1')
    }
    render() {
         
        const play = <FontAwesomeIcon icon={faPlay} />
        const info = <FontAwesomeIcon icon={faInfoCircle} />
        const display = (Object.values(this.props.videos).length > 1 ? (   
                <div className="myVideo">
                    <video className="myVideo"  >
                        <source src={Object.values(this.props.videos)[0].videoUrl} type="video/mp4" autoPlay muted />
                    </video>
                    <div className="content">
                        <h1 className="big-video-title">{Object.values(this.props.videos)[0].title}</h1>
                        <h2 className="big-video-desc">{Object.values(this.props.videos)[0].description}</h2>
                        <div className="main-video-buttons">
                            <button className="play-vid-button" onClick={this.playClick} > {play} Play </button>
                            <button className="info-vid-button"> {info} More Info </button>
                        </div>
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