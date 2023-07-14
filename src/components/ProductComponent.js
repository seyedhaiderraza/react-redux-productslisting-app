import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  return (
    <>
      {products && products.map((product) => (
        <div key={product.id} className="four wide column">
            <Link to={`/product/${product.id}`}>
              <div className="ui link cards">
                <div className="card" key={product.id}>
                        <div className="image">
                          <img src={product.image} alt={product.title} />
                        </div>
                        <div className="content">
                          <div className="header">{product.title}</div>
                          <div className="meta price">$ {product.price}</div>
                          <div className="meta">{product.category}</div>
                        </div>
                </div>
              </div>
             </Link>
        </div>
      ))}
    </>
  );
};

export default ProductComponent;
