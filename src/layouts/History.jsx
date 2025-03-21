import Carousel from '../pages/Carousel.jsx';
import Skill from '../components/Skill.jsx';
import { experience, skill, wagon } from '../assets/index.js';

const History = () => {
  return (
    <>
      <div
        id='about'
        className='bg-[url(/bg_products.png)] bg-no-repeat bg-cover bg-[#242424] opacity-70 contrast-125 brightness-110'
      >
        <div className='mx-16 pt-8 pb-8 border-x border-[#242424]'>
          <section className=''>
            <div className='flex'>
              <div className='basis-[44%]'>
                <Carousel />
              </div>
              <div className='basis-[56%] text-2xl px-12 pt-12'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci aliquid asperiores at blanditiis consectetur cum
                dignissimos distinctio, dolore dolorum enim, et facere incidunt
                iste laboriosam laudantium molestiae nulla officiis perspiciatis
                quaerat, quo reiciendis rem sed similique suscipit ut vitae
                voluptate voluptatibus. Adipisci aliquid animi assumenda debitis
                eligendi eum, hic illum labore modi natus non provident, quae
                ratione reiciendis rem repellendus veritatis! Accusantium
                architecto consequuntur distinctio earum, fugiat nobis quibusdam
                ratione sint velit? Accusantium error laboriosam molestiae nam
                pariatur. Consectetur cum, cumque debitis esse fugiat, id
                maiores nemo possimus, qui reprehenderit tempore unde velit
                voluptatem? Mollitia, perspiciatis possimus recusandae sint
                suscipit voluptatem! Fugiat libero provident voluptatem! Harum
                incidunt ipsam nihil quas. Ad adipisci alias animi fugit maxime,
                molestias numquam saepe voluptatibus.
              </div>
            </div>
          </section>
          <div
            className='font-prata mt-8 text-6xl font-medium tracking-widest uppercase text-center text-[#242424]'
          >
            наши преимущества
            <div className='flex justify-evenly mt-8 px-2 2xl:px-64'>
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
      </div>
    </>
  );
};
export default History;
