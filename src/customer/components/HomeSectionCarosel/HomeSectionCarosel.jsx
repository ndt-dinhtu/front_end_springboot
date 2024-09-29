import React, { useState, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';

const HomeSectionCarousel = ({ data, sectionName }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    const responsive = {
        0: { items: 1 },
        568: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev = () => carouselRef.current?.slidePrev();
    const slideNext = () => carouselRef.current?.slideNext();

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    const items = data.slice(0, 100).map((item, index) => <HomeSectionCard key={index} product={item} />);

    return (
        <div className='border carousel-wrapper'>
            <h2 className='text-2xl font-extrabold text-gray-800 py-5 ml-4'>{sectionName}</h2>
            <div className="relative mx-20">
                <AliceCarousel
                    ref={carouselRef}
                    items={items}
                    responsive={responsive}
                    disableButtonsControls
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex < items.length - 5 && (
                    <Button
                        variant="contained"
                        className="z-5 bg-white"
                        onClick={slideNext}
                        sx={{
                            position: 'absolute',
                            top: "8rem",
                            right: "0rem",
                            transform: "translateX(50%) rotate(90deg)",
                            bgcolor: "white",
                        }}
                        aria-label="next"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                    </Button>
                )}
                {activeIndex > 0 && (
                    <Button
                        variant="contained"
                        onClick={slidePrev}
                        className="z-5 bg-white"
                        sx={{
                            position: 'absolute',
                            top: "8rem",
                            left: "0rem",
                            transform: "translateX(50%) rotate(-90deg)",
                            bgcolor: "white",
                        }}
                        aria-label="prev"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default HomeSectionCarousel;
