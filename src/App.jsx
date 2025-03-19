import Hero from './layouts/Hero.jsx';
import Navbar from './pages/Navbar.jsx';
import Products from './layouts/Products.jsx';
import History from './layouts/History.jsx';
import Contacts from './layouts/Contacts.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <History />
      <Contacts />
    </>
  );
};
export default App;
