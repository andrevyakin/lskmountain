import { category, products } from '../assets/products';
import { motion } from 'framer-motion';
import ProductCard from '../components/products/ProductCard.jsx';
import PageFooter from '../components/PageFooter.jsx';

const Products = () => {
  return (
    <section id='products' className=''>
      <h2 className='hidden'>Продукция ООО "ЛСК"</h2>
      <div className='max-sm:mx-5 mx-16 pt-20 pb-8 border-x border-[#242424]'>
        {category.map((category) => (
          <div key={category._id} id={category._id} className='pt-8'>
            <div className='flex items-center '>
              <div className='grow h-[1px] bg-[#242424]' />
              <div
                className='grow-0  p-3 border-1 border-[#242424] font-prata text-[clamp(30px,3.13vw,60px)] text-center uppercase tracking-wide font-normal  text-[#242424]'>
                {category.name}
              </div>
              <div className='grow h-[1px] bg-[#242424]' />
            </div>

            <motion.div
              className='max-sm:hidden flex flex-row basis-1/3 justify-evenly gap-16 flex-wrap my-16'
              initial={{
                x: -230,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  type: 'just',
                  duration: 1,
                },
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
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
                    price={product.price}
                  />
                ))}
            </motion.div>
            <div
              className='md:hidden flex flex-row basis-1/3 justify-evenly gap-16 flex-wrap my-16'
            >
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
                    price={product.price}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Products;
