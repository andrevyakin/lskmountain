import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className='flex justify-evenly items-center fixed top-0 left-0  ml-16 px-44 text-3xl border border-b border-[#F0F0F0] text-[#F0F0F0]'>
      <img src={logo} alt='ЛСК' className='object-cover' />
      <a href='#'>Главная</a>
      <a href='#'>Продукция</a>
      <a href='#'>О нас</a>
      <a href='#'>Контакты</a>
      <div>Телефон и почта</div>
    </div>
  );
};
export default Navbar;
