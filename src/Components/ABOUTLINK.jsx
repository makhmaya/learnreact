import { NavLink } from "react-router-dom";
import ABOUT from "./ABOUT";
import TRADE from "./TRADE";
const AboutLink = () => {
  let active="nav__link-active";
  let nonactive ="nav__link-not";
  return (
  <div className="about">
     <NavLink to="/about" className={({isActive})=>isActive?active:nonactive}>ABOUT</NavLink>
      <NavLink to="/trade" className={({ isActive }) => isActive ? active : nonactive}>TRADE-IN</NavLink>
      <NavLink to="/buy" className={({ isActive }) => isActive ? active : nonactive}>BUY</NavLink>
  </div>);
}
 
export default AboutLink;