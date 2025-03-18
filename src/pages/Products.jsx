import { category, products } from '../assets/products';
import ProductCard from '../components/ProductCard.jsx';
import PageFooter from '../components/PageFooter.jsx';
import { wagon, skill, experience } from '../assets/';

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
        <div className='font-prata text-6xl font-medium tracking-widest uppercase text-center text-[#242424]'>
          наши преимущества
          <div className='flex justify-evenly mt-8 px-64'>
            <div className='basis-1/3 justify-items-center'>
              <img src={wagon} alt={'ЖД'} />
              <p className="px-3 text-wrap normal-case tracking-normal whitespace-pre text-2xl">
                {`Возможность\nдоставки\nжелезнодорожным\nтранспортом`}</p>
            </div>
            <div className='basis-1/3 justify-items-center'>
              <img src={skill} alt={'V'} />
              <p className="px-3 text-wrap normal-case tracking-normal whitespace-pre text-2xl">
                {`Высокие\nпоказатели\nматериала`}
              </p>
            </div>
            <div className='basis-1/3 justify-items-center'>
              <img src={experience} alt={'V'} />
              <p className="px-3 text-wrap normal-case tracking-normal whitespace-pre text-2xl">
                {`Опыт работы\nболее 18 лет`}
              </p>
            </div>
          </div>
        </div>
      </div>
      <PageFooter color={'border-[#242424]'} />
    </section>
  );
};
export default Products;
