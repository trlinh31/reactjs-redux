import React from "react";
import { Link } from "react-router-dom";
import StringUtils from "@/utils/string.util";

export default function Product({ product }) {
  return (
    <>
      <div className='group relative'>
        <div className='aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80'>
          <img
            src={`/images/${product.image}`}
            alt='Product image'
            className='h-full w-full object-cover object-center lg:h-full lg:w-full'
            width={300}
            height={300}
          />
        </div>

        <div className='mt-4 flex justify-between'>
          <div>
            <h3 className='text-sm text-gray-700'>
              <Link to={`/product/${product.id}`}>{product.name}</Link>
            </h3>
            <p className='mt-1 text-sm text-gray-500'>{product.brand}</p>
          </div>
          <p className='text-sm font-medium text-gray-900'>{StringUtils.formatPrice(product.price)}</p>
        </div>
      </div>
    </>
  );
}
