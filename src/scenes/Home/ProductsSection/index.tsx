import React from 'react';
import s from './products.module.scss';
import { Button, Typography } from '@mui/material';
import P1 from '@/public/assets/images/product-1.png';
import P2 from '@/public/assets/images/product-2.png';
import P3 from '@/public/assets/images/product-3.png';
import Image from 'next/image';
import Link from "next/link";

const products = [P1, P2, P3];

const Products = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <header>
          <div>
            <Typography className={s.title_txt_sub} variant="body1">
              Zuns Group
            </Typography>
            <Typography variant="h1">Products</Typography>
          </div>

          <Button variant="outlined" size="large">
            See All
          </Button>
        </header>

        <div className={s.products}>
          {products.map((product) => (
            <Link href='/products'>
              <div className={s.product} key={product.src}>
                <Image src={product} alt="znus product" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
