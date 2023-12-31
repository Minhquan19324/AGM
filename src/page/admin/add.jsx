import React, { useState } from "react";
const Add = ({ addProduct }) => {
  const [inputValues, setInputValues] = useState();
  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputValues(...inputValues, { [name]: value });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    addProduct(inputValues);
  };
  return (
    <div>
      <form action="" onSubmit={onHandleSubmit}>
        <input
          type="text"
          placeholder="Enter Product Name"
          onChange={onHandleChange}
          name="name"
        />
        <input
          type="text"
          placeholder="Enter Product Price"
          onChange={onHandleChange}
          name="price"
        />
        <button type="submit">Add new</button>
      </form>
    </div>
  );
};

export default Add;
