import './css/keranjang.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function Keranjang() {
  const productInCart = useSelector((state) => state.cart);

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  // const total = () => { productInCart.map((product)=> {return (
  //   product.price * count
  // ) )}}
  return (
    <>
      <div>
        <div>
          <h2>Keranjang</h2>
          {productInCart.map((product) => (
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
          ))}
        </div>
        {productInCart.map((product) => {
          <div className="box">
            <div className="left">
              <h3>Total</h3>
              <h3>Ongkos Kirim</h3>
              <h3>Pajak 10%</h3>
              <h2>Total Pembayaran</h2>
            </div>
            <div className="right">
              <h3>{product.price * count}</h3>
              <h3>3000</h3>
              <h3>{(product.price * count * 10) / 100}</h3>
              <h2>{product.price * count + (product.price * count * 10) / 100 + 3000}</h2>
            </div>
          </div>;
        })}
      </div>
    </>
  );
}
