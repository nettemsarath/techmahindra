import React from "react";
import cart from "images/cart.svg";
import "./index.css";

const NavBar = () => {
  return (
    <div className='nav'>
      <div className='cart'>
        <img src={cart} alt='cart' />
        <span>10</span>
      </div>
      <button> Buy </button>
    </div>
  );
};

export default NavBar;
