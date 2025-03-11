import photo1 from '../assets/hero-1.png';
import photo2 from '../assets/hero-2.png';

const Hero = () => {
  return (
    <>
      <div className='bg-[#222222]'>
        <div className='h-lvh bg-[url(/bg_mountain.png)] opacity-90'>
          {/*для 4-х элементов*/}
          <div className='h-lvh mt-36 bg-red-600'>
            {/*для двух верхних элементов*/}
            <div className='flex flex-row align-middle bg-blue-800'>
              {/*верхний левый элемент*/}
              <div className='basis-1/2 m-auto bg-pink-500'>
                <h1 className='font-prata uppercase text-5xl text-center'>
                  щебень, щпс, отсев
                </h1>
              </div>

              {/*верхний правый элемент*/}
              <div className='flex basis-1/2 bg-amber-400 justify-center'>
                <img src={photo1} alt='Фото1' />
              </div>
            </div>

            {/*для двух нижних элементов*/}
            <div className='flex flex-row'>
              {/*нижний левый элемент*/}
              <div className='basis-1/2 justify-center'>
                <img src={photo2} alt='Фото1' />
              </div>

              {/*нижний правый элемент*/}
              <div className='basis-1/2 font-prata uppercase text-5xl'>
                <p>петровеньковское</p>
                <p>месрождение</p>
                <p>песчаника</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
