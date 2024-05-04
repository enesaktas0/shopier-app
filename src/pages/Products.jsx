import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

import { getAllProducts } from '../serveces/apiShopier';
import Spinner from '../ui/Spinner';
import { formatCurrency } from '../utils/helpers';

export default function Products() {
  const [imageNumber, setImageNumber] = useState(0);
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });

  if (isLoading) return <Spinner />;

  const selectedProduct = data.find((product) => product.id === id);

  const { media, title, priceData, shippingPayer } = selectedProduct;
  console.log(shippingPayer);
  const handleNext = () => {
    setImageNumber((imageNumber) =>
      imageNumber === media.length - 1
        ? (imageNumber = 0)
        : (imageNumber = imageNumber + 1),
    );
  };
  const handlePrev = () => {
    setImageNumber((imageNumber) =>
      imageNumber < 1
        ? (imageNumber = media.length - 1)
        : (imageNumber = imageNumber - 1),
    );
    console.log(imageNumber);
  };
  return (
    <div className="flex h-screen gap-x-20">
      <div className="flex flex-col gap-8">
        <div className="flex justify-center">
          <img src={media[imageNumber].url} alt={title} className="w-80" />
        </div>
        <div className="flex justify-between gap-4">
          <button onClick={handlePrev}>
            <GrFormPrevious />
          </button>
          <div className="flex w-[288px] gap-4">
            {media.map((image) => {
              const index = media.indexOf(image);
              return (
                <img
                  src={image.url}
                  alt={selectedProduct.title}
                  className={`w-8 ${
                    index === imageNumber ? 'opacity-100' : 'opacity-60'
                  }`}
                  key={image.id}
                />
              );
            })}
          </div>
          <button onClick={handleNext}>
            <GrFormNext />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl font-bold text-gray-600">{title}</h3>
        <div className="flex items-end gap-3">
          <h3 className="text-2xl font-bold text-green-600">
            {formatCurrency(priceData.discountedPrice, priceData.currency)}
          </h3>
          {shippingPayer === 'sellerPays' && (
            <p className="text-gray-500">Ücretsiz kargo</p>
          )}
        </div>
      </div>
    </div>
  );
}
