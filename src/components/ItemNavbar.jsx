import { Link } from 'react-scroll';
import { useState } from 'react';

const ItemNavbar = ({ id, item }) => {
  //const pathname = useLocation();
  //const [heightNavbar, setHeightNavbar] = useState(0);
  const [activeLink, setActiveLink] = useState(null);
  const [inactiveLink, setInactiveLink] = useState(null);
 /* console.log('activeLink = ', activeLink);
  console.log('inactiveLink = ', inactiveLink);
  console.log('id = ', id);*/
  /*const navbar = document.getElementsByTagName('nav');

  useEffect(() => {
    const handleScroll = () => {
      setHeightNavbar(navbar[0].clientHeight * -1);
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [navbar,href, path]);*/

  const handleSetActive = (activeId) => setActiveLink(activeId);
  const handleSetInactive = (inactiveId) => setInactiveLink(inactiveId);

  return (
    /*<a href={href} onClick={() => scrollTo()} className='flex flex-col items-center mt-7'>
      {item}
      <hr
        className={`w-3/4 border-none h-[1.5px] ${pathname.hash === href ?'bg-[#F0F0F0]' : ''}`}
      />
    </a>*/
    /*<Link
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
    </Link>*/

    <Link
      activeClass='active'
      to={id}
      spy={true}
      smooth={true}
      duration={500}
      hashSpy={true}
      onSetActive={() => handleSetActive(id)}
      onSetInactive={() => handleSetInactive(id)}
      /*onSetActive={() => {
        setActiveLink(id);
      }}*/
      className={
        'flex flex-col items-center mt-7 cursor-pointer' /* +
      (activeLink === id
        ? " underline underline-offset-8 "
        : "")*/
      }
    >
      {item}
      {activeLink === id ? (
        <hr className='w-3/4 border-none h-[1.5px] bg-[#F0F0F0]' />
      ) : (
        ''
      )}
      {inactiveLink === id ? (
        <hr className='hidden w-3/4 border-none h-[1.5px] bg-[#F0F0F0]' />
      ) : (
        ''
      )}
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
