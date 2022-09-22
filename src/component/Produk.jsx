import { useEffect } from 'react';
import { useState } from 'react';
import './css/produk.css';

// function fetchingData() {

// }

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

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div>
      <button onClick={fetchingData}>Get</button>
      <div className="container-product">
        {products.map((product) => (
          <div className="box-product">
            <img src={product.image} alt="Produk" />
            <h4>{product.name}</h4>
            <p>Stok : {product.stock}</p>
            <div className="price-btn">
              <h4>{product.price}</h4>
              <button>Cart</button>
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
    //   <div className="box-product">
    //     <img src="https://static.republika.co.id/uploads/images/inpicture_slide/arema-fc-meluncurkan-logo-dan-slogan-baru-jiwa-jawara_220721090619-387.jpg" alt="Produk" />
    //     <h4>Judul Baju</h4>
    //     <p>Stok</p>
    //     <div className="price-btn">
    //       <h4>Harga</h4>
    //       <button>Cart</button>
    //     </div>
    //   </div>
    //   <div className="box-product">
    //     <img src="https://static.republika.co.id/uploads/images/inpicture_slide/arema-fc-meluncurkan-logo-dan-slogan-baru-jiwa-jawara_220721090619-387.jpg" alt="Produk" />
    //     <h4>Judul Baju</h4>
    //     <p>Stok</p>
    //     <div className="price-btn">
    //       <h4>Harga</h4>
    //       <button>Cart</button>
    //     </div>
    //   </div>
    //   <div className="box-product">
    //     <img src="https://static.republika.co.id/uploads/images/inpicture_slide/arema-fc-meluncurkan-logo-dan-slogan-baru-jiwa-jawara_220721090619-387.jpg" alt="Produk" />
    //     <h4>Judul Baju</h4>
    //     <p>Stok</p>
    //     <div className="price-btn">
    //       <h4>Harga</h4>
    //       <button>Cart</button>
    //     </div>
    //   </div>
    // </div>
  );
}
