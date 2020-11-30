import React from 'react';
import SliderControl from './slider_control'
import SliderItem from './slider-item'


class Slider extends React.Component {
    constructor() {
        super(props);
        this.state = {
            HasMoved: false, 
            MoveDirection: null, 
            Moving: false ,
            movePercentage: 0,
            itemsInRow: 5,
            lowestIndex: 0
        }
    }

    renderSliderContent = () => {
        const {HasMoved, itemsInRow, lowestIndex} = this.state;
        const movies= this.props.movies; 
        const totalItems = movies.length;

        const left = []
        const mid = []
        const right = []

        for (let i=0; i< itemsInRow; i++) {
            if (HasMoved) {
                if (lowestIndex + i - itemsInRow < 0) {
                    left.push(totalItems - itemsInRow + lowestIndex + i);
                } else {
                    left.push(i+ lowestIndex -itemsInRow);
                }
            }

            if (i+ lowestIndex >= totalItems){
                mid.push(i + lowestIndex -  totalItems);
            }  else {
                mid.push(i +lowestIndex)
            }

            if ( i+ lowestIndex + itemsInRow >= totalItems) {
                right.push( i + lowestIndex + itemsInRow - totalItems);
            } else {
                right.push( i + lowestIndex + itemsInRow);
            }
        }

        const combined = [...left, ...mid, ...right];

        const SliderContent = [];
        for (let index of combined) {
            sliderContents.push(
                <SliderItem 
                    movie={movies[index]}
                    width={100/itemsInRow}
                    key={`${movies[index].id}`}
                />
            )
        }
        return SliderContent;
    }

    handlePrev = () => {
        const { lowestIndex, itemsInRow } = this.state;
        const movies = this.props.movies 
        const totalItems = movies.length;

        let newIndex;
        if (lowestIndex < itemsInRow && lowestIndex !== 0) {
            newIndex = 0;
        } else if ( lowestIndex - itemsInRow < 0) {
            newIndex = totalItems - itemsInRow
        } else {
            newIndex = lowestIndex - itemsInRow
        }

        this.setSate( { lowestIndex: newIndex})
    }

    handleNext = () => {
        const { HasMoved, lowestIndex, itemsInRow} = this.state;
        const {movies} = this.props 
        const totalItems = movies.length;

        let newIndex;
        if (lowestIndex === totalItems - itemsInRow) {
            newIndex = 0;
        } else if ( lowestIndex + itemsInRow > totalItems - itemsInRow) {
            newIndex = totalItems + itemsInRow
        } else {
            newIndex = lowestIndex + itemsInRow
        }

        this.setSate( {lowestIndex: newIndex})
        if (!HasMoved) {
            this.setSate({ HasMoved: true})
        }
    }

    render() {
        const { HasMoved, itemsInRow, MoveDirection, Moving, movePercentage } = this.state 
        const movies = this.props.movies

        if (!movies.length) {
            return null; 
        }
        return (
            <div className="slider">
                {HasMoved && (<SliderControl arrowDirection={"left" } onClick={this.handlePrev}  />)}
                <div className="slider-content" style={style}>
                    {this.renderSliderContent()}
                </div>
          
            <SliderControl arrowDirection={"right"} onClick={this.handleNext} />
              </div>
        )

    }
}