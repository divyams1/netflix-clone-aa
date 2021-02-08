import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight  } from '@fortawesome/free-solid-svg-icons';
import CarouselRowContainer from './carousel_row_container';

class CarouselVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hovered: false}
    }

    componentDidMount() {
    }
    render() {
        const videoProfiles = this.props.videoProfiles.video_profiles || [];
        const videoProfileIds = videoProfiles.map( videoProfile => { return videoProfile.id})
        const right = <FontAwesomeIcon icon={faChevronRight} />
        const right_button = (this.state.hovered? (<button> {right} </button>) : null );
        const display =( Object.keys(this.props.videos).length > 0 ?  (<div className="carousel-whole">
            <h1> {this.props.genre.name} </h1>
            <br></br>
            <div className="carousel-row">
                <CarouselRowContainer videoProfiles={this.props.videoProfiles} videoProfileIds={videoProfileIds} GenreVideos={this.props.genre.videos } profiles={this.props.profiles} />
                {right_button}
            </div>
            </div>): <div></div>)
        return(
            <div className="carousel-whole-parent">
                {display}
            </div>
           
        )
    }
}

export default CarouselVideo;
