import React from 'react';
import { formatCurrency } from '../../utils/helpers';
import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
  return (
    <Link
      to={`products/${product.id}`}
      className="cursor-pointer rounded border-2 border-gray-200 bg-white p-2"
    >
      <img
        src={product.media[0].url}
        alt={product.title}
        className="w-60 object-cover object-center"
      />
      <div className="mt-4">
        <h6 className="font-bold">{product.title}</h6>
        <div className="flex gap-3">
          <h3 className="font-bold text-green-600">
            {formatCurrency(
              product.priceData.discountedPrice,
              product.priceData.currency,
            )}
          </h3>
          {product.priceData.discount && (
            <h6 className="font-semibold text-gray-500 line-through">
              {formatCurrency(
                product.priceData.price,
                product.priceData.currency,
              )}
            </h6>
          )}
        </div>
      </div>
    </Link>
  );
}
