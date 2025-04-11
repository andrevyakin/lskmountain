import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Carousel from '../components/about/Carousel.jsx';
import Skill from '../components/about/Skill.jsx';
import { experience, skill, wagon } from '../assets/index.js';
import { aboutCompany } from '../constants/aboutСompany.js';
import DisableBodyScroll from '../utils/DisableBodyScroll.js';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (isOpen) ref.current.scrollIntoView();
  }, [isOpen]);

  return (
    <>
      <section id='contacts' ref={ref} className='md:relative'>
        <h2 className='hidden'>О компании ООО "ЛСК"</h2>
        {isOpen && <DisableBodyScroll />}
        <div className='max-sm:mx-5 mx-16 pt-32 pb-8 border-x border-[#242424]'>
          <div className=''>
            <div className='flex max-sm:flex-col-reverse'>
              <motion.div className='md:basis-[40%]'>
                <Carousel isOpen={isOpen} setIsOpen={setIsOpen} />
              </motion.div>

              <div
                className={`md:basis-[60%] px-12' + ${isOpen ? 'blur-xs' : ''}`}
              >
                <h1 className='font-prata text-6xl text-center mb-8 '>О нас</h1>
                <div className='max-h-[700px] max-sm:max-h-[200px] overflow-auto'>
                  {aboutCompany.map((item, index) => (
                    <div
                      key={index}
                      className='font-philosopher text-2xl indent-20 px-16'
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              'font-prata mt-40 text-5xl max-sm:text-3xl font-medium tracking-widest uppercase text-center text-[#242424]' +
              ' ' +
              `${isOpen ? 'blur-xs' : ''}`
            }
          >
            наши преимущества
            <motion.div
              className='max-sm:flex-col max-sm:gap-y-8 flex justify-evenly mt-8'
              initial={{
                y: 50,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  duration: 1,
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
                text={`Высокое\nкачество\nматериала`}
              />
              <Skill
                image={experience}
                alt={'V'}
                text={`Опыт работы\nболее 18 лет`}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
