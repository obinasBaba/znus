import React from 'react';
import s from './products.module.scss';
import Header from '@/scenes/Products/Header';
import ProductList from '@/scenes/Products/ProductList';

const Products = () => {
  return (
    <div className={s.container}>
      <Header />

      <ProductList />
    </div>
  );
};

export default Products;

