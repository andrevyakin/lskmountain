import { hero1, hero2 } from '../assets';
import Wrapper from '../components/Hero/Wrapper.jsx';

const Hero = () => {
  return (
    <section id='hero'>
      <h2 className='hidden'>Слоганы и фотографии завода</h2>
      <div className='bg-dark mx-5 lg:mx-15'>
        <div className=' bg-[url(/bg_mountain_10.png)] bg-no-repeat bg-cover'>
          <div className='bg-[rgba(0,0,0,.25)]'>
            <ul
              className='flex flex-wrap justify-center flex-row xl:flex-col
               gap-y-6 sm:gap-y-12 xl:gap-y-14 2xl:gap-y-20
               pt-20 sm:pt-36 xl:pt-36 2xl:pt-44
               px-5 md:px-10 lg:px-16 2xl:px-36
               pb-12 sm:pb-16 xl:pb-14 2xl:pb-20'
            >
              <li className='flex flex-col sm:flex-row'>
                <Wrapper>
                  <div className='flex flex-col gap-4 font-prima uppercase text-light text-[clamp(20px,2.5vw,48px)]'>
                    петровеньковское
                    <br />
                    месторождение
                    <br />
                    песчаника
                  </div>
                </Wrapper>
                <Wrapper>
                  <img
                    src={hero1}
                    alt='Фотография механизма, перерабатывающего (дробящего) камень.'
                    height='328'
                    width='726'
                    className='object-fill h-full w-full'
                  />
                </Wrapper>
              </li>
              <li className='flex flex-col-reverse sm:flex-row'>
                <Wrapper>
                  <img
                    src={hero2}
                    alt='Фотография механизма, перерабатывающего (дробящего) камень.'
                    height='328'
                    width='726'
                    className='object-fill h-full w-full'
                  />
                </Wrapper>
                <Wrapper>
                  <div
                    className='font-prima uppercase text-light
                  text-[clamp(20px,2.5vw,48px)]/10
                  sm:text-[clamp(20px,2.5vw,48px)]/8
                  lg:text-[clamp(20px,2.5vw,48px)]/12
                  xl:text-[clamp(20px,2.5vw,48px)]/16
                  2xl:text-[clamp(20px,2.5vw,48px)]/20'
                  >
                    <h3 className=''>щебень, щпс, отсев</h3>
                    <h4 className='relative translate-x-1/12 text-center tracking-wide font-second text-[clamp(16px,2.03vw,39px)]'>
                      <span className='absolute left-0 top-1/2 -translate-x-1/3 w-7 md:w-7 lg:w-9 xl:w-12 2xl:w-15 3xl:w-18 h-[1px] bg-light' />
                      от производителя
                    </h4>
                  </div>
                </Wrapper>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
