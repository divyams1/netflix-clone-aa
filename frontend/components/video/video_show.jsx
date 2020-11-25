import React from 'react';

class VideoShow extends React.Component {
    componentDidMount() {
        
        this.props.fetchVideo( this.props.match.params.videoId )
    }

    render() {
        
        const video = this.props.video
        const display = ( this.props.video?   (
                <video className="show-video" controls>
                    <source src={video.videoUrl} />
                </video>
            ) : <div></div> )
        return (
        <div className="show-video-container">
          {display}
        </div>
        )
    }
}

export default VideoShow;