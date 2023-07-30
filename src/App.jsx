import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Homepage from "./page/Homepage";
import Detail from "./page/Detail";
import dashboard from "./page/admin/dashboard";
import update from "./page/admin/update";
import Product from "./page/admin/Product";
import Add from "./page/admin/add";

function App() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch(`  http://localhost:3000/products`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);
  // console.log(products);

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage products={products} />} />
        <Route path="/detail/:id" element={<Detail products={products} />} />
        <Route path="/admin/dashboard" element={dashboard} />
        <Route
          path="/admin/product/add"
          element={<Add addProduct={products} />}
        />
        <Route path="/admin/update/:id" element={update} />
        <Route path="/admin/products" element={Product} />
      </Routes>
    </>
  );
}

export default App;
