import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiTriangle } from 'react-icons/fi';

const FlyoutLink = ({
  children,
  FlyoutContent,
  id,
  activeLink,
  offset,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      /*onClick={() => setOpen(!open)}*/
      className='relative w-fit h-fit'
    >
      <Link
        {...props}
        className={
          ' flex items-center mt-7 cursor-pointer animation-hover relative' +
          (activeLink === id
            ? '  animation-active '
            : '  hover:text-text-[#242424]')
        }
      >
        {children}
      </Link>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: '-50%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='absolute left-1/2 top-20'
          >
            <div className='absolute -top-8 left-0 right-0 h-12 bg-transparent' />
            <FiTriangle className='absolute left-1/2 -top-1 h-4 w-4 -translate-x-1/2 -translate-y-1/2 fill-[#f0f0f0]' />
            <FlyoutContent offset={offset} activeLink={activeLink} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default FlyoutLink;
