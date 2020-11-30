
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'


const SliderControl = ({arrowDirection, onCLick}) => {
    return(
        <div className={`slider-control ${arrowDirection}` }>
            <div className="slider-control-arrow" onClick={onClick} >
                <FontAwesomeIcon icon={ arrowDirection === "right" ? faChevronRight : faChevronLeft } />
            </div>
        </div>
    )
}

export default SliderControl;