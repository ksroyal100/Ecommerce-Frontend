import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../homeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const HomeSectionCarousel = ({sectionName,data}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 4.5 },

    };

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    const items = data?.slice(0, 10).map((item) => <HomeSectionCard product={item} />)
    

    return (
        <div className='relative px-4 sm:px-6 lg:px-8'>
            <h2 className='text-2xl font-extrabold text-grey-800 py-5 text-left'>{ sectionName}</h2>
            <div className='relative p-5 '>
                
        <AliceCarousel
                items={items}
                disableButtonsControls
                responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                    animationType="fadeout"
                    mouseTracking
                    
                />

                {activeIndex !== items?.length - 5 && ( <Button variant='contained' className='z-50 bg-[]' sx={{ position: "absolute", top: "8rem", right: "0rem", transform: "translateX(50%) rotate(90deg)", bgcolor: "white" }} aria-label='next' onClick={slideNext}>
                    <ArrowBackIosIcon sx={{ transform: "rotate(90deg)", color: "black" }} />

                </Button>
               ) }
                {activeIndex !==0 && (<Button variant='contained' className='z-50 bg-[]' sx={{ position: "absolute", top: "8rem", left: "0rem", transform: "translateX(-50%) rotate(90deg)", bgcolor: "white" }} aria-label='next' onClick={slidePrev}>
                    <ArrowBackIosIcon sx={{ transform: "rotate(-90deg)", color: "black" }} />

                </Button>
                )}
            </div>
            </div>
  )
}

export default HomeSectionCarousel