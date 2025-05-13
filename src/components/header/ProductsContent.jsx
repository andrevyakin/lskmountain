import { Link } from 'react-scroll';
import { category } from '../../assets/products/index.js';

const ProductsContent = ({ offset, activeLink }) => {
  return (
    <div
      className='flex flex-col items-center gap-2 w-fit py-2 px-12 text-lg rounded-b-2xl bg-[#242424] text-[#f0f0f0] font-second font-normal'
    >
      {category.map((i) => (
        <Link
          key={i.name}
          to={i._id}
          className='hover:underline underline-offset-6 cursor-pointer'
          offset={offset+20}
          spy={true}
          smooth={true}
          duration={500}
          hashSpy={true}
        >
          {i.acronym}
        </Link>
      ))}
    </div>
  );
};
export default ProductsContent;
