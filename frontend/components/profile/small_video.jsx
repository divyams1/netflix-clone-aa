import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPlusCircle, faChevronDown  } from '@fortawesome/free-solid-svg-icons';

class SmallVideo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hovered: false}
    }
    render() {
        
        const play = <FontAwesomeIcon icon={faPlayCircle} />
        const plus = <FontAwesomeIcon icon={faPlusCircle} />
        const down = <FontAwesomeIcon icon={faChevronDown} />
        const display = ( !this.state.hovered ? (<img onMouseEnter={ ()=> this.setState({ hovered: true }) }className="video-image" src={this.props.video.photoUrl} />) :
             (
            <div className="video-cont">
                <video onMouseLeave={ ()=> this.setState({ hovered: false }) } className="big-video-image" autoPlay loop  >
//                         <source src={this.props.video.videoUrl} type="video/mp4" />
//               </video>
                <div className="button-list">
                    <div className="left-buttons">
                        <button className="video-button"> {play}  </button>
                        <button className="video-button"> {plus} </button>
                    </div>
                    <div className="right-buttons">
                        <button className="video-button"> {down} </button>
                    </div>
                </div>
            </div>
             
             )
             )
        
        return (
            <div>
                {display}
            </div>
        )
    }
}

export default SmallVideo;

