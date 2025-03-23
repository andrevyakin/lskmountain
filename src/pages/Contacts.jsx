import {
  YMap,
  YMapComponentsProvider,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapFeature,
  YMapDefaultMarker,
} from 'ymap3-components';
import { location, features } from '../constants/helpersYmap.js';

const Contacts = () => {
  return (
    <>
      <section
        id='contacts'
        className='bg-[url(/bg_mountain.png)] bg-no-repeat bg-cover bg-[#242424] opacity-90'
      >


        <div className='flex flex-wrap'>
          <div className='w-1/2 h-80 mt-5'>
            <YMapComponentsProvider
              apiKey={import.meta.env.VITE_APY_KEY}
              lang='ru_RU'
            >
              <YMap location={location} mode='auto' theme=''>
                <YMapDefaultSchemeLayer />
                <YMapDefaultFeaturesLayer />
                <YMapFeature
                  geometry={features.geometry}
                  style={features.style}
                />
                <YMapDefaultMarker
                  coordinates={location.center}
                  title='Карьер ЛСК'
                  subtitle='п. Ковыльное, 38'
                  color='grey'
                  size='micro'
                ></YMapDefaultMarker>
              </YMap>
            </YMapComponentsProvider>
          </div>

          <div className='w-1/2 p-10 h-fit transition-opacity'>
            <h1 className='font-prata text-center text-[#f0f0f0] text-6xl font-medium tracking-wider underline uppercase'>
              контакты
            </h1>
            <p className='mt-2 font-prata text-center text-[#f0f0f0] whitespace-pre'>
              {`+7 (959) 222 22-22\nooolsklpr@mail.ru\nЮр. адрес: ДНР, Донецк, ул. Фёдора Зайцева, 75/20\nАдрес карьера: ЛНР, с. Ковыльное, ул. Пролетарская 38`}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contacts;
