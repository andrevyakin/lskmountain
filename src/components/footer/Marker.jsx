import { motion } from 'framer-motion';

const Marker = ({ isOpen, onClick }) => {
  const transition = {
    duration: 0.5,
  };
  return isOpen ? (
    <motion.div
      layout
      transition={transition}
      className='cursor-pointer relative -top-22 -left-19 h-18 w-38  rounded-2xl  bg-[#e63d2e] opacity-85 blur-[.5px] '
      onClick={onClick}
    >
      <div className='absolute left-[50%] top-[100%] -translate-x-[50%] -translate-y-[15%] w-0 h-0; border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-[#e63d2e]'></div>
      <motion.div
        layout
        transition={transition}
        className='absolute text-center left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] font-second  text-[#232323] text-base font-semibold normal-case tracking-widest'
      >
        Филиал "Петровский" ООО "ЛСК"
      </motion.div>
    </motion.div>
  ) : (
    <motion.div
      layout
      transition={transition}
      className='cursor-pointer relative h-12 w-12 rotate-313  bg-[#e63d2e] opacity-90  -top-14 -left-7 rounded-r-[50%]  rounded-tl-[50%] blur-[.5px]  '
      onClick={onClick}
    >
      <motion.div
        layout
        transition={transition}
        className='absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] font-prima  text-[#232323] text-base font-black uppercase tracking-widest rotate-47'
      >
        лск
      </motion.div>
    </motion.div>
  );
};
export default Marker;
