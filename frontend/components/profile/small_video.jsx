import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPlusCircle, faChevronDown, faCheck  } from '@fortawesome/free-solid-svg-icons';


class SmallVideo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hovered: false, profileId: this.props.match.params.profileId, videoId:  this.props.video.id, videoProfileIds: [], videoProfile: {}, isChanged: false  }
        this.playClick = this.playClick.bind(this);
        this.addMyList = this.addMyList.bind(this);
        this.removeMyList = this.removeMyList.bind(this);
    }

    playClick() {
        this.props.history.push(`${this.state.profileId}/videos/${this.props.video.id}`)
    }


    addMyList() {
      
        const profileId = (this.state.profileId);
        const videoId = (this.state.videoId); 
        const videoProfile = {video_id: videoId, profile_id: profileId}  
        const newVideoProfileIds = this.state.videoProfileIds;
        newVideoProfileIds.push(videoId);
        this.setState( { videoProfileIds: newVideoProfileIds, isChanged: false })
        this.props.createVideoProfile(videoProfile);
    }


    removeMyList() {
        const profileId = (this.state.profileId);
        const videoId = (this.state.videoId); 
        let newVideoProfileId = this.state.videoProfile.id;
        this.setState( { videoProfile: {}, isChanged: true })
        this.props.deleteVideoProfileAct(newVideoProfileId)
     
    }
    render() {
        let videoProfile = this.props.videoProfile.filter( videoProfile => { return  videoProfile.video_id === this.props.video.id})
        this.state.videoProfile = videoProfile[0] || {};
        if ( this.state.isChanged) {
            this.state.videoProfile = {};
        }
        const video = (   <video onMouseLeave={ ()=> this.setState({ hovered: false }) } onMouseEnter={ () => this.setState({hovered:true}) } className="big-video-image" autoPlay muted  >
                            <source src={this.props.video.videoUrl} type="video/mp4" />
                        </video>)
        const play = <FontAwesomeIcon icon={faPlayCircle} size={'1x'} />
        const plus = <FontAwesomeIcon icon={faPlusCircle} size={'1x'} />
        const check = <FontAwesomeIcon icon={faCheck} size={'1x'} />
        const isMyList = Object.values(this.state.videoProfile).length > 0
  
        const buttonToDisplay = isMyList? check: plus; 
        const textToDisplay = !isMyList? "Add to My List": "Remove From My List";
        const functiontoDisplay = !isMyList? this.addMyList : this.removeMyList
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
                                    <p> {textToDisplay} </p>
                                </div>
                                <button className="video-button play-video-button" onClick={functiontoDisplay}> {buttonToDisplay} </button>
                                
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