import { useEffect, useRef, useState } from 'react';
import { logoLight } from '../assets/index.js';
import { animateScroll as scroll } from 'react-scroll';
import { LiaPhoneSolid } from 'react-icons/lia';
import { VscMail } from 'react-icons/vsc';
import navbar from '../constants/navbar.json';
import FlyoutLink from '../components/header/FlyoutLink.jsx';
import ProductsContent from '../components/header/ProductsContent.jsx';

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [heightNav, setHeightNav] = useState(0);
  const refNav = useRef(null);
  useEffect(() => {
    setHeightNav(refNav.current.clientHeight * -1);
  }, [heightNav, refNav]);

  return (
    <>
        <header id='navbar' className={`fixed top-0 w-full z-10 bg-[#323232] text-[#F0F0F0]`}>
          <nav
            ref={refNav}

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
              <FlyoutLink
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
                activeLink={activeLink}
                id={i._id}
                FlyoutContent={i._id === 'products' ? ProductsContent : ''}
              >
                {i.item}
              </FlyoutLink>
            ))}
            <div className='flex flex-col gap-1.5'>
              <a href='tel:+79592222222' className='flex items-center text-xs xl:text-base 2xl:text-lg lowercase'>
                <LiaPhoneSolid className='text-3xl' />
                <p className='indent-2'>+7 (959) 222 22-22</p>
              </a>
              <a href='mailto:ooolsklpr@mail.ru' className='flex items-center text-xs xl:text-base 2xl:text-lg lowercase'>
                <VscMail className='text-3xl' />
                <p className='indent-3'>ooolsklpr@mail.ru</p>
              </a>
            </div>
          </nav>
        </header>
    </>
  );
};
export default Header;
