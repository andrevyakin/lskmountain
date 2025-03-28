import { useState } from 'react';
import { certificates as slides } from '../assets/certificates/index.js';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

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
      <div className=' w-1/2 relative group flex'>
        <img
          src={slides[currentIndex]}
          alt=''
          className='w-fit h-fit object-contain border-2 border-[#242424] duration-250'
        />
        {/* Left Arrow */}
        <IoMdArrowDropleft
          className='text-[#242424] group-hover:block absolute text-9xl -left-1/3 top-1/3 cursor-pointer'
          onClick={prevSlide}
        />
        {/* Right Arrow */}
        <IoMdArrowDropright
          className='text-[#242424] group-hover:block absolute text-9xl -right-1/3 top-1/3 cursor-pointer'
          onClick={nextSlide}
        />
      </div>

      <div className='flex mt-4 pr-2 border  border-[#242424]'>
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
