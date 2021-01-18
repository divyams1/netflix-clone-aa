import React from 'react';
import SmallVideo from './small_video';
import SmallVideoContainer from './small_video_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { HashLink as Link } from 'react-router-hash-link';
 
class CarouselRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = { videos: Object.values(this.props.videos)}
        this.shiftVideos = this.shiftVideos.bind(this);
    }
    shiftVideos() {
        this.state.videos.push( this.state.videos.shift() )
        this.setState( { videos: this.state.videos})
    }


    componentDidMount() {
        this.props.fetchVideos();
    }

  
    render() {
        const right = <FontAwesomeIcon icon={faChevronRight} size={'3x'} />
        const left = <FontAwesomeIcon icon={faChevronLeft} />
        const videos_to_render = this.state.videos.slice(0,5);
       
        const videos = videos_to_render.map( (video, idx) => {
          
            return <SmallVideoContainer key={idx} video={video} />
        })
        return (
            <React.Fragment>
                {videos}
                <button className="right-button-click" onClick={this.shiftVideos}> {right} </button>
            </React.Fragment>
        ) 
    }
}

export default CarouselRow;


    //  const video_divs = this.state.big_vids.map( (video, idx)=> {
            
    //         return (<div className="item" key={idx}>
    //             <img className="video-carousel" src={video.photoUrl} />
    //         </div>)
    //     })

  