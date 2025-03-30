import { useState } from 'react';
import { motion } from 'framer-motion';

import { certificates as slides } from '../../assets/certificates/index.js';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';

const Carousel = ({ isOpen, setIsOpen }) => {
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

  const indicatorAlpha = 0.5;

  return (
    <div className='flex flex-col px-4 pt-4 items-center h-full w-full'>
      <div className={`${isOpen ? '' : 'w-1/2 relative flex'}`}>
        <motion.img
          layout
          initial={{
            y: -20,
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              ease: 'easeOut',
              duration: 2,
            },
          }}
          src={slides[currentIndex]}
          alt=''
          onClick={() => setIsOpen(!isOpen)}
          transition={{ duration: 1 }}
          className={`${isOpen ? 'absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[65%] z-20 cursor-zoom-out h-[calc(100%-300px)]' : 'w-fit h-fit object-contain border-2 border-[#242424] cursor-zoom-in'}`}
        />

        {/* Left Arrow */}
        <IoMdArrowDropleft
          className='text-[#242424] absolute text-9xl -left-1/3 top-1/3 cursor-pointer'
          onClick={prevSlide}
        />
        {/* Right Arrow */}
        <IoMdArrowDropright
          className='text-[#242424] absolute text-9xl -right-1/3 top-1/3 cursor-pointer'
          onClick={nextSlide}
        />

        <motion.div
          layout
          transition={{
            duration: 1,
          }}
          className={
            'absolute bottom-0 flex pr-2 border  border-[#242424]' +
            ' ' +
            `${isOpen ? 'scale-[150%] left-[50%] -translate-x-[50%] -translate-y-[180%]' : 'translate-y-[120%]'}`
          }
        >
          {slides.map((slide, slideIndex) => (
            <motion.div
              layout
              key={slideIndex}
              transition={{
                duration: 1,
              }}
              onTap={() => goToSlide(slideIndex)}
              className='cursor-pointer'
              style={{
                opacity: indicatorAlpha,
              }}
              whileTap={{ scale: 1.5 }}
              animate={{
                opacity: currentIndex === slideIndex ? 1 : indicatorAlpha,
              }}
            >
              <img src={slide} alt='' className='h-20 ml-2 cursor-pointer'/>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default Carousel;
