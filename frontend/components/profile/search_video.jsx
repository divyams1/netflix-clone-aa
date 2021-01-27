import React from 'react';
import SmallVideoContainer from './small_video_container';

class SearchVideo extends React.Component {
    constructor(props) {
        super(props)
    }
    toggle() {
        this.props.searchOff();
    }
    render() {
        const videos_to_render = Object.values(this.props.videos).filter( video => {
             const length = this.props.search.length;
             return video.title.slice(0,length) === this.props.search; 

        })
       
        let video_carousels = videos_to_render.map( (video,idx) => {
           return <SmallVideoContainer video={video} key={idx} />
        })
         if (this.props.search === "") {
            this.toggle();
        }
        let searchable = videos_to_render.map( video => { return video.title })
        if ( this.props.search === "") {
            searchable = [];
        }
        
        return (
        <div className="search-show">
            <h3 className="title-search"> Explore titles related to: {searchable.join(' , ')} </h3>
         <div className="video-search-container">
             {video_carousels}
         </div>   
         </div>
        )
    }
}

export default SearchVideo;