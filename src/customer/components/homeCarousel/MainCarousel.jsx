import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';

const MainCarousel = () => {

    const items = mainCarouselData.map((item, index) => 
        <img className="cursor-pointer -z-10" role="presentation" key={index} src={item.image} alt=''/>
    )
        
    return (
            
        < AliceCarousel
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={3000}
                infinite
        />
        )
}

export default MainCarousel;