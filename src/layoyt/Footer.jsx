import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import YandexMap from '../components/footer/YandexMap.jsx';

const Footer = () => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);
  useLayoutEffect(() => {

    setHeight(ref.current.clientHeight);
  }, [height, ref.current]);

  return (
    <footer className='bg-[#242424]'>
      <div className='bg-[url(/bg_mountain_10.png)] bg-no-repeat bg-cover' >
        <div className='bg-[rgba(0,0,0,.25)]'>
          <div className='flex flex-wrap max-sm:flex-col-reverse'>
            <div className='w-1/2 self-end max-sm:w-full'
                 style={{
                   height: `${height}px`,
                 }}
            >
              <YandexMap />
            </div>

            <div className='w-1/2 max-sm:w-full h-fit max-sm:h-1/2 justify-items-center mt-4 py-4'  ref={ref}>
              <div className='max-sm:text-5xl border-b-[2px] w-fit font-prata text-center text-[#f0f0f0] text-7xl font-medium tracking-wider uppercase'>
                контакты
              </div>
              <p className='mt-10 max-sm:mt-6 font-philosopher text-center text-[#f0f0f0] whitespace-pre text-2xl max-sm:text-sm'>
                {`+7 (959) 222 22-22\nooolsklpr@mail.ru\nЮр. адрес: ДНР, Донецк, ул. Фёдора Зайцева, 75/20\nАдрес карьера: ЛНР, с. Ковыльное, ул. Пролетарская, 38`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
