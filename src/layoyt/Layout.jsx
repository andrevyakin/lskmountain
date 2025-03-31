import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Layout = ({ children }) => {
  return (
    <>
      <div className='bg-#f0f0f0'>
        <div className='bg-[url(/bg_products_70.png)]  [&:nth-child(n+2)]:backdrop-opacity-70'>
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Layout;
