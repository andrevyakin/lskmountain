import React, { useLayoutEffect, useRef, useState } from 'react';
import YandexMap from '../components/footer/YandexMap.jsx';
import useWindowDimensions from '../hook/useWindowDimensions.js';

const Footer = () => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);
  const fullHeight = useWindowDimensions().height;
  const fullWidth = useWindowDimensions().width;

  useLayoutEffect(() => {
    setHeight(ref.current.clientHeight);
  }, [height, ref.current]);

  return (
    <footer className='bg-dark' >
      <h2 className='hidden'>Местонахождение на Яндекс карте и контакты.</h2>
      <div className='bg-[url(/bg_mountain_10.png)] bg-no-repeat bg-cover'>
        <div className='bg-[rgba(0,0,0,.25)]'>
          <div className='flex flex-col-reverse sm:flex-row'>
            <div
              className='w-full sm:w-1/2 sm:self-end'
              style={{
                height: `${height}px`,
              }}
            >
              <YandexMap />
            </div>

            <article className='w-full sm:w-1/2  mt-4 py-4' ref={ref}
                     style={{
                        height: fullWidth < 640 ? `${fullHeight*0.5-64/2}px` : '',
                     }}
            >
              <h3
                className='relative  font-prima text-center text-light font-medium tracking-wider uppercase
              text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'
              >
                контакты
                <span
                  className='absolute left-1/2 -bottom-1 -translate-x-1/2 h-[2px] bg-light
                w-80 sm:w-48 md:w-58 lg:w-78 xl:w-98 2xl:w-116'
                />
              </h3>
              <p className='mt-6 sm:mt-6 font-prima text-center text-light text-base/7.5 sm:text-sm md:text-sm/6 lg:text-base/7 xl:text-xl/9 2xl:text-2xl/10 sm:mb-2'>
                +7 (959) 222 22-22
                <br />
                ooolsklpr@mail.ru
                <br /></p>
              <p className='font-second text-center text-light text-base/7.5 sm:text-sm md:text-sm/6 lg:text-base/7 xl:text-xl/9 2xl:text-2xl/10 sm:mb-2'>
                Юр. адрес: ДНР, Донецк, <br className='md:hidden' />
                ул. Фёдора Зайцева, 75/20
                <br />
                Адрес карьера: <br className='md:hidden' />
                ЛНР, с. Ковыльное, ул. Пролетарская, 38
              </p>
            </article>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
