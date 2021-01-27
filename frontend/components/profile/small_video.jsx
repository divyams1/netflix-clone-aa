import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPlusCircle, faChevronDown, faCheck  } from '@fortawesome/free-solid-svg-icons';


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
                        </video>): (  <video onMouseLeave={ ()=> this.setState({ hovered: false }) } onMouseEnter={ () => this.setState({hovered:true}) } className="big-video-image" autoPlay muted  >
                            <source src={this.props.video.videoUrl} type="video/mp4" />
                        </video>)
        const play = <FontAwesomeIcon icon={faPlayCircle} size={'1x'} />
        const plus = <FontAwesomeIcon icon={faPlusCircle} size={'1x'} />
        const down = <FontAwesomeIcon icon={faChevronDown} />
        const check = <FontAwesomeIcon icon={faCheck} size={'1x'} />
       
        const box = ( 
        <div className="big-box">
            <img className="video-image" src={this.props.video.photoUrl} />
            <div className="video-cont" key={this.props.video.videoUrl}>
                {video}
                    <div className="button-list">
                       <div className="buttons-container-top">
                            <div className="left-buttons">
                                 <button onClick={this.playClick} className="video-button" > {play}  </button>  
                           </div>
                           <div className="right-buttons">
                               <div className="my-list-hover"> 
                                    <p> Add To My List </p>
                                </div>
                                <button className="video-button play-video-button" onClick={this.addMyList}> {plus} </button>
                                
                           </div>
                       </div>
                       <div className="title-container">
                           <p className="genres-text"> {this.props.video.genres.map( genre => { return genre.name }).join(' • ')} </p>
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

//  <div className="buttons-top-box" />
//                             <div className="left-buttons">
//                                 <button onClick={this.playClick} className="video-button" > {play}  </button>  
//                             </div>
//                             <div className="right-buttons">
//                                 <button className="video-button play-video-button" onClick={this.addMyList}> {plus} </button>
//                             </div>
                        
//                         <p className="dropdown-text-title"> {this.props.video.title} </p>