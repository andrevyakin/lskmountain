import { useState } from 'react';
import { AnimatePresence, motion, wrap } from 'framer-motion';
import { certificates as images } from '../../assets/certificates/index.js';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import useWindowDimensions from '../../hook/useWindowDimensions.js';

const Carousel = ({ isOpen, setIsOpen }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);
  const paginate = (newD) => setPage([page + newD, newD]);
  const { height } = useWindowDimensions();

  return (
    <>
      <div
        className={
          'relative h-full flex justify-center items-center overflow-hidden' +
          ' ' +
          `{${isOpen ? ' -z-10' : ''}`
        }
      >
        <AnimatePresence>
          <motion.img
            className='absolute h-full w-auto border-2 border-[#242424] cursor-zoom-in'

            key={page}
            src={images[imageIndex]}
            alt=''
            custom={direction}
            variants={{
              enter: (dir) => ({ x: dir > 0 ? 500 : -500, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (dir) => ({ x: dir < 0 ? 500 : -500, opacity: 0 }),
            }}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            onClick={() => setIsOpen(!isOpen)}
          />
        </AnimatePresence>
        <MdArrowForwardIos
          className='absolute cursor-pointer  right-1/4 text-[#242424] text-5xl'
          onClick={() => paginate(1)}
        />
        <MdArrowBackIos
          className='absolute cursor-pointer  left-1/4 text-[#242424] text-5xl'
          onClick={() => paginate(-1)}
        />
      </div>

      <div
        className={
          'flex w-fit justify-self-center justify-center gap-3 mt-4 p-1 border  border-[#242424]' +
          ' ' +
          `{${isOpen ? 'opacity-70 -z-10' : ''}`
        }
      >
        {images.map((_, idx) => (
          <motion.img
            key={idx}
            transition={{
              duration: 1,
            }}
            whileTap={{ scale: 1.5 }}
            animate={{
              opacity: imageIndex === idx ? 1 : 0.5,
            }}
            src={images[idx]}
            alt=''
            className={
              'h-15  opacity-50 cursor-pointer' +
              ' ' +
              `{${isOpen ? 'opacity-70 -z-10' : ''}`
            }
            onClick={() => setPage([idx, idx > page ? 1 : -1])}
          />
        ))}
      </div>
      {isOpen && (
        <div className='relative z-20'>
          <motion.img
            layout
            initial={{
              y: -40,
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                ease: 'easeOut',
                duration: 1,
              },
            }}
            viewport={{ once: true, amount: 0.5 }}
            src={images[imageIndex]}
            alt=''
            onClick={() => setIsOpen(!isOpen)}
            transition={{ duration: 1 }}
            className={`absolute left-[120%]  -translate-x-1/2 -translate-y-1/2 cursor-zoom-out`}
            style={{
              height: `${height - 250}px`,
            }}
          />
        </div>
      )}
    </>
  );
};
export default Carousel;
