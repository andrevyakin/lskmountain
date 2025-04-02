import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Layout = ({ children }) => {
  return (
    <>
      <div id='layout' className='bg-#f0f0f0'>
        <div className='bg-[url(/bg_products_70.png)]  [&:nth-child(n+3)]:backdrop-opacity-70'>
          <div id='dark'>
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
