import './css/navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <navbar>
      <h1>Nanta Store</h1>
      <div className="nav-right">
        <Link to="/cart">
          <button>Cart</button>
        </Link>
        <Link to="/notfound">
          <button>Profil</button>
        </Link>
        <Link to="/login">
          <button>Logout</button>
        </Link>
      </div>
    </navbar>
  );
}
