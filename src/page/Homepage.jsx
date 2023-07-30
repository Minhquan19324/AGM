import React from "react";
import { Link } from "react-router-dom";
function Homepage({ products }) {
  console.log("Homepage", products);
  return (
    <div>
      Homepage
      {products.map((item, index) => {
        return (
          <div key={index + 1}>
            <h3>{item.name}</h3>
            <h3>{item.price}</h3>
            <Link to={`/detail/${item.id}`}>
              <button>detail</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Homepage;
