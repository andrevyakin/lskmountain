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
    image.length && (
      <li className='flex flex-col gap-1 pt-4 border border-dark rounded-2xl bg-white drop-shadow-[0_5px_5px_rgba(0,0,0,1)]'>
        <header className='font-prata text-lg uppercase font-semibold tracking-wider text-center text-dark'>
          {name}
        </header>
        <article className='flex m-4 gap-3'>
          {/*- m или обрезать фото*/}
          <div className='-my-12 -mx-6'>
            <img
              src={image[0]}
              alt={name}
              height='294'
              width='258'
              className='object-cover h-max-[294px] w-max-[258px] rounded-2xl'
            />
          </div>
          <div className='flex flex-col justify-center font-philosopher text-xs sm:text-sm text-start normal-case text-dark'>
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
    )
  );
};
export default ProductCard;
