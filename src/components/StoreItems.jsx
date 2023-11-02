import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function StoreItems({id, title, price, img, quantity}) {
  return (
    <div>
      <img src={img} alt="" />
      <div>
        <h4>{title}</h4>
        <h4>{price}TL</h4>
        <div>
            <button><ArrowUpwardIcon></ArrowUpwardIcon></button>
            <p>{quantity}</p>
            <button><ArrowDownwardIcon></ArrowDownwardIcon></button>
        </div>
        <button>Sil</button>
      </div>
    </div>
  )
}

export default StoreItems
