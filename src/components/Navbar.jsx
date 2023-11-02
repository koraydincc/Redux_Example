import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useSelector } from 'react-redux';

function Navbar() {
  const { quantity } = useSelector((store) => store.cart);
  //   console.log(useSelector((store) => store.cart));
  return (
    <nav>
      <div className="navbar">
        <h3>Store</h3>
        <div className="navDiv">
          <div className="itemsDiv">
            <p>{quantity}</p>
          </div>
          <ShoppingBasketIcon className="itemsIcon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
