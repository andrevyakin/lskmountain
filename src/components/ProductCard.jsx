import React from 'react';

const ProductCard = ({
  name,
  image,
  strength,
  frost,
  greediness,
  stateStandard,
}) => {
  return (
    <div className='flex flex-col gap-1 pt-4 border boorde-[#242424] rounded-2xl bg-white drop-shadow-[0_5px_5px_rgba(0,0,0,1)]'>
      <div className='font-prata text-lg uppercase font-semibold tracking-wider text-center text-[#242424]'>
        {name}
      </div>
      <div className='flex basis-1/2 m-4 gap-3'>
        <div>
          <img
            src={image[0]}
            alt={name}
            className='object-cover h-max-[294px] w-max-[258px] rounded-2xl'
          />
        </div>
        <div className='flex flex-col pt-6 font-philosopher text-sm text-start normal-case text-[#242424]'>
          {strength && <div>Марка прочности: {strength}</div>}
          {frost && <div>Морозостойкость: {frost}</div>}
          {greediness && <div>Лещадность; {greediness}</div>}
          {stateStandard && (
            <>
              <div className='pt-8'>Соответствует</div>
              {stateStandard.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
