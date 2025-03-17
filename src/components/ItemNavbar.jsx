import { Link } from 'react-scroll';

const ItemNavbar = ({ href, item, path, color }) => {
  return (
    <a href={href} className='flex flex-col items-center mt-7'>
      {item}
      <hr
        className={`w-3/4 border-none h-[1.5px] ${path === href ? color : ''}`}
      />
    </a>
  );
};
export default ItemNavbar;
