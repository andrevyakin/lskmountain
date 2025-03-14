const ItemNavbar = ({ href, item, path }) => {
  return (
    <a href={href} className='flex flex-col items-center mt-7'>
      {item}
      <hr
        className={`w-3/4 border-none h-[1.5px] ${path === href ? 'bg-[#BABABA]' : ''}`}
      />
    </a>
  );
};
export default ItemNavbar;
