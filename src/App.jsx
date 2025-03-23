import Hero from './pages/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Products from './pages/Products.jsx';
import History from './pages/History.jsx';
import Contacts from './pages/Contacts.jsx';

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
