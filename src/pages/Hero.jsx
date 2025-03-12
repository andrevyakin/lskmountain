import photo1 from '../assets/hero-1.png';
import photo2 from '../assets/hero-2.png';

const Hero = () => {
  return (
    <>
      <div id='hero' className='bg-[#222222]'>
        <div className='h-lvh bg-[url(/bg_mountain.png)] bg-no-repeat bg-cover opacity-90 pt-32 pb-8'>
          {/*для 4-х элементов*/}
          <div className='h-full flex flex-col justify-evenly mx-16 px-44 border-x border-[#F0F0F0]'>
            {/*для двух верхних элементов*/}
            <div className='flex justify-center'>
              {/*верхний левый элемент*/}
              <div className='flex-1 content-center justify-items-center border border-[#F0F0F0]'>
                <div className='flex flex-col gap-6 w-fit'>
                  <h1 className='font-prata uppercase text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-[#F0F0F0]'>
                    щебень, щпс, отсев
                  </h1>
                  <div className='flex items-center gap-2'>
                    <p className='min-w-16 md:w-11 h-[1px] bg-[#BABABA]'></p>
                    <p className='font-prata uppercase text-base xl:text-lg 2xl:text-xl 3xl:text-2xl text-[#F0F0F0]'>
                      от производителя
                    </p>
                  </div>
                </div>
              </div>

              {/*верхний правый элемент*/}
              <div className='flex-1 border border-[#F0F0F0]'>
                <img
                  src={photo1}
                  alt='Фото1'
                  className='object-cover w-full h-full'
                />
              </div>
            </div>

            {/*для двух нижних элементов*/}
            <div className='flex justify-center'>
              {/*нижний левый элемент*/}
              <div className='flex-1 border border-[#F0F0F0]'>
                <img
                  src={photo2}
                  alt=' Фото2'
                  className='object-cover w-full h-full'
                />
              </div>

              {/*нижний правый элемент*/}
              <div className='flex-1 content-center justify-items-center border border-[#F0F0F0]'>
                <div className='flex flex-col gap-3 w-fit font-prata uppercase text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-[#F0F0F0]'>
                  <p>петровеньковское</p>
                  <p>месторождение</p>
                  <p>песчаника</p>
                </div>
              </div>
            </div>
          </div>
          <div className='mx-11 border-t border-[#F0F0F0]'>
            <div className='h-8 mx-5 border-x border-[#F0F0F0]'></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
