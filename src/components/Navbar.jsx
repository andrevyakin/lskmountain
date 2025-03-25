import { useEffect, useRef, useState } from 'react';
import { logoLight} from '../assets/index.js';
import { Link, animateScroll as scroll } from 'react-scroll';
import { LiaPhoneSolid } from "react-icons/lia";
import { VscMail } from "react-icons/vsc";
import navbar from '../constants/navbar.json';


const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  /*const [isBottom, setIsBottom] = useState(false);*/
  const [heightNav, setHeightNav] = useState(0);

  const refNav = useRef(null);

  useEffect(() => {
    setHeightNav(refNav.current.clientHeight * -1);
  }, [heightNav, refNav]);



  return (
    <>
      <div className='relative'>
        <div
          className={`fixed top-0 left-0 right-0 z-10 bg-[url(/bg_mountain.png)] bg-[#242424] text-[#F0F0F0] brightness-150`}
        >
          <nav
            ref={refNav}
            id='navbar'
            className='flex justify-evenly items-center px-0 lg:px-28 font-prata text-xs xl:text-base 2xl:text-2xl 3xl:text-2xl uppercase tracking-wider border-b '
          >
            <div className='h-min-[50px] w-min-[135px] 2xl:h-[100px] 2xl:w-[270px] cursor-pointer'>
              <img
                src={logoLight}
                alt='ЛСК'
                className='h-[84px] w-[227px] mt-2 object-contain'
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
              <div className='flex items-center text-xs xl:text-base 2xl:text-lg lowercase'>
                <LiaPhoneSolid className='text-3xl'/>
                <p className='indent-2'>+7 (959) 222 22-22</p>
              </div>
              <div className='flex items-center text-xs xl:text-base 2xl:text-lg lowercase'>
                <VscMail className='text-3xl'/>
                <p className='indent-3'>ooolsklpr@mail.ru</p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Navbar;
