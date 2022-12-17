import React from 'react';
import s from'./Header.css';
import {NavLink} from 'react-router-dom';
const Header=()=>{

return(
<header className="header">
  <div className="header__top">
    <div className="container">
      <ul className="header__top-menu">
        <li> <img src="./img/Group.svg" alt="location" />Россия, Москва, 38КМ МКАД, 6Бс1</li>
        <li> <img src="./img/Group3328.svg" alt="time" />Время работы: c 08:00 до 21:00</li>
        <li><a href="#"><img src="img/Vector.svg" alt="icon" />Whatsapp</a></li>
      </ul>
    </div>
  </div>
  <div className="header__body">
    <div className="container">
      <div className="header__body-elements">
        <div className="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="logo"><NavLink className="link"><img src="./img/Group673.svg" alt="logo" /></NavLink></div>
        <nav className="header__menu">
          <b> <mark>10 лет</mark>  превосходим <br />
            ваши ожидания</b>
          <ul className="header__menu">
            <li><NavLink className="link">Подбор авто</NavLink></li>
            <li><NavLink className="link">О компании</NavLink></li>
            <li><NavLink className="link">Техцентр</NavLink></li>
            <li><NavLink className="link">Отзывы</NavLink></li>
            <li><NavLink className="link">Контакты</NavLink></li>
          </ul>
          <div className="contact">
            <img src="./img/Group3324.svg" alt="tel" />
              <NavLink className="num">+7 (800) 551-94-31</NavLink>
              <p><NavLink className="link">+7 (800) 551-94-31</NavLink></p></div>
          <button className="header__btn">Обратный звонок</button>
        </nav>
      </div>
    </div>
  </div>
  <div className="header__bottom">
    <div className="container">
      <div className="header__bottom-elements">
        <ul className="header__bottom-menu">
          <li><NavLink to="/Katalog" className='link'>Каталог авто <img src="./img/arrow.svg" alt="icon"/></NavLink></li>
            <li><NavLink to="/probeg" className='link'>Авто с пробегом <img src="./img/arrow.svg" alt="icon"/> </NavLink></li>
            <li><NavLink to="/Main" className='link'>Кредит и рассрочка <img src="./img/arrow.svg" alt="icon"/></NavLink> </li>
            <li><NavLink to="/special" className='link'>Спецпредложения <img src="./img/arrow.svg" alt="icon"/></NavLink> </li>
            <li><NavLink to="/credit" className='link'>Такси в кредит</NavLink></li>
        </ul>
        <ul className="header__bottom-search">
          <li><img src="./img/Vector8.svg" alt="icon" /></li>
          <li><img src="./img/v.svg" alt="icon" /></li>
          <li><img src="./img/Vector (1).svg" alt="icon" /></li>
        </ul></div>

    </div>

  </div>
</header>)
}
export default Header;