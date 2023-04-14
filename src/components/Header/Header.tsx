import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <img className="Header_logo" src="./public/blessed-t.png" alt="logo" />
      </Link>
      <div className="Header_search">
        <input className="Header_search_input" type="text" />
        <SearchIcon className="Header_SearchIcon" />
      </div>
      <div className="Header_nav">
        <div className="Header_options">
          <span className="option1">Hello User</span>
          <span className="option2">Sign in</span>
        </div>
        <div className="Header_options">
          <span className="option1">Returns</span>
          <span className="option2">& Orders</span>
        </div>
        <div className="Header_options">
          <span className="option1">Your</span>
          <span className="option2">Membership</span>
        </div>
        <Link to="/checkout">
          <div className="Header_cart">
            <ShoppingCartIcon />
            <span className="option2 Header_basketcount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Header;
