import React from "react";
import Product from "./Product";

export default function ListProduct({ data }) {
  return (
    <div>
      <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {data.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
