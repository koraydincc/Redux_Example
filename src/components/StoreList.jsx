import React from 'react'
import { useSelector } from 'react-redux';
import StoreItems from './StoreItems';

function StoreList() {
    const {quantity, cartItems, total} = useSelector((store)=> store.cart)
  return (
    <>
    {quantity < 1 ? (
        <section>
            <header>
                <h2>Sepetim</h2>
                <h4>Boş</h4>
            </header>
        </section>
    ) : (
        <section>
            <header>
                <h2>Sepetim</h2>
                
            </header>
            <div>
                {cartItems.map((item)=>{
                    return <StoreItems {...item}></StoreItems>
                })}
            </div>
            <footer>
                <div>
                    <h4>Toplam Tutar <span>{total} TL</span></h4>
                </div>
                <button>Temizle</button>
            </footer>
        </section>
    )}
    </>
  )
}

export default StoreList
