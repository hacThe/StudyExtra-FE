import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../Home.scss'

function Slider(props) {
    return (
        <div >
            <Carousel className='carousel-slider' showThumbs={false} style={{borderRadius: '20px'}} axis='horizontal'>
                <div style={{height: '270px'}}>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div style={{height: '270px'}}>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div style={{height: '270px'}}>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>

    );
}

export default Slider;