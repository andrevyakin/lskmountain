import { Link } from 'react-scroll';
import { category, products } from '../../assets/products';

const ProductsContent = ({ offset }) => {
  const categoryFilter = category.filter(
    (i) =>
      products.filter((j) => j._id.includes(i._id) && j.image.length).length,
  );

  return categoryFilter.length > 1 ? (
    <div className='flex flex-col items-center gap-2 w-fit py-2 px-12 text-lg rounded-b-2xl bg-[#242424] text-[#f0f0f0] font-second font-normal'>
      {categoryFilter.map((i) => (
        <Link
          key={i.name}
          to={i._id}
          className='hover:underline underline-offset-6 cursor-pointer'
          offset={offset + 20}
          spy={true}
          smooth={true}
          duration={500}
          hashSpy={true}
        >
          {i.acronym}
        </Link>
      ))}
    </div>
  ) : null;
};
export default ProductsContent;
