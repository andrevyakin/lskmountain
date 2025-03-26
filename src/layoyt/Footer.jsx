import React from 'react';
import YandexMap from '../components/YandexMap.jsx';

const Footer = () => {
  return (
    <footer className='bg-[#242424]'>
      <div className='bg-[url(/bg_mountain_10.png)] bg-no-repeat bg-cover backdrop-opacity-10'>
        <div className='flex flex-wrap'>
          <div className='w-1/2 h-60 mt-5'>
            <YandexMap />
          </div>

          <div className='w-1/2 p-10 h-fit'>
            <h1 className='font-prata text-center text-[#f0f0f0] text-6xl -mt-4 font-medium tracking-wider underline uppercase'>
              контакты
            </h1>
            <p className='mt-2 font-philosopher text-center text-[#f0f0f0] whitespace-pre'>
              {`+7 (959) 222 22-22\nooolsklpr@mail.ru\nЮр. адрес: ДНР, Донецк, ул. Фёдора Зайцева, 75/20\nАдрес карьера: ЛНР, с. Ковыльное, ул. Пролетарская, 38`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
