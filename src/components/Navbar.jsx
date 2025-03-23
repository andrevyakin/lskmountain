import { logoLight, mailLight, phoneLight } from '../assets/index.js';
import { Link, animateScroll as scroll } from 'react-scroll';
import navbar from '../constants/navbar.json';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [isBottom, setIsBottom] = useState(false);
  const [heightNav, setHeightNav] = useState(0);

  const refNav = useRef(null);

  useEffect(() => {
    setHeightNav(refNav.current.clientHeight * -1);
  }, [heightNav, refNav]);

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollingElement = e.target.scrollingElement;

      const isBottom =
        scrollingElement.scrollHeight - scrollingElement.scrollTop ===
        scrollingElement.clientHeight;
      setIsBottom(isBottom);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const nav = navbar.querySelectorAll('a');
    if (isBottom)
      nav.forEach((link) => {
        if (link.innerHTML === 'Контакты') {
          link.classList.add('active', 'text-gray-500', 'animation-active');
          link.classList.remove('text-[#f0f0f0]', 'hover:text-gray-500');
        } else {
          link.classList.remove('active', 'text-gray-500', 'animation-active');
          link.classList.add('text-[#f0f0f0]', 'hover:text-gray-500');
        }
      });
    if (!isBottom)
      nav.forEach((link) => {
        if (link.innerHTML === 'Контакты') {
          link.classList.remove('active', 'text-gray-500', 'animation-active');
          link.classList.add('text-[#f0f0f0]', 'hover:text-gray-500');
        }
      });
  }, [isBottom]);

  return (
    <>
      <div className='relative'>
        <div
          className={`fixed top-0 left-0 right-0 mx-16 z-10 bg-[url(/bg_mountain.png)] bg-[#242424] text-[#F0F0F0] brightness-150`}
        >
          <nav
            ref={refNav}
            id='navbar'
            className='flex justify-evenly items-center px-0 lg:px-28 py-3 font-prata text-xs xl:text-base 2xl:text-2xl 3xl:text-3xl uppercase tracking-wider border-x border-b '
          >
            <div className='h-min-[50px] w-min-[135px] 2xl:h-[100px] 2xl:w-[270px] cursor-pointer'>
              <img
                src={logoLight}
                alt='ЛСК'
                className=''
                onClick={scroll.scrollToTop}
              />
            </div>
            {navbar.map((i) => (
              <Link
                key={i.href}
                activeClass='active'
                to={i._id}
                spy={true}
                smooth={true}
                offset={heightNav}
                duration={500}
                hashSpy={true}
                onSetActive={() => {
                  setActiveLink(i._id);
                }}
                className={
                  'flex items-center mt-7 cursor-pointer animation-hover relative' +
                  (activeLink === i._id
                    ? ' text-gray-500 animation-active '
                    : ' text-[#f0f0f0] hover:text-gray-500')
                }
              >
                {i.item}
              </Link>
            ))}
            <div className='flex flex-col gap-1.5'>
              <div className='flex items-center text-xs xl:text-base 2xl:text-2xl lowercase'>
                <img src={phoneLight} alt='' className='' />
                <p>+7 (959) 222 22-22</p>
              </div>
              <div className='flex items-center text-xs xl:text-base 2xl:text-2xl lowercase'>
                <img src={mailLight} alt='' className='' />
                <p className='indent-2.5'>ooolsklpr@mail.ru</p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Navbar;
