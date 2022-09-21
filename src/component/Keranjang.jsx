import './css/keranjang.css';

export default function Keranjang() {
  return (
    <div>
      <h2>Keranjang</h2>
      <div className="box-cart">
        <div className="left-cart">
          <img
            src="https://cdn0-production-images-kly.akamaized.net/6EVSQbuaD3El4WlsTLPcsfqI2w4=/274x0:994x720/1200x900/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3160169/original/037753700_1592898671-Arema_FC_-_Ilustrasi_Logo.jpg"
            alt=""
          />
        </div>
        <div className="center-cart">
          <h3>Nama baju</h3>
          <p>Stok: 10</p>
          <p>
            Arema didirikan pada tanggal 11 Agustus 1987 sebagai Arema Malang. Pada tahun 2009, Arema berganti nama menjadi Arema Indonesia.[2] Tahun 2012, Arema Indonesia diakusisi oleh Grup Bakrie. Saat itu, Bakrie menjual klub mereka,
            Pelita Jaya dan berubah menjadi Pelita Bandung Raya sehingga membatalkan rencana merger antar kedua tim.[3][4] Pada tahun 2013, Arema Indonesia berganti nama menjadi Arema Cronus setelah diakuisisi oleh Grup Bakrie.[5] Pada
            tahun 2017, nama Arema Cronus berubah menjadi Arema FC hingga sekarang.[6]
          </p>
        </div>
        <div className="right-cart">
          <button>+</button>
          <input type="text" />
          <button>-</button>
        </div>
      </div>
    </div>
  );
}
