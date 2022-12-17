import { NavLink } from "react-router-dom";
import ABOUT from "./ABOUT";
import TRADE from "./TRADE";
const AboutLink = () => {
  return (
  <div className="about">
     <NavLink to="/about" className="links">ABOUT</NavLink>
      <NavLink to="/trade" className="links">TRADE-IN</NavLink>
      <NavLink to="/buy" className="links">BUY</NavLink>
  </div>);
}
 
export default AboutLink;