import { category, products } from '../assets/products';
import { motion } from 'framer-motion';
import ProductCard from '../components/products/ProductCard.jsx';
import { useState } from 'react';

const Products = () => {
  const variants = {
    initial: i => ({
      x: i ? 0 : -230,
      opacity: 0
    }),
    whileInView: i => ({
      x: 0,
      opacity: 1,
      transition: {
        type: i ? '' : 'just',
        duration: i === -1 ? 1 : 2
      }
    })
  };

  return (
    <section id="products" className="">
      <h2 className="hidden">
        Продукция ООО "ЛСК". Описание и карточки товара
      </h2>
      <ul className="max-sm:mx-5 mx-16 max-sm:pt-4 pt-20 pb-8 border-x border-dark">
        {category.map((category) => (
          <li key={category._id} id={category._id} className="pt-8">
            <div className="flex items-center ">
              <div className="grow h-[1px] bg-dark" />
              <header
                className="grow-0  p-3 border-1 border-dark font-prata text-[clamp(30px,3.13vw,60px)] text-center uppercase tracking-wide font-normal  text-dark">
                {category.name}
              </header>
              <div className="grow h-[1px] bg-dark" />
            </div>

            <motion.ul
              className="max-sm:hidden flex flex-row basis-1/3 justify-evenly gap-16 flex-wrap my-16"
              variants={variants}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.5 }}
              custom={false}
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
            </motion.ul>
            <motion.ul
              className="md:hidden flex flex-row basis-1/3 justify-evenly gap-16 flex-wrap my-16"
              variants={variants}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0}}
              custom={true}
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
            </motion.ul>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Products;
