import { Link } from 'react-scroll';
import { category } from '../../assets/products/index.js';

const ProductsContent = ({ offset, activeLink }) => {
  return (
    <div
      className={`flex flex-col items-center gap-2 w-fit p-2 text-lg rounded-b-2xl ${activeLink === 'hero' ? 'bg-[#f0f0f0] text-[#323232] font-semibold opacity-65' : 'bg-[#323232] text-[#f0f0f0] font-normal'}`}
    >
      {category.map((i) => (
        <Link
          key={i.name}
          to={i._id}
          className='hover:underline underline-offset-6 cursor-pointer'
          offset={offset}
        >
          {i.acronym}
        </Link>
      ))}
    </div>
  );
};
export default ProductsContent;
