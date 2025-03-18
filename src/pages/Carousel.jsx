import { useState } from 'react';
import { certificates as slides } from '../assets/certificates';
import { arrowLeft, arrowRight } from '../assets/';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
        className='w-full h-full rounded-2xl bg-center bg-contain bg-no-repeat duration-500'
      />
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 p-2 cursor-pointer'>
        <img src={arrowLeft} alt='<-' onClick={prevSlide} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 p-2 cursor-pointer'>
        <img src={arrowRight} alt='->' onClick={nextSlide} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <img src={slide} alt='' className='h-[150px] w-[100px] mt-16 mx-5 cursor-pointer' />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Carousel;
