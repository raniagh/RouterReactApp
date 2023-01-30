import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  //get params exists in the URL
  const params = useParams;
  console.log(params.productId);
  return (
    <section>
      <h1>ProductDetail</h1>
    </section>
  );
}

export default ProductDetail;
