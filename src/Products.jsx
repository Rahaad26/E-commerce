import React from 'react';
import Product from './Product';
import IMG1 from './Assests/product.png';
const products = [
  {
    id: 1,
    image: IMG1,
    name: 'Tide Powder',
    description: 'Tide is an American brand of laundry detergent manufactured and marketed by Procter & Gamble. Introduced in 1946, it is the highest-selling detergent brand in the world.',
  },
  {
    id: 2,
    image: IMG1,
    name: 'Tide Pods',
    description: 'Tide Pods are a laundry detergent product manufactured by Procter & Gamble. They are single-use, pre-measured packets of laundry detergent that are designed to be tossed into the washing machine along with the clothes.',
  },
];

const Products = () => {
  return (
    <div className="products">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
