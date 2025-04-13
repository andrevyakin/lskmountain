import { motion, useMotionValue, useTransform } from 'framer-motion';
import useWindowDimensions from '../../hook/useWindowDimensions.js';



const SwipeCards = ({ id, url, setCards, cards, setIsOpen, isOpen }) => {
  const x = useMotionValue(0);

  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const isFront = id === cards[cards.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 1 : id % 2 ? 6 : -6;

    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 50) {
      setCards((pv) => pv.filter((v) => v.id !== id));
    }
  };

  const { height } = useWindowDimensions();


  return (
    <>
      <motion.img
        src={url}
        alt=''
        className={
          'h-80 lg:h-130 w-auto origin-bottom object-cover hover:cursor-grab active:cursor-grabbing' +
          ' ' +
          `${isOpen ? 'opacity-30 blur-xs' : ''}`
        }
        style={{
          gridRow: 1,
          gridColumn: 1,
          x,
          opacity,
          rotate,
          transition: '0.125s transform',
          boxShadow: isFront
            ? '0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)'
            : undefined,
        }}
        animate={{
          scale: isFront ? 1 : 0.98,
        }}
        drag='x'
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        onDragEnd={handleDragEnd}
        onClick={() => setIsOpen(!isOpen)}
      />

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
          src={url}
          alt=''
          onClick={() => setIsOpen(!isOpen)}
          transition={{ duration: 1 }}
          className={`cursor-zoom-out pointer-events-auto  z-20 absolute left-1/2 -translate-x-1/2 -translate-y-1/2`}
          style={{
            height: `${height / 1.4}px`,
            top: `${height / 2}px`,
          }}
        />
      )}
    </>
  );
};

export default SwipeCards;
