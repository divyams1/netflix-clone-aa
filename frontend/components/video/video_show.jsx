import React from 'react';

class VideoShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = { show: true}
        this.toggleShow = this.toggleShow.bind(this);
    }
    componentDidMount() {
        this.props.fetchVideo( this.props.match.params.videoId );
    }

    toggleShow() {
        if ( this.state.show ) {
            this.setState({show: false})
        } else {
            this.setState({show: true})
        }
    }

    render() {
        

        const video = this.props.video
         const title =  (this.state.show ? (    <div className="show-video-title">
                        <h1> {video.title} </h1>
                    </div>): <div></div>);
        debugger 
        const display = ( this.props.video?   (
            <div>
                <video className="show-video" controls onClick={this.toggleShow}>
                     <source src={video.videoUrl} />
                </video>
                    {title}
                </div>
                
            ) : <div></div> )
        return (
        <div className="show-video">
          {display}
        </div>
        )
    }
}

export default VideoShow;
