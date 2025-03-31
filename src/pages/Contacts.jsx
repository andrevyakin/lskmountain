import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Carousel from '../components/contacts/Carousel.jsx';
import Skill from '../components/contacts/Skill.jsx';
import { experience, skill, wagon } from '../assets/index.js';
import { aboutCompany } from '../constants/aboutСompany.js';
import DisableBodyScroll from '../utils/DisableBodyScroll.js';

const Contacts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const blur = 'blur-xs';

  useEffect(() => {
    if (isOpen) ref.current.scrollIntoView();
  }, [isOpen]);

  return (
    <>
      <section
        id='contacts'
        ref={ref}
        className={`${isOpen ? 'relative h-dvh bg-[rgba(0,0,0,0.7)]' : ''}`}
      >
        {isOpen && <DisableBodyScroll />}
        <div className='mx-16 pt-32 pb-8 border-x border-[#242424]'>
          <div className=''>
            <div className='flex'>
              <motion.div className='basis-[40%]'>
                <Carousel isOpen={isOpen} setIsOpen={setIsOpen} />
              </motion.div>

              <div className={`basis-[60%] px-12' + ${isOpen ? blur : ''}`}>
                <h1 className='font-prata text-6xl text-center mb-8'>О нас</h1>
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
          <div
            className={
              'font-prata mt-40 text-5xl font-medium tracking-widest uppercase text-center text-[#242424]' +
              ' ' +
              `${isOpen ? blur : ''}`
            }
          >
            наши преимущества
            <motion.div
              className='flex justify-evenly mt-8'
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
export default Contacts;
