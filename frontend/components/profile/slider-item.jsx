import React from 'react';

const SliderItem = ({movie, width} ) => {
    return (
        <div className="slider-item" style={ {width: `${wifth}`}} >
            <img src={movie.photoUrl}/>
        </div>
    )
}

export default SliderItem;