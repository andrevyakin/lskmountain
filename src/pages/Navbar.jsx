import logo from '../assets/logo.png';
import phone from '../assets/phone.png';
import email from '../assets/mail.png';
import { useLocation } from 'react-router-dom';
import navbar from '../constants/navbar.json';
import ItemNavbar from '../components/itemNavbar.jsx';

const Navbar = () => {
  const pathname = useLocation();

  return (
    <div className='relative'>
      <div className=' fixed top-0 left-0 right-0 z-10 bg-[#222222] bg-[url(/bg_mountain.png)] brightness-110'>
        <nav className='flex justify-evenly items-center mx-16 px-28 font-prata text-xs xl:text-base 2xl:text-2xl 3xl:text-3xl text-[#F0F0F0] uppercase tracking-wider border-x border-b border-[#F0F0F0]'>
          <img src={logo} alt='ЛСК' className='pt-6' />

          {navbar.map((item) => (
            <ItemNavbar
              item={item.item}
              key={item.id}
              path={pathname.hash}
              href={item.href}
            />
          ))}
          <div className='flex flex-col gap-1.5'>
            <div className='flex items-center text-xs xl:text-base 2xl:text-2xl lowercase'>
              <img src={phone} alt='' className='' />
              <p>+7 (959) 222 22-22</p>
            </div>
            <div className='flex items-center text-xs xl:text-base 2xl:text-2xl lowercase'>
              <img src={email} alt='' className='' />
              <p className='indent-2.5'>ooolsklpr@mail.ru</p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
