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
          'relative h-full w-[700px] max-h-[850px] min-w-[500px]  flex justify-center items-center justify-self-center overflow-hidden' +
          ' ' +
          `${isOpen ? 'opacity-30 blur-xs' : ''}`
        }
      >
        <AnimatePresence>
          <div className='absolute h-[calc(100%-150px)]  cursor-zoom-in'>
            <div className='relative h-[calc(100%-50px)] top-0 border-2 border-[#242424]'>
              <motion.img
                className='h-full h-min-[500px] w-auto'
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
                  x: { type: 'spring', stiffness: 100, damping: 10 },
                  opacity: { duration: 0.5 },
                }}
                onClick={() => setIsOpen(!isOpen)}
              />

              <MdArrowForwardIos
                className='absolute cursor-pointer  left-full top-1/2 translate-x-[17%] -translate-y-1/2 text-[#242424] text-5xl'
                onClick={() => paginate(1)}
              />
              <MdArrowBackIos
                className='absolute cursor-pointer  right-full top-1/2 -translate-x-[0%] -translate-y-1/2 text-[#242424] text-5xl'
                onClick={() => paginate(-1)}
              />
            </div>
          </div>
        </AnimatePresence>
        <div
          className={
            'absolute bottom-0 flex w-fit justify-self-center justify-center gap-3 mt-4 p-1 border  border-[#242424]] bg-[rgba(255,255,255,0.7)]' +
            ' ' +
            `${isOpen ? 'opacity-30 blur-xs bg-transparent' : ''}`
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
              className={'h-25  opacity-50 cursor-pointer contrast-150 brightness-70' +
                ' ' +
                `${isOpen ? 'opacity-30 blur-xs contrast-100 brightness-100' : ''}`
              }
              onClick={() => setPage([idx, idx > page ? 1 : -1])}
            />
          ))}
        </div>
      </div>
      {isOpen && (
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
          className={`cursor-zoom-out pointer-events-auto  z-20 absolute left-1/2 -translate-x-1/2 -translate-y-1/2`}
          style={{
            height: `${height / 1.2}px`,
            top: `${height / 2}px`,
          }}
        />
      )}
    </>
  );
};
export default Carousel;
