import { useEffect } from 'react';
import { useState } from 'react';
import './css/produk.css';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../redux/action';

export default function Produk() {
  const [products, setProducts] = useState([]);

  const fetchingData = () => {
    fetch('http://localhost:3004/products')
      .then((response) => {
        return response.json();
      })
      .then((dataProduk) => {
        console.log(dataProduk);
        setProducts(dataProduk);
      });
  };

  const productInCart = useSelector((state) => state.cart);

  useEffect(() => {
    fetchingData();
    console.log(productInCart);
  }, []);

  console.log(productInCart);

  const dispatch = useDispatch();

  const onAddToCart = (id) => {
    const selectedProduct = findProduct(id);
    console.log([...productInCart, ...selectedProduct]);
    dispatch(addProductToCart([...productInCart, ...selectedProduct]));
  };

  const findProduct = (id) => {
    return products.filter((product) => {
      return product.id === id;
    });
  };

  return (
    <div>
      {/* <button onClick={fetchingData}>Get</button> */}
      <div className="container-product">
        {products.map((product) => (
          <div className="box-product">
            <img src={product.image} alt="Produk" />
            <h4>{product.name}</h4>
            <p>Stok : {product.stock}</p>
            <div className="price-btn">
              <h4>{product.price}</h4>

              <button
                onClick={() => {
                  onAddToCart(product.id);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 
      <h4>
        {products.map((product) => (
          <p>{product.name} </p>
        ))}
      </h4> */}
    </div>

    // <div className="container-product">
    // <div className="box-product">
    //   <img src="https://static.republika.co.id/uploads/images/inpicture_slide/arema-fc-meluncurkan-logo-dan-slogan-baru-jiwa-jawara_220721090619-387.jpg" alt="Produk" />
    //   <h4>Judul Baju</h4>
    //   <p>Stok</p>
    //   <div className="price-btn">
    //     <h4>Harga</h4>
    //     <button>Cart</button>
    //   </div>
    // </div>
    // </div>
  );
}
