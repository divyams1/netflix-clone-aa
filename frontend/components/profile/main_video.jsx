import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';


class MainVideo extends React.Component {
    constructor(props) {
        super(props);
        this.playClick  = this.playClick.bind(this);
    }
    // componentDidMount() {
    //     this.props.fetchVideos();
    // }

    playClick() {
        const id = this.props.match.params.profileId
        this.props.history.push(`/profiles/${id}/videos/1`)
    }
    render() {
         
        const play = <FontAwesomeIcon icon={faPlay} />
        const info = <FontAwesomeIcon icon={faInfoCircle} />
        const display = (Object.values(this.props.videos).length > 1 ? (   
                <div className="myVideo">
                    <video className="myVideo" autoPlay muted loop >
                        <source src={Object.values(this.props.videos)[0].videoUrl} type="video/mp4"  />
                    </video>
                    <div className="content">
                        <h1 className="big-video-title">{Object.values(this.props.videos)[0].title}</h1>
                        <h2 className="big-video-desc">{Object.values(this.props.videos)[0].description}</h2>
                        <div className="main-video-buttons">
                            <button className="play-vid-button" onClick={this.playClick} > {play} Play </button>
                        </div>
                    </div>
                </div>)
                 : ( <div></div>) )
        return (
            <div>
                {display}
                <div></div>
            </div>
        )
    }
}

export default MainVideo;