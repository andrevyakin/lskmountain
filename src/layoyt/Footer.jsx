import React from 'react';
import YandexMap from '../components/YandexMap.jsx';

const Footer = () => {
  return (
    <footer className='bg-[#242424]'>
      <div className='bg-[url(/bg_mountain_10.png)] bg-no-repeat bg-cover backdrop-opacity-10'>
        <div className='flex flex-wrap'>
          <div className='w-1/2 h-70 mt-3'>
            <YandexMap />
          </div>

          <div className='w-1/2  h-fit justify-items-center mt-8'>
            <div className='border-b-[2px] w-fit font-prata text-center text-[#f0f0f0] text-7xl font-medium tracking-wider uppercase'>
              контакты
            </div>
            <p className='mt-10  font-philosopher text-center text-[#f0f0f0] whitespace-pre text-2xl'>
              {`+7 (959) 222 22-22\nooolsklpr@mail.ru\nЮр. адрес: ДНР, Донецк, ул. Фёдора Зайцева, 75/20\nАдрес карьера: ЛНР, с. Ковыльное, ул. Пролетарская, 38`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

