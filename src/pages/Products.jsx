import { category, products } from '../assets/products';
import ProductCard from '../components/ProductCard.jsx';
import PageFooter from '../components/PageFooter.jsx';
import { wagon, skill, experience } from '../assets/';
import Skill from '../components/Skill.jsx';

const Products = () => {
  return (
    <section
      id='products'
      className='bg-[url(/bg_products.png)] bg-no-repeat bg-cover bg-[#242424] opacity-70 contrast-125 brightness-110'
    >
      <div className='mx-16 pt-24 pb-8 border-x border-[#242424]'>
        {category.map((category) => (
          <div
            key={category._id}
            className='mb-16 font-prata text-6xl uppercase text-center text-[#242424]'
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
      <PageFooter color={'border-[#242424]'} />
    </section>
  );
};
export default Products;
