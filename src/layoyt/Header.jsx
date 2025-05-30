import { useEffect, useRef, useState } from 'react';
import disableScroll from 'disable-scroll';
import { animateScroll as scroll, Link } from 'react-scroll';
import { AnimatePresence, motion } from 'framer-motion';
import { logoLight } from '../assets';
import { LiaPhoneSolid } from 'react-icons/lia';
import { VscMail } from 'react-icons/vsc';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { TbTriangleInvertedFilled } from 'react-icons/tb';
import navbar from '../constants/navbar.json';
import FlyoutLink from '../components/header/FlyoutLink.jsx';
import ProductsContent from '../components/header/ProductsContent.jsx';
import { category, products } from '../assets/products';

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [mobileNav, setMobileNav] = useState(false);
  const [heightNav, setHeightNav] = useState(0);
  const refNav = useRef(null);
  const categoryFilter = category.filter(
    (i) =>
      products.filter((j) => j._id.includes(i._id) && j.image.length).length,
  );
  useEffect(() => {
    setHeightNav(refNav.current.clientHeight * -1);
  }, [heightNav, refNav]);
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: '100px',
      transition: {
        duration: 0.3,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-10 text-light sm:bg-dark `}
      >
        <nav
          ref={refNav}
          className='max-sm:hidden flex justify-evenly items-center px-0 lg:px-28 font-prima text-xs xl:text-base 2xl:text-2xl 3xl:text-2xl uppercase tracking-wider border-b '
        >
          <div className='h-min-[50px] w-min-[135px] 2xl:h-[100px] 2xl:w-[270px] cursor-pointer'>
            <a href='https://ooolsklpr.ru/'>
              <img
                src={logoLight}
                alt='ЛСК'
                className='h-[64px] w-[207px] mt-5 object-contain'
                /*onClick={scroll.scrollToTop}*/
              />
            </a>
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
              href='tel:+79595884488'
              className='flex items-center text-xs xl:text-base 2xl:text-lg lowercase'
            >
              <LiaPhoneSolid className='text-3xl' />
              <p className='indent-2'>+7 (959) 588 44-88</p>
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
        <div className='sm:hidden relative top-0 bottom-0'>
          <nav className='relative bg-[#242424] h-16 border-b-2 border-[#f0f0f0]'>
            <img
              src={logoLight}
              alt='ЛСК'
              onClick={scroll.scrollToTop}
              className='absolute h-14 w-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer'
            />
            {mobileNav ? (
              <HiX
                onClick={() => {
                  setMobileNav(!mobileNav);
                  disableScroll.off();
                }}
                className='absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-4xl'
              />
            ) : (
              <HiOutlineMenuAlt3
                onClick={() => {
                  setMobileNav(!mobileNav);
                  disableScroll.on();
                }}
                className='absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-4xl'
              />
            )}
          </nav>
          <AnimatePresence>
            {mobileNav && (
              <motion.div
                variants={menuVars}
                initial='initial'
                animate='animate'
                exit='exit'
                className='origin-top'
              >
                <div className='w-full bg-[#242424]'>
                  <div className='border-x-2  border-[#f0f0f0] bg-[url(/bg_mountain_10.png)] bg-no-repeat bg-cover bg-top mx-5'>
                    <div className='h-dvh bg-[rgba(0,0,0,0.2)]'>
                      <motion.div
                        variants={containerVars}
                        initial='initial'
                        animate='open'
                        exit='initial'
                        className='flex flex-col items-center gap-12 pt-8'
                      >
                        <div className='flex flex-col gap-3'>
                          <a
                            href='tel:+79595884488'
                            /*className="flex items-center text-xs xl:text-base 2xl:text-lg lowercase"*/
                          >
                            <motion.div variants={mobileLinkVars}>
                              <div className='flex flex-col items-center'>
                                <LiaPhoneSolid className='text-3xl' />
                                <p className='text-xl font-prima'>
                                  +7 (959) 588 44-88
                                </p>
                              </div>
                            </motion.div>
                          </a>
                          <a
                            href='mailto:ooolsklpr@mail.ru'
                            className='flex items-center text-xs xl:text-base 2xl:text-lg lowercase'
                          >
                            <motion.div variants={mobileLinkVars}>
                              <div className='flex flex-col items-center'>
                                <VscMail className='text-3xl' />
                                <p className='text-xl font-prima'>
                                  ooolsklpr@mail.ru
                                </p>
                              </div>
                            </motion.div>
                          </a>
                        </div>
                        <nav className='flex flex-col items-center gap-8 text-3xl font-prima uppercase'>
                          <motion.div variants={mobileLinkVars}>
                            <Link
                              to='hero'
                              offset={0}
                              onClick={() => {
                                disableScroll.off();
                                setMobileNav(!mobileNav);
                              }}
                              className=''
                            >
                              главная
                            </Link>
                          </motion.div>
                          <div className='flex flex-col items-center gap-2 text-3xl'>
                            <motion.div variants={mobileLinkVars}>
                              <Link
                                to='products'
                                offset={-18}
                                onClick={() => {
                                  disableScroll.off();
                                  setMobileNav(!mobileNav);
                                }}
                                className=''
                              >
                                продукция
                              </Link>
                            </motion.div>

                            <motion.div variants={mobileLinkVars}>
                              <TbTriangleInvertedFilled />
                            </motion.div>
                            {categoryFilter.map((i) => (
                              <motion.div variants={mobileLinkVars} key={i._id}>
                                <Link
                                  to={i._id}
                                  offset={-32}
                                  onClick={() => {
                                    disableScroll.off();
                                    setMobileNav(!mobileNav);
                                  }}
                                  className='font-prima text-xl'
                                >
                                  {i.acronym}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                          <motion.div variants={mobileLinkVars}>
                            <Link
                              to='contacts'
                              offset={-80}
                              onClick={() => {
                                disableScroll.off();
                                setMobileNav(!mobileNav);
                              }}
                            >
                              о нас
                            </Link>
                          </motion.div>
                          <motion.div
                            variants={mobileLinkVars}
                            className='h-[2px] w-dvw scale-90 bg-[#f0f0f0]'
                          />
                        </nav>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};
export default Header;
