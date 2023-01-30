import React from "react";
import { Link } from "react-router-dom";

function Products() {
  return (
    <section>
      <div>Products Page</div>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">An online course</Link>
        </li>
      </ul>
    </section>
  );
}

export default Products;
