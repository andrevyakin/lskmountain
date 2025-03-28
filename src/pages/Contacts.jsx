import { useState, useRef } from 'react';
import { motion, useDomEvent } from 'framer-motion';
import Carousel from '../components/contacts/Carousel.jsx';
import Skill from '../components/contacts/Skill.jsx';
import { experience, skill, wagon } from '../assets/index.js';
import { aboutCompany } from '../constants/aboutСompany.js';

const Contacts = () => {
  const [isOpen, setOpen] = useState(false);

  useDomEvent(useRef(window), 'scroll', () => isOpen && setOpen(false));

  return (
    <>
      <section id='contacts' className='relative'>
        <div className='mx-16 pt-8 pb-8 border-x border-[#242424]'>
          <div className=''>
            <div className='flex'>
              <div className='basis-[40%]'>
                <Carousel isOpen={isOpen} setOpen={setOpen} />
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
          <div className='font-prata mt-8 text-5xl font-medium tracking-widest uppercase text-center text-[#242424]'>
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
      </section>
    </>
  );
};
export default Contacts;
