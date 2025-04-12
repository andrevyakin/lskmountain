import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Carousel from '../components/about/Carousel.jsx';
import Skill from '../components/about/Skill.jsx';
import { experience, skill, wagon } from '../assets/index.js';
import { aboutCompany } from '../constants/aboutСompany.js';
import DisableBodyScroll from '../utils/DisableBodyScroll.js';
import { certificates as images } from '../assets/certificates/index.js';
import SwipeCards from '../components/about/SwipeCards.jsx';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (isOpen) ref.current.scrollIntoView();
  }, [isOpen]);

  const cardData = images.map((image, index) => ({
    id: index + 1,
    url: image,
  }));
  const [cards, setCards] = useState(cardData.reverse());
  useEffect(() => {
    if (!cards.length) setCards(cardData);
  }, [cards]);

  return (
    <>
      <section id='contacts' ref={ref} className='relative'>
        <h2 className='hidden'>О компании ООО "ЛСК"</h2>
        {isOpen && <DisableBodyScroll />}
        <div className='max-sm:mx-5 mx-16 pt-32 max-sm:pt-0 pb-8 border-x border-[#242424]'>
          <div className=''>
            <div className='flex max-sm:flex-col-reverse'>
              <motion.div className='md:basis-[40%]'>
                <Carousel isOpen={isOpen} setIsOpen={setIsOpen} />
              </motion.div>
              <div className='md:hidden w-full mt-10 grid place-items-center'>
                {cards.map((card) => (
                  <SwipeCards
                    key={card.id}
                    cards={cards}
                    setCards={setCards}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    {...card}
                  />
                ))}
              </div>

              <div
                className={`md:basis-[60%] px-12' + ${isOpen ? 'blur-xs' : ''}`}
              >
                <h1 className='font-prata text-6xl text-center mb-8'>О нас</h1>
                <div className='max-h-[700px] max-sm:max-h-[350px] overflow-y-auto'>
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
              'font-prata mt-40 max-sm:mt-20 text-5xl max-sm:text-3xl font-medium tracking-widest uppercase text-center text-[#242424]' +
              ' ' +
              `${isOpen ? 'blur-xs' : ''}`
            }
          >
            наши преимущества
            <motion.div
              className='max-sm:hidden max-sm:gap-y-8 flex justify-evenly mt-8'
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
            <motion.div
              className='md:hidden flex-col max-sm:gap-y-8 flex justify-evenly mt-8'
              initial={{
                x: -50,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  duration: 1,
                },
              }}
              viewport={{ once: true, amount: 0 }}
            >
              <Skill
                image={wagon}
                alt={'ЖД'}
                text={`Возможность\nдоставки\nжелезнодорожным\nтранспортом`}
              />
            </motion.div>
            <motion.div
              className='md:hidden flex-col max-sm:gap-y-8 flex justify-evenly mt-8'
              initial={{
                x: 50,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  duration: 1,
                },
              }}
              viewport={{ once: true, amount: 0 }}
            >
              <Skill
                image={skill}
                alt={'V'}
                text={`Высокое\nкачество\nматериала`}
              />
            </motion.div>
            <motion.div
              className='md:hidden flex-col max-sm:gap-y-8 flex justify-evenly mt-8'
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
              viewport={{ once: true, amount: 0 }}
            >
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
