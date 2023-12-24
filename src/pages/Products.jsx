import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

import { getAllProducts } from '../serveces/apiShopier';
import Spinner from '../ui/Spinner';

export default function Products() {
  const [imageNumber, setImageNumber] = useState(0);
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });

  if (isLoading) return <Spinner />;

  const selectedProduct = data.find((product) => product.id === id);

  const { media } = selectedProduct;
  console.log(media);

  console.log(selectedProduct);
  const handleNext = () => {
    setImageNumber((imageNumber) =>
      imageNumber === media.length - 1
        ? (imageNumber = 0)
        : (imageNumber = imageNumber + 1),
    );
    console.log(imageNumber);
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
    <div className="flex h-screen">
      <div className="flex flex-col gap-8">
        <img
          src={media[imageNumber].url}
          alt={selectedProduct.title}
          className="w-80"
        />
        <div className="flex justify-between gap-4">
          <button onClick={handlePrev}>
            <GrFormPrevious />
          </button>
          <div className="flex gap-4">
            {media.map((image) => {
              return (
                <img
                  src={image.url}
                  alt={selectedProduct.title}
                  className={`w-8 ${i}`}
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
      <div>
        <h3>{selectedProduct.title}</h3>
      </div>
    </div>
  );
}
