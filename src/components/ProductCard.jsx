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
    <div className='flex flex-col gap-1 pt-4 border boorde-[#242424] rounded-2xl bg-white drop-shadow-[0_35px_35px_rgba(0,0,0,1)]'>
      <div className='mx-2 font-prata text-lg uppercase font-semibold tracking-wider text-center text-[#242424]'>
        {name}
      </div>
      <div className='flex basis-1/2 m-4 gap-3'>
        <div>
          <img src={image[0]} alt={name} />
        </div>
        <div className='flex flex-col pt-6 font-prata text-sm text-start normal-case text-[#242424]'>
          {strength && <div>Марка прочности: {strength}</div>}
          {frost && <div>Морозостойкость: {frost}</div>}
          {greediness && <div>Лещадность; {greediness}</div>}
          {stateStandard && (
            <>
              <div className="pt-8">Соответствует</div>
              {stateStandard.map((i) => (
                <div key={i}>{i}</div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
