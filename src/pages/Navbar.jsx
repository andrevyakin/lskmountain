import { logoLight, mailLight, phoneLight } from '../assets';
import navbar from '../constants/navbar.json';
import ItemNavbar from '../components/ItemNavbar.jsx';
import { useEffect, useRef, useState } from 'react';
import useWindowDimensions from '../hook/useWindowDimensions.js';

const Navbar = () => {
  //const pathname = useLocation();
  const [bgHeader, setBgHeader] = useState(
    'bg-[url(/bg_mountain.png)] bg-[#242424] text-[#F0F0F0] brightness-150',
  );

  const [scrollY, setScrollY] = useState(0);

  const { height } = useWindowDimensions();

  const [heightNavbar, setHeightNavbar] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    setHeightNavbar(ref.current.clientHeight);
  }, []);

  useEffect(() => {
    const listener = () => {
      setScrollY(window.scrollY);
      if (scrollY <= height - heightNavbar)
        setBgHeader(
          'bg-[url(/bg_mountain.png)] bg-[#242424] text-[#F0F0F0] brightness-150',
        );
      else if (scrollY > height - heightNavbar && scrollY < height - 1)
        setBgHeader(
          'bg-transparent mix-blend-difference transition delay-150 duration-300 ease-in-out',
        );
      else
        setBgHeader(
          'bg-[url(/bg_products.png)] bg-cover bg-[#242424] contrast-125 brightness-115 text-[#242424]',
        );
    };
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, [height, heightNavbar, scrollY]);

  return (
    <>
      {/*<div className='fixed top-50 text-5xl left-0 text-red-800 z-20'>
        <p>height = {height}</p>
        <p>heightNavbar = {heightNavbar}</p>
        <p>height - heightNavbar = {height - heightNavbar}</p>
        <p>window.scrollY = {scrollY}</p>
        {bgHeader}
      </div>*/}
      <div className='relative'>
        <div className={`fixed top-0 left-0 right-0 z-10 ${bgHeader}`}>
          <nav
            ref={ref}
            className='flex justify-evenly items-center mx-16 px-28 py-3 font-prata text-xs xl:text-base 2xl:text-2xl 3xl:text-3xl uppercase tracking-wider border-x border-b '
          >
            <img src={logoLight} alt='ЛСК' className='' />

            {navbar.map((item) => (
              <ItemNavbar
                item={item.item}
                key={item.id}
                path={navbar[Math.floor(scrollY / height)].href}
                href={item.href}
                color={scrollY >= height ? 'bg-[#242424]' : 'bg-[#F0F0F0]'}
              />
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
