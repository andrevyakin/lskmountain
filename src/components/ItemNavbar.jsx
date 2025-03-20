import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';

const ItemNavbar = ({ id, item }) => {
  const [heightNavbar, setHeightNavbar] = useState(0);
  const [heightContacts, setHeightContacts] = useState(0);
  const [heightTotal, setHeightTotal] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const navbar = document.getElementsByTagName('nav');
    const contacts = document.getElementById('contacts');

    setHeightNavbar(navbar[0].clientHeight * -1);
    setHeightContacts(contacts.clientHeight);
    setHeightTotal(document.documentElement.scrollHeight);

    console.log(window.scrollY);

    const handleScroll = () => {
      const position = window.scrollY
      setScrollPosition(position);
    };

    if (window.scrollY >= heightTotal - contacts) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };

  }, [heightNavbar, heightContacts, heightTotal, scrollPosition]);

  return isActive ? (
    <Link
      className='flex flex-col items-center mt-7 cursor-pointer'
      activeClass='underline underline-offset-8'
      to={id}
      spy={false}
      smooth={true}
      offset={heightNavbar}
      duration={500}
    >
      {item}
    </Link>
  ) : (
    <Link
      className='flex flex-col items-center mt-7 cursor-pointer'
      activeClass='underline underline-offset-8'
      to={id}
      spy={true}
      smooth={true}
      offset={heightNavbar}
      duration={500}
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
