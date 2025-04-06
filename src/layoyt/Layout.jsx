import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Layout = ({ children }) => {
  return (
    <div id='layout'>
      <Header />
      <div className='bg-[rgba(240,240,240,0)]'>
        <div className='bg-[url(/bg_products_70.png)]'>
          <div className='bg-[rgba(255,255,255,0.2)] backdrop-blur-xs'>
            <div id='dark'>
              {children}
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
