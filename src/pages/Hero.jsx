import { hero1, hero2 } from '../assets';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const Hero = () => {
  return (
    <section id='hero'>
      <h2 className='hidden'>Главное ООО "ЛСК"</h2>
      <div className='bg-[#242424] max-sm:mx-5 mx-16'>
        <div className=' bg-[url(/bg_mountain_10.png)] bg-no-repeat bg-cover'>
          <div className='bg-[rgba(0,0,0,.25)]'>
            {/*для 4-х элементов*/}
            <div
              className='flex flex-col justify-evenly gap-16 max-sm:gap-4 max-sm:px-5 px-44 max-sm:pt-20 pt-52 max-sm:pb-16 pb-24 border-x border-[#242424]'>
              {/*для двух верхних элементов*/}
              <div className='max-sm:flex-col max-sm:h-80 flex justify-center'>
                {/*верхний левый элемент*/}
                <div className='flex-1 content-center justify-items-center border border-[#F0F0F0]'>
                  <div className='flex flex-col gap-6 w-fit'>
                    <h3
                      className='font-prata uppercase text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-[#F0F0F0]'>
                      щебень, щпс, отсев
                    </h3>
                    <div className='flex items-center gap-2'>
                      <p className='min-w-16 md:w-11 h-[1px] bg-[#BABABA]'></p>
                      <p
                        className='font-philosopher uppercase text-base xl:text-lg 2xl:text-xl 3xl:text-2xl text-[#F0F0F0]'>
                        от производителя
                      </p>
                    </div>
                  </div>
                </div>

                {/*верхний правый элемент*/}
                <div className='flex-1 border border-[#F0F0F0]'>
                  <img
                    src={hero1}
                    alt='Фото1'
                    height='328'
                    width='726'
                    className='object-cover w-full h-auto max-sm:w-auto max-sm:h-full'
                  />
                </div>
              </div>

              {/*для двух нижних элементов*/}
              <div className='max-sm:flex-col-reverse max-sm:h-80 flex justify-center'>
                {/*нижний левый элемент*/}
                <div className='flex-1 border border-[#F0F0F0]'>
                  <img
                    src={hero2}
                    alt=' Фото2'
                    height='328'
                    width='726'
                    className='object-cover w-full h-auto max-sm:w-auto max-sm:h-full'
                  />
                </div>

                {/*нижний правый элемент*/}
                <div className='flex-1 content-center justify-items-center border border-[#F0F0F0]'>
                  <div
                    className='flex flex-col gap-3 w-fit font-prata uppercase text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-[#F0F0F0]'>
                    <p>петровеньковское</p>
                    <p>месторождение</p>
                    <p>песчаника</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
