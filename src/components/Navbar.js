import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <strong>Card App</strong>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/cards">
          Cards
        </NavLink>
        <NavLink to="/cards/new">
          Add Card
        </NavLink>
      </nav>
    </header>
  );
}
