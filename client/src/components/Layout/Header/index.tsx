import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import "./style.css";

const Header = () => (
  <header className="header-block">
    <NavLink to="/" aria-label="Home Link">
      <Logo />
    </NavLink>
  </header>
);

export default Header;
