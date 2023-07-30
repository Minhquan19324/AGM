import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      Product
      <Link to={`/admin/product/add`}>
        <button>Add</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Products Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Product;
