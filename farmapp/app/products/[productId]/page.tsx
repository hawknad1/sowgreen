"use client";
import ProductDetailCard from "@/components/ProductDetailCard";
import { fetchProduct } from "@/lib/utils";
import GlobalApi from "@/utils/GlobalApi";
import { useEffect, useState } from "react";

import React from "react";

const ProductDetailPage = ({ params }: { params: { productId: string } }) => {
  const [product, setProduct] = useState([]);
  console.log(product);

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = () => {
    GlobalApi.getProductbyId(params.productId).then((res: any) => {
      setProduct(res.data.data);
    });
  };
  // console.log(`this is from ---${JSON.stringify(product)}`);
  return (
    <div>
      <ProductDetailCard product={product} />
    </div>
  );
};

export default ProductDetailPage;
