import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">
        <span className="nav-icon" aria-hidden="true">🛍️</span>
        Products
      </Link>
      <Link to="/contact">Contact</Link>
      {isLoggedIn && <button onClick={logout}>Logout</button>}
    </nav>
  );
}