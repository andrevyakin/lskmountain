import Hero from './pages/Hero.jsx';
import Products from './pages/Products.jsx';
import About from './pages/About.jsx';
import Layout from './layoyt/Layout.jsx';

const App = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Products />
        <About />
      </Layout>
    </>
  );
};
export default App;
