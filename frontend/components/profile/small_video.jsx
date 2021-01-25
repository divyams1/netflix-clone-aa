import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPlusCircle, faChevronDown  } from '@fortawesome/free-solid-svg-icons';


class SmallVideo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hovered: false, profileId: this.props.match.params.profileId, videoId:  this.props.video.id }
        this.playClick = this.playClick.bind(this);
        this.addMyList = this.addMyList.bind(this);
    }

    playClick() {
        this.props.history.push(`/videos/${this.props.video.id}`)
    }

    addMyList() {
        const profileId = (this.state.profileId);
        const videoId = (this.state.videoId); 
        const videoProfile = {video_id: videoId, profile_id: profileId}  
        
        this.props.createVideoProfile(videoProfile);
    }
    render() {

        const video = this.state.hovered? (   <video onMouseLeave={ ()=> this.setState({ hovered: false }) } onMouseEnter={ () => this.setState({hovered:true}) } className="big-video-image" autoPlay muted  >
                            <source src={this.props.video.videoUrl} type="video/mp4" />
                        </video>): (  <video onMouseLeave={ ()=> this.setState({ hovered: false }) } onMouseEnter={ () => this.setState({hovered:true}) } className="big-video-image" ended="true" muted  >
                            <source src={this.props.video.videoUrl} type="video/mp4" />
                        </video>)
        const play = <FontAwesomeIcon icon={faPlayCircle} />
        const plus = <FontAwesomeIcon icon={faPlusCircle} />
        const down = <FontAwesomeIcon icon={faChevronDown} />
        const box = ( <div className="big-box">
                   <img className="video-image" src={this.props.video.photoUrl} />
                    <div className="video-cont" key={this.props.video.videoUrl}>
                        {video}
                        <div className="button-cont">
                            <div className="button-list">
                            <div className="left-buttons">
                                <button onClick={this.playClick} className="video-button" > {play}  </button>
                                
                            </div>
                            <div className="right-buttons">
                                <button className="video-button play-video-button" onClick={this.addMyList}> {plus} </button>
                            </div>
                            <div>
                                <p> {this.props.video.title} </p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>)
     
        
        return (
            <React.Fragment>
                {box}
            </React.Fragment>
        )
    }
}

export default SmallVideo;

