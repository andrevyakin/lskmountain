import Hero from './pages/Hero.jsx';
import Products from './pages/Products.jsx';
import Contacts from './pages/Contacts.jsx';
import Layout from './layoyt/Layout.jsx';

const App = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Products />
        <Contacts />
      </Layout>
    </>
  );
};
export default App;
