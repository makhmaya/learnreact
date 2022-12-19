import React from 'react';
import { NavLink } from 'react-router-dom';

const FOOTERTOP = () => {
  return ( 
    <div className="footer__top">
     
      <div className="container">
        <ul className="footer__list">
          <li>
            <NavLink to="/footer-catalog">Каталог авто</NavLink>
          </li>
          <li>
            <NavLink to="/avtosprobegom">Авто с пробегом</NavLink>
          </li>
          <li>
            <NavLink to="kredit">Кредит и рассрочка</NavLink>
          </li>
          <li>
            <NavLink to="spec">Спецпредложения</NavLink>
          </li>
          <li>
            <NavLink to="taksi">Такси в кредит</NavLink>
          </li>
        </ul>
      </div>
 
    
    </div>
   );
}
 
export default FOOTERTOP;