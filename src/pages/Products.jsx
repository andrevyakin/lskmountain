import product1 from '../assets/products/20-40.png';

const Products = () => {
  return (
    <div
      id='products'
      className='h-dvh bg-[url(/bg_products.png)] bg-no-repeat bg-cover bg-[#242424] opacity-70 contrast-125 brightness-110'
    >
      <div className='mx-16 pt-60 pb-16 border border-[#242424]'>
        <h1 className='font-prata text-6xl uppercase text-center text-[#242424]'>
          Щебень
        </h1>
        <div className='flex flex-col w-fit border boorde-[#242424]'>
          <div className='font-prata text-2xl uppercase text-center text-[#242424]'>
            Щебень фракции 20-40
          </div>
          <div className='flex'>
            <div>
              <img src={product1} alt='Щебень фракции 20-40' />
            </div>
            <div className=''>Марка прочности: 1200</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
