import { logoLight, mailLight, phoneLight } from '../assets/index.js';
import navbar from '../constants/navbar.json';
import ItemNavbar from '../components/ItemNavbar.jsx';
import { animateScroll as scroll } from 'react-scroll';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const pathname = useLocation();
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
        <div
          className={`fixed top-0 left-0 right-0 mx-16 z-10 bg-[url(/bg_mountain.png)] bg-[#242424] text-[#F0F0F0] brightness-150`}
        >
          <nav className='flex justify-evenly items-center px-0 lg:px-28 py-3 font-prata text-xs xl:text-base 2xl:text-2xl 3xl:text-3xl uppercase tracking-wider border-x border-b '>
            <div className='h-min-[50px] w-min-[135px] 2xl:h-[100px] 2xl:w-[270px] cursor-pointer'>
              <img
                src={logoLight}
                alt='ЛСК'
                className=''
                onClick={scroll.scrollToTop}
              />
            </div>
            {navbar.map((item) => (
              <ItemNavbar
                key={item._id}
                href={item.href}
                path={pathname.hash}
                item={item.item}
                id={item._id}
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
