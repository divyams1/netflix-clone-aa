import React from 'react';
import SmallVideo from './small_video';
import SmallVideoContainer from './small_video_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight} from '@fortawesome/free-solid-svg-icons'

class CarouselRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = { videos: Object.values(this.props.videos)}
        this.shiftVideos = this.shiftVideos.bind(this);
    }

    componentDidMount() {
        this.props.fetchVideos();
    }

    shiftVideos() {
        this.state.videos.push( this.state.videos.shift() )
        this.setState( { videos: this.state.videos})
    }
    render() {
        
        const right = <FontAwesomeIcon icon={faChevronRight} />

        const videos_to_render = this.state.videos.slice(0,4);
        const videos = videos_to_render.map( (video, idx) => {
            return <SmallVideoContainer key={idx} video={video} />
        })
        return (
            <div className="carousel-row">
                {videos}
                <button onClick={this.shiftVideos}> {right} </button>
            </div>
        )
    }
}

export default CarouselRow;