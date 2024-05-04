import React from 'react';
import { getAllProducts } from '../serveces/apiShopier';
import { useQuery } from '@tanstack/react-query';
import ProductItem from '../features/products/ProductItem';
import Spinner from '../ui/Spinner';
import ScroolBar from '../features/scrooling/ScroolBar';

export default function Home() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });

  if (isLoading) return <Spinner />;

  return (
    <div>
      <ScroolBar />
      <ul className="flex flex-wrap justify-center gap-14">
        {products.map((product) => {
          return <ProductItem product={product} key={product.id} />;
        })}
      </ul>
    </div>
  );
}
