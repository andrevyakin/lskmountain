import { useState } from 'react';
import { motion } from 'framer-motion';
import { certificates as slides } from '../../assets/certificates/index.js';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';

const Carousel = ({ isOpen, setOpen }) => {
  const transition = {
    type: 'spring',
    damping: 25,
    stiffness: 120,
    duration: 3,
  };

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
      <motion.div
        className={`${!isOpen ? 'w-1/2 relative group flex cursor-zoom-in' : 'fixed  z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-zoom-out '}`}
        /*animate={{ opacity: isOpen ? 1 : 0 }}*/

        transition={transition}

      >
        <motion.div

          className={`${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
          onClick={() => setOpen(false)}
        />
        <motion.img
          src={slides[currentIndex]}
          alt=''
          className={`${!isOpen ? 'w-fit h-fit object-contain border-2 border-[#242424] duration-250' : 'w-11/12 '}`}
          onClick={() => setOpen(!isOpen)}
          initial={{
            y: 50,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              type: 'spring',
              duration: 1,
            },
          }}
          viewport={{ once: true, amount: 0.8 }}
          layoutTransition={transition}
        />
        {!isOpen && (
          <>
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
          </>
        )}
      </motion.div>

      <div className='flex mt-4 pr-2 border  border-[#242424]'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='cursor-pointer'
          >
            <img src={slide} alt='' className='h-20 ml-2 cursor-pointer' />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Carousel;
