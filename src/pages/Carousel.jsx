import { useState } from 'react';
import { certificates as slides } from '../assets/certificates';
import { arrowRight } from '../assets/';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

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
    <div className='flex flex-col px-4 pt-4 items-center h-full w-full'>
      <div className=' w-1/2 rounded-2xl relative group flex bg-red-600'>
        <img
          src={slides[currentIndex]}
          alt=''
          className='w-fit h-fit rounded-2xl object-contain border-2 border-[#242424] duration-250'
        />
        {/* Left Arrow */}
        <MdArrowBackIos
          className='group-hover:block absolute text-8xl -left-1/3 top-1/3 cursor-pointer'
          onClick={prevSlide}
        />
        {/* Right Arrow */}
        <MdArrowForwardIos
          className='group-hover:block absolute text-8xl -right-1/3 top-1/3 -mr-5 cursor-pointer'
          onClick={nextSlide}
        />
      </div>

      <div className='flex mt-4 pr-2 border border-1 border-[#242424]'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='cursor-pointer'
          >
            <img
              src={slide}
              alt=''
              className='h-20 ml-2 cursor-pointer'
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Carousel;
