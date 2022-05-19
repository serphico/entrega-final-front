import { Link } from "react-router-dom";

export default function Nav() {
  return (
      <nav className=" font-medium">
        <Link className="px-4 py-2 hover:bg-amber-200" to="/">Home</Link>
        <Link className="px-4 py-2 hover:bg-amber-200" to="/cart">Carrito</Link>
      </nav>
  );
}