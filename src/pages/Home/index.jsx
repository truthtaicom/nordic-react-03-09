import React, { useState } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductList from '../../components/ProductList'
import './Home.css';

export const HomeContext = React.createContext(0)
const Provider = HomeContext.Provider

function Home() {
  const [ state, setState ] = useState({
    selectedProducts: []
  })

  const addToCart = (product) => {
    // const hasProduct = state.selectedProducts.has(product.id)
    // if(hasProduct) {
    //   const currentProsuctInStore = state.selectedProducts.get(product.id)
    //   const productAddMore = {...currentProsuctInStore, quantity: currentProsuctInStore + 1 }
    //   setState({ selectedProducts: state.selectedProducts.set(product.id, productAddMore) })
    // } else {
    //   const productAddMore = {...product, quantity:  1 }
    //   setState({ selectedProducts: state.selectedProducts.set(product.id, productAddMore) })
    // }
    const productAddMore = {...product, quantity:  1 }
      setState({ selectedProducts: [...state.selectedProducts, productAddMore] })

  }

  return (
    <Provider value={{ state, setState, addToCart }}>
      <Header />
      <ProductList />
      <Footer />
    </Provider>
  );
}

export default Home;
