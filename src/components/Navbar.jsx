import logo from '../assets/logo.png';
import phone from '../assets/phone.png';
import email from '../assets/mail.png';

const Navbar = () => {
  return (
    <div className='flex fixed top-0 left-0 right-0 h-32 z-10 backdrop-opacity-100'>
      <nav className="flex w-full justify-evenly items-center ml-16 mr-16 px-28 font-prata text-3xl uppercase tracking-wider border border-b border-[#F0F0F0] text-[#F0F0F0]">
        <img src={logo} alt='ЛСК' className='object-cover pt-6' />
        <a href='#hero'>Главная</a>
        <a href='#products'>Продукция</a>
        <a href='#'>О нас</a>
        <a href='#'>Контакты</a>
        <div className="flex flex-col gap-1.5">
          <div className='flex text-2xl lowercase'>
            <img src={phone} alt='' />
            <p>+7 (959) 222 22-22</p>
          </div>
          <div className='flex text-2xl lowercase'>
            <img src={email} alt='' />
            <p className="indent-2.5">ooolsklpr@mail.ru</p>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
