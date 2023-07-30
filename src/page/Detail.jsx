import React from "react";
import { useParams } from "react-router-dom";

function Detail({ products }) {
  const { id } = useParams();
  const currentProduct = products.find((item) => item.id === Number(id));
  console.log(currentProduct);
  return (
    <div>
      Detail
      <h4>{currentProduct.name}</h4>
      <h4>{currentProduct.price}</h4>
    </div>
  );
}

export default Detail;
