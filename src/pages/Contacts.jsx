import { useCallback } from 'react';
import Carousel from '../components/Carousel.jsx';
import Skill from '../components/Skill.jsx';
import { experience, skill, wagon } from '../assets/index.js';
import {
  YMap,
  YMapComponentsProvider,
  YMapDefaultFeaturesLayer,
  YMapDefaultMarker,
  YMapDefaultSchemeLayer,
  YMapFeature,
  YMapHint,
} from 'ymap3-components';
import { features, location, MARKER_PROPS} from '../constants/helpersYmap.js';
import { aboutCompany } from '../constants/aboutСompany.js';
import HintWindow from '../constants/HintWindow';

const Contacts = () => {
  const getHint = useCallback((object) => object?.properties?.hint, []);

  return (
    <>
      <section
        id='contacts'
        className='bg-[url(/bg_products.png)] bg-no-repeat bg-cover bg-[#242424] opacity-70 contrast-125 brightness-110'
      >
        <div className='mx-16 pt-8 pb-8 border-x border-[#242424]'>
          <section className=''>
            <div className='flex'>
              <div className='basis-[40%]'>
                <Carousel />
              </div>

              <div className='basis-[60%] px-12'>
                <h1 className='font-prata text-6xl text-center mb-8'>О нас</h1>
                {aboutCompany.map((item, index) => (
                  <div key={index} className='text-2xl indent-20 '>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div className='font-prata mt-8 text-6xl font-medium tracking-widest uppercase text-center text-[#242424]'>
            наши преимущества
            <div className='flex justify-evenly mt-8'>
              <Skill
                image={wagon}
                alt={'ЖД'}
                text={`Возможность\nдоставки\nжелезнодорожным\nтранспортом`}
              />
              <Skill
                image={skill}
                alt={'V'}
                text={`Высокие\nпоказатели\nматериала`}
              />
              <Skill
                image={experience}
                alt={'V'}
                text={`Опыт работы\nболее 18 лет`}
              />
            </div>
          </div>
        </div>
        <section className='bg-[url(/bg_mountain.png)] bg-no-repeat bg-cover bg-[#242424] opacity-90'>
          <div className='flex flex-wrap'>
            <div className='w-1/2 h-60 mt-5'>
              <YMapComponentsProvider
                apiKey={import.meta.env.VITE_APY_KEY}
                lang='ru_RU'
              >
                <YMap location={location} mode='auto'>
                  <YMapDefaultSchemeLayer />
                  <YMapDefaultFeaturesLayer />
                  <YMapFeature
                    geometry={features.geometry}
                    style={features.style}
                  />
                  <YMapHint hint={getHint}>
                    <HintWindow />
                  </YMapHint>
                  <YMapDefaultMarker
                    {...MARKER_PROPS}
                  ></YMapDefaultMarker>
                </YMap>
              </YMapComponentsProvider>
            </div>

            <div className='w-1/2 p-10 h-fit transition-opacity'>
              <h1 className='font-prata text-center text-[#f0f0f0] text-6xl -mt-4 font-medium tracking-wider underline uppercase'>
                контакты
              </h1>
              <p className='mt-2 font-prata text-center text-[#f0f0f0] whitespace-pre'>
                {`+7 (959) 222 22-22\nooolsklpr@mail.ru\nЮр. адрес: ДНР, Донецк, ул. Фёдора Зайцева, 75/20\nАдрес карьера: ЛНР, с. Ковыльное, ул. Пролетарская 38`}
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
export default Contacts;
