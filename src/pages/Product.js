import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
function Product() {

  return (
    <>
      <ul className="menu_list">
        <li><Link className="link" to='/' >Back</Link></li>
      </ul>

      <h1>Products</h1>

    </>
  );

}

export default Product;
