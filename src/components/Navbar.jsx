import logo from '../assets/logo.png';
import phone from '../assets/phone.png';
import email from '../assets/mail.png';

const Navbar = () => {
  console.log(window.screen.width);

  return (
    <div className='relative'>
      <div className=' fixed top-0 left-0 right-0 z-10 bg-[#222222] bg-[url(/bg_mountain.png)] brightness-110'>
        <nav className='flex justify-evenly items-center mx-16 px-28 font-prata text-3xl text-[#F0F0F0] uppercase tracking-wider border border-b border-[#F0F0F0]'>
          <img
            src={logo}
            alt='ЛСК'
            className='pt-6 h-[89px] w-[240]px 3xl:h[100] 3xl:w[270]'
          />
          <a href='#hero'>Главная</a>
          <a href='#products'>Продукция</a>
          <a href='#'>О нас</a>
          <a href='#'>Контакты</a>
          <div className='flex flex-col gap-1.5'>
            <div className='flex text-2xl lowercase'>
              <img
                src={phone}
                alt=''
                className='h-[33px] w-[32]px 3xl:h-[40] 3xl:w-[41]'
              />
              <p>+7 (959) 222 22-22</p>
            </div>
            <div className='flex text-2xl lowercase'>
              <img
                src={email}
                alt=''
                className='h-[27px] w-[28]px 3xl:h-[34] 3xl:w-[34]'
              />
              <p className='indent-2.5'>ooolsklpr@mail.ru</p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
