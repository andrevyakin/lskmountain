import React from 'react';

const ProductCard = ({
  name,
  image,
  strength,
  frost,
  greediness,
  stateStandard,
  price,
}) => {
  return (
    <li className='flex flex-col gap-1 pt-4 border border-dark rounded-2xl bg-white drop-shadow-[0_5px_5px_rgba(0,0,0,1)] 3xl:h-140 3xl:w-200'>
      <header className='font-prima text-lg 3xl:text-4xl uppercase font-semibold tracking-wider text-center text-dark'>
        {name}
      </header>
      <article className='flex m-4 gap-3'>
        <div className='3xl:hidden'>
          <img
            src={image[0]}
            alt={name}
            height='294'
            width='258'
            className='object-cover h-max-[294px] w-max-[258px]'
          />
        </div>
        <div className='max-3xl:hidden'>
          <img
            src={image[0]}
            alt={name}
            height='700'
            width='480'
            className='object-cover h-max-[700px] w-max-[480px] mt-8'
          />
        </div>
        <div
          className='flex flex-col justify-center font-second text-xs sm:text-sm 3xl:text-2xl text-start normal-case text-dark'>
          {strength && <p>Марка прочности: {strength}</p>}
          {frost && <p>Морозостойкость: {frost}</p>}
          {greediness && <p>Лещадность; {greediness}</p>}
          {stateStandard && (
            <>
              <p className='pt-2 sm:pt-8'>Соответствует</p>
              {stateStandard.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </>
          )}
          {price && <p className=''>Цена: {price} руб./тонна с НДС</p>}
        </div>
      </article>
    </li>
  );
};
export default ProductCard;
