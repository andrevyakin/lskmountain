import { useEffect, useRef, useState } from 'react';
import { logoLight, menu } from '../assets';
import { animateScroll as scroll, Link } from 'react-scroll';
import { LiaPhoneSolid } from 'react-icons/lia';
import { VscMail } from 'react-icons/vsc';
import { FaArrowDown } from 'react-icons/fa6';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { TbTriangleInvertedFilled } from "react-icons/tb";
import navbar from '../constants/navbar.json';
import FlyoutLink from '../components/header/FlyoutLink.jsx';
import ProductsContent from '../components/header/ProductsContent.jsx';

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [heightNav, setHeightNav] = useState(0);
  const [mobileNav, setMobileNav] = useState(false);
  const refNav = useRef(null);
  useEffect(() => {
    setHeightNav(refNav.current.clientHeight * -1);
  }, [heightNav, refNav]);

  return (
    <>
      <header className={`fixed top-0 w-full z-10 bg-[#323232] text-[#F0F0F0]`}>
        <nav
          ref={refNav}
          className='max-sm:hidden flex justify-evenly items-center px-0 lg:px-28 font-prata text-xs xl:text-base 2xl:text-2xl 3xl:text-2xl uppercase tracking-wider border-b '
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
            <a
              href='tel:+79592222222'
              className='flex items-center text-xs xl:text-base 2xl:text-lg lowercase'
            >
              <LiaPhoneSolid className='text-3xl' />
              <p className='indent-2'>+7 (959) 222 22-22</p>
            </a>
            <a
              href='mailto:ooolsklpr@mail.ru'
              className='flex items-center text-xs xl:text-base 2xl:text-lg lowercase'
            >
              <VscMail className='text-3xl' />
              <p className='indent-3'>ooolsklpr@mail.ru</p>
            </a>
          </div>
        </nav>

        {/*для мобилы*/}
        <nav className='relative sm:hidden bg-[#1e1e1e] h-16 w-full border-b-2 border-[#f0f0f0]'>
          <img
            src={logoLight}
            alt='ЛСК'
            onClick={scroll.scrollToTop}
            className='absolute h-14 w-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer'
          />
          {mobileNav ? (
            <HiX
              onClick={() => setMobileNav(!mobileNav)}
              className='absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-4xl'
            />
          ) : (
            <HiOutlineMenuAlt3
              onClick={() => setMobileNav(!mobileNav)}
              className='absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-4xl'
            />
          )}
        </nav>
        {mobileNav && (
          <>
            <div className='h-dvh bg-[#1e1e1e]'>
              <div className='h-11/12 border-2 border-t-0 border-[#f0f0f0] bg-[url(/bg_mountain_10.png)] bg-no-repeat bg-cover bg-top mx-5 mb-5'>
                <div className='flex flex-col items-center gap-16 pt-20'>
                  <div className='flex flex-col gap-3'>
                    <a
                      href='tel:+79592222222'
                      className='flex items-center text-xs xl:text-base 2xl:text-lg lowercase'
                    >
                      <div className='flex flex-col items-center'>
                        <LiaPhoneSolid className='text-3xl' />
                        <p className='text-2xl font-prata'>+7 (959) 222 22-22</p>
                      </div>
                    </a>
                    <a
                      href='mailto:ooolsklpr@mail.ru'
                      className='flex items-center text-xs xl:text-base 2xl:text-lg lowercase'
                    >
                      <div className='flex flex-col items-center'>
                        <VscMail className='text-3xl' />
                        <p className='text-2xl font-prata'>ooolsklpr@mail.ru</p>
                      </div>
                    </a>
                  </div>
                  <nav className='flex flex-col items-center gap-16 text-5xl uppercase '>
                    <Link
                      to='hero'
                      offset={0}
                      onClick={() => setMobileNav(!mobileNav)}
                      className='font-prata'
                    >
                      главная
                    </Link>
                    <div className='flex flex-col items-center gap-2 text-3xl'>
                      <Link
                        to='products'
                        offset={32}
                        onClick={() => setMobileNav(!mobileNav)}
                        className='text-5xl'
                      >
                        продукция
                      </Link>
                      <TbTriangleInvertedFilled />
                      <Link
                        to='a'
                        offset={-32}
                        onClick={() => setMobileNav(!mobileNav)}
                      >
                        щебень
                      </Link>
                      <Link
                        to='b'
                        offset={-32}
                        onClick={() => setMobileNav(!mobileNav)}
                      >
                        щпс
                      </Link>
                      <Link
                        to='c'
                        offset={-32}
                        onClick={() => setMobileNav(!mobileNav)}
                      >
                        отсев
                      </Link>
                    </div>
                    <Link
                      to='contacts'
                      offset={32}
                      onClick={() => setMobileNav(!mobileNav)}
                    >
                      о нас
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
};
export default Header;
