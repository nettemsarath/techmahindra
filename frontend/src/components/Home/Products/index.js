import React from "react";
import "./index.css";
import plusicon from "images/plusicon.svg";
import editicon from "images/editicon.svg";
import { useSelector } from "react-redux";

const Product = ({ item }) => {
  return (
    <div className='product_item'>
      <img src={editicon} alt='editicon' />
      <div>Name: {item.Name}</div>
      <div>
        Types:
        <select name='cars'>
          <option value='volvo'>Volvo</option>
          <option value='saab'>Saab</option>
          <option value='fiat'>Fiat</option>
          <option value='audi'>Audi</option>
        </select>
      </div>

      <div>ImageLink: {item.ImageLink} </div>
      <div>Price: {item.Price} </div>
      <img src={plusicon} alt='plusicon' />
    </div>
  );
};

const Products = () => {
  const { productsList } = useSelector((state) => state.products);
  //   Types: ["downloadable", "subscription-based", "delivery based"],
  return (
    <div className='products'>
      {productsList.map((item) => (
        <Product item={item} />
      ))}
    </div>
  );
};

export default Products;
