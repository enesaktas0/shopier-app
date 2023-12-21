import React, { useEffect } from 'react';
import { getAllProducts } from '../serveces/apiShopier';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

export default function Products() {
  const {
    data: cabins,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });

  // useEffect(() => {
  //   async function getData() {
  //     const data = await getAllProducts();
  //     console.log(data);
  //   }
  //   getData();
  // }, []);
  return (
    <div>
      <Link to="/">Home</Link>
    </div>
  );
}
