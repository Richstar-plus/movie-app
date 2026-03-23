import logo from "../images/background/logo.png";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/series">Series</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </div>
      <div className="sign-btn">
        <button>Sign In</button>
      </div>
    </header>
  );
}