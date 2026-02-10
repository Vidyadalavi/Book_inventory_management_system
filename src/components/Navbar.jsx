import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">📚 Book Inventory</Link>
      <Link to="/add">➕ Add Book</Link>
    </nav>
  );
}

export default Navbar;
