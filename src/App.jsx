import Hero from './layouts/Hero.jsx';
import Navbar from './pages/Navbar.jsx';
import Products from './layouts/Products.jsx';
import ContactHistory from './layouts/Contact&history.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <ContactHistory />
    </>
  );
};
export default App;
