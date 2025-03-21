import { Link, scroller } from 'react-scroll';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ItemNavbar = ({  href, id, item, path }) => {
  //const pathname = useLocation();
  const [heightNavbar, setHeightNavbar] = useState(0);
console.log('href, id, path ', href, id, path)

  const navbar = document.getElementsByTagName('nav');

  useEffect(() => {
    const handleScroll = () => {
      setHeightNavbar(navbar[0].clientHeight * -1);
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [navbar,href, path]);

  const scrollTo = () => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  return  (

    /*<a href={href} onClick={() => scrollTo()} className='flex flex-col items-center mt-7'>
      {item}
      <hr
        className={`w-3/4 border-none h-[1.5px] ${pathname.hash === href ?'bg-[#F0F0F0]' : ''}`}
      />
    </a>*/
    <Link
      className='flex flex-col items-center mt-7 cursor-pointer'
      activeClass='underline underline-offset-8'
      to={id}
      spy={false}
      hashSpy={true}
      smooth={true}
      offset={heightNavbar}
      duration={500}

    >
      {item}
      <hr
        className={`w-3/4 border-none h-[1.5px] ${path === href ?'bg-[#F0F0F0]' : ''}`}
      />
    </Link>
  );
};
export default ItemNavbar;

/*
  activeClass — класс, применяемый при достижении элемента.
  to — цель прокрутки.
  spy — выделение Link при достижении целевой позиции scroll.
  smooth — анимация прокрутки.
  offset — прокрутка дополнительных пикселей (например, оформления).
  duration — время анимации прокрутки. Это может быть число или функция.*/
