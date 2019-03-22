import React, { useState } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductList from '../../components/ProductList'
import './Home.css';

export const HomeContext = React.createContext(0)
const Provider = HomeContext.Provider

function Home() {
  const [ state, setState ] = useState({})
  return (
    <Provider value={{ state, setState }}>
      <Header />
      <ProductList />
      <Footer />
    </Provider>
  );
}

export default Home;
