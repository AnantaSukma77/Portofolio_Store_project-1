import './css/headers.css';
import { Link } from 'react-router-dom';

export default function Headers() {
  return (
    <header>
      <h1>Produk</h1>
      <div>
        <input type="search" placeholder="Cari.." />
        <Link to="/notfound">
          <button>Search</button>
        </Link>
        <Link to="/notfound">
          <button>Sort</button>
        </Link>
      </div>
    </header>
  );
}
