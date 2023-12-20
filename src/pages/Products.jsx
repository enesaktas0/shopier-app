import React from "react";
import { getAllProducts } from "../serveces/apiShopier";
import { useQuery } from "@tanstack/react-query";

export default function Products() {
  // const {
  //   data: cabins,
  //   isLoading,
  //   error,
  // } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: getAllProducts,
  // });

  const data = getAllProducts();
  return <div>Products</div>;
}
