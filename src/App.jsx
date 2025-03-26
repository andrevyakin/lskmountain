import Hero from './pages/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Products from './pages/Products.jsx';
import Contacts from './pages/Contacts.jsx';
import Layout from './components/Layout.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
        <Products />
        <Contacts />
      </Layout>
    </>
  );
};
export default App;
