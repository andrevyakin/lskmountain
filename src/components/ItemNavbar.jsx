import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';

const ItemNavbar = ({ id, item }) => {
  const [heightNavbar, setHeightNavbar] = useState(0);
  useEffect(() => {
    const navbar = document.getElementsByTagName('nav');
    setHeightNavbar(navbar[0].clientHeight * -1);
  }, [heightNavbar]);

  return (
    <Link
      className='flex flex-col items-center mt-7 cursor-pointer'
      activeClass='underline underline-offset-8'
      to={id}
      spy={true}
      smooth={true}
      offset={heightNavbar}
      duration={900}
    >
      {item}
    </Link>
  );
};
export default ItemNavbar;

/*
  activeClass — класс, применяемый при достижении элемента.
  to — цель прокрутки.
  spy — выделение Link при достижении целевой позиции scroll.
  smooth — анимация прокрутки.
  offset — прокрутка дополнительных пикселей (например, оформления).
  duration — время анимации прокрутки. Это может быть число или функция.*/
