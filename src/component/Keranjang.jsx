import './css/keranjang.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import ItemKeranjang from './ItemKeranjang';

export default function Keranjang() {
  const productInCart = useSelector((state) => state.cart);

  const [price, setPrice] = useState(0);
  const addPrice = (harga) => {
    setPrice(price + harga);
  };

  return (
    <>
      <div className="induk">
        <h2>Keranjang</h2>
      </div>
      {productInCart.map((product) => (
        <div>
          <ItemKeranjang addPriceCallback={addPrice} price={product.price} name={product.name} stock={product.stock} image={product.image} description={product.description} />
          {/* <div>
            <div className="box-cart">
              <>
                <div className="left-cart">
                  <img src={product.image} alt="" />
                </div>
                <div className="center-cart">
                  <h3>{product.name}</h3>
                  <p>Stok: {product.stock}</p>
                  <p>{product.description}</p>
                </div>
                <div className="right-cart">
                  <button onClick={increment}>+</button>
                  <input type="text" value={count} />
                  <button onClick={decrement}>-</button>
                </div>
              </>
            </div>
          </div> */}
        </div>
      ))}
      <div className="box">
        <div className="left">
          <h4>Total</h4>
          <h4>Ongkos Kirim</h4>
          <h4>Pajak 10%</h4> <br />
          <h2>Total Pembayaran</h2>
        </div>
        <div className="right">
          <h4>Rp. {price}</h4>
          <h4>Rp. 3000</h4>
          <h4>Rp. {(price * 10) / 100}</h4> <br />
          <h2>Rp. {price + (price * 10) / 100 + 3000}</h2>
        </div>
      </div>
    </>
  );
}
