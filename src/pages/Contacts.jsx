import { motion } from 'framer-motion';
import Carousel from '../components/Carousel.jsx';
import Skill from '../components/Skill.jsx';
import { experience, skill, wagon } from '../assets/index.js';
import { aboutCompany } from '../constants/aboutСompany.js';
import YandexMap from '../components/YandexMap.jsx';

const Contacts = () => {
  return (
    <>
      <section
        id='contacts'
        className=''
      >
        <div className='mx-16 pt-8 pb-8 border-x border-[#242424]'>
          <div className=''>
            <div className='flex'>
              <div className='basis-[40%]'>
                <Carousel />
              </div>

              <div className='basis-[60%] px-12'>
                <h1 className='font-prata text-6xl text-center mb-8'>О нас</h1>
                {aboutCompany.map((item, index) => (
                  <div
                    key={index}
                    className='font-philosopher text-2xl indent-20 '
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='font-prata mt-8 text-6xl font-medium tracking-widest uppercase text-center text-[#242424]'>
            наши преимущества
            <motion.div
              className='flex justify-evenly mt-8'
              initial={{
                y: 150,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  duration: 2,
                },
              }}
              viewport={{ once: true, amount: 0.8 }}
            >
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
            </motion.div>
          </div>
        </div>
        <section className='bg-[url(/bg_mountain.png)] bg-no-repeat bg-cover bg-[#242424] opacity-90'>
          <div className='flex flex-wrap'>
            <div className='w-1/2 h-60 mt-5'>
              <YandexMap />
            </div>

            <div className='w-1/2 p-10 h-fit transition-opacity'>
              <h1 className='font-prata text-center text-[#f0f0f0] text-6xl -mt-4 font-medium tracking-wider underline uppercase'>
                контакты
              </h1>
              <p className='mt-2 font-philosopher text-center text-[#f0f0f0] whitespace-pre'>
                {`+7 (959) 222 22-22\nooolsklpr@mail.ru\nЮр. адрес: ДНР, Донецк, ул. Фёдора Зайцева, 75/20\nАдрес карьера: ЛНР, с. Ковыльное, ул. Пролетарская, 38`}
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
export default Contacts;
