import { category, products } from '../assets/products';
import ProductCard from '../components/ProductCard.jsx';

const Products = () => {
  return (
    <div
      id='products'
      className='bg-[url(/bg_products.png)] bg-no-repeat bg-cover bg-[#242424] opacity-70 contrast-125 brightness-110'
    >
      <div className='mx-16 pt-52 pb-16 border border-[#242424]'>
        {category.map((category) => (
          <div
            key={category._id}
            className='mb-32 font-prata text-6xl uppercase text-center text-[#242424]  opacity-100 contrast-150 brightness-75'
          >
            {category.name}
            <div className='flex flex-row basis-1/3 justify-evenly gap-16 flex-wrap mt-16'>
              {products
                .filter((product) => product._id.includes(category._id))
                .map((product) => (
                  <ProductCard
                    key={product._id}
                    name={product.name}
                    image={product.image}
                    strength={product.strength}
                    frost={product.frost}
                    greediness={product.greediness}
                    stateStandard={product.stateStandard}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;
