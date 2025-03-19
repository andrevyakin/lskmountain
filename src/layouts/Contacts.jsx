import React, { useEffect, useRef, useState } from 'react';
import { loadScript } from '../util/loadScript.js';
import { init } from '../util/init.js';

const Contacts = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  //Инициализация карты при создании окна
  useEffect(() => {
    loadScript(
      `https://api-maps.yandex.ru/2.0-stable/?apikey=${import.meta.env.VITE_APY_KEY}&load=package.full&lang=ru-RU`,
    )
      .then(() => {
        window.ymaps.ready(init);
        setIsLoaded(true);
      })
      .catch(setIsLoaded(false));
  }, []);

  //привязка в div с текстом описания
  const heightDivText = useRef(null);

  //константа высоты карты
  const [heightMap, setHeightMap] = useState(null);

  //изменение высоты карты при измерении высоты текста
  const updateHeightMap = () => {
    if (heightDivText.current) setHeightMap(heightDivText.current.clientHeight);
  };

  //инициализация высоты карты при создании окна
  useEffect(() => {
    window.addEventListener('resize', updateHeightMap);
    setHeightMap(heightDivText.current.clientHeight);
    return () => window.removeEventListener('resize', updateHeightMap);
  }, []);
  return (
    <section
      id='contacts'
      className='bg-[url(/bg_mountain.png)] bg-no-repeat bg-cover bg-[#242424] opacity-90'
    >
      <div className='flex flex-wrap'>
        <div className='w-1/2'>
          {isLoaded ? (
            <div className=''>
              <div
                id='map'
                className='pt-3 '
                /*высота карты. цифра - для ручной регулировки*/
                style={{ height: heightMap + 0 }}
              />
            </div>
          ) : (
            <div className=' w-full justify-center items-center'>
              {/*<img className="h-full border-1 border-grad rounded-xl"
                       src={logo}
                       style={{ height: heightMap - 80, maxHeight: 332, maxWidth: 1054 }}
                       alt="Your Company" />*/}
            </div>
          )}
        </div>
        <div
          className='w-1/2 p-10 h-fit transition-opacity'
          ref={heightDivText}
        >
          <h1 className='font-prata text-center text-[#f0f0f0] text-6xl font-medium tracking-wider underline uppercase'>
            контакты
          </h1>
          <p className='mt-2 font-prata text-center text-[#f0f0f0] whitespace-pre'>
            {`+7 (959) 222 22-22\nooolsklpr@mail.ru\nЮр. адрес: ДНР, Донецк, ул. Фёдора Зайцева 46\nАдрес карьера: ЛНР, с. Ковыльное, ул. Пролетарская 38`}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Contacts;
