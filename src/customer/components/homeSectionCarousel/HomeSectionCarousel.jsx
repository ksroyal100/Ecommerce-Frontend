import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../homeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const HomeSectionCarousel = ({ sectionName, data }) => {
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4.5 },
  };

  const items = data?.slice(0, 10).map((item, index) => (
    <HomeSectionCard key={index} product={item} />
  ));

  const slidePrev = () => {
    carouselRef.current?.slidePrev();
  };

  const slideNext = () => {
    carouselRef.current?.slideNext();
  };

  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-extrabold text-grey-800 py-5 text-left">
        {sectionName}
      </h2>
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          mouseTracking
          animationType="fadeout"
        />

        {/* Next Button */}
        <Button
          variant="contained"
          sx={{
            position: 'absolute',
            top: '8rem',
            right: '0rem',
            transform: 'translateX(50%) rotate(90deg)',
            bgcolor: 'white',
            zIndex: 10,
            minWidth: 'auto',
            padding: 1,
          }}
          onClick={slideNext}
        >
          <ArrowBackIosIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
        </Button>

        {/* Prev Button */}
        <Button
          variant="contained"
          sx={{
            position: 'absolute',
            top: '8rem',
            left: '0rem',
            transform: 'translateX(-50%) rotate(90deg)',
            bgcolor: 'white',
            zIndex: 10,
            minWidth: 'auto',
            padding: 1,
          }}
          onClick={slidePrev}
        >
          <ArrowBackIosIcon sx={{ transform: 'rotate(-90deg)', color: 'black' }} />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
