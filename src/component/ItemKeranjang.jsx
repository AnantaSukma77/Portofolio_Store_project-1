import { useEffect, useState } from 'react';
import './css/itemKeranjang.css';

export default function ItemKeranjang(props) {
  const [count, setCount] = useState(0);
  const increment = () => {
    if (count < props.stock) {
      setCount(count + 1);
      props.addPriceCallback(props.price);
    }
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      props.addPriceCallback(props.price * -1);
    }
  };

  // useEffect(() => {
  //   props.addPriceCallback(props.price);
  // }, [0]);
  return (
    <div>
      <div className="box-cart">
        <>
          <div className="left-cart">
            <img src={props.image} alt="" />
          </div>
          <div className="center-cart">
            <h3>{props.name}</h3>
            <p>Stok: {props.stock}</p>
            <p>Harga : Rp. {props.price}</p>
            <p>{props.description}</p>
          </div>
          <div className="right-cart">
            <button onClick={increment}>+</button>
            <input type="text" value={count} />
            <button onClick={decrement}>-</button>
          </div>
        </>
      </div>
    </div>
  );
}
