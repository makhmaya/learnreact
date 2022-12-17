import React from "react";
import { CARDLIST } from "./CardList";
const CARD = (props)=>{

  return(
      <div className="card__item">
        <div className="card__item-title">
          <h3> {props.title}</h3>
          <div className="card__item-icon">
            <img src="./img/Vector8.svg" width="18" height="18" />
            <img src="./img/v.svg" width="18" height="18" />
          </div>

        </div>
        <p className="item"><span>Предложение дня</span> <span>Выгода до 300 000 ₽</span></p>
        <div className="card__item-block">
          <ul className="card__item-list">
            <li><img src="./img/Group 3492.png"></img>Оборудование <br></br>
              <p>в подарок</p></li>
            <li><img src="./img/Group 3492.png"></img>КАСКО<br></br>
              <p>в подарок</p></li>
            <li><img src="./img/Group 3492.png"></img>Оборудование<br></br>
              <p>в подарок</p></li>
          </ul>
          <img src={props.img} width="250px" height="250px"></img>
        </div>
        <div className="card__item-price">
        <h4>{props.price}</h4>
          <p>Кредит от 115 000 ₽/мес. </p>
        </div>
        <ul className="card__item-lit">
          <li><img src="./img/Vector (2).svg"></img>115 </li>
          <li><img src="./img/Vector (2).svg"></img>115 </li>
          <li><img src="./img/Vector (2).svg"></img>115 </li>
          <li><img src="./img/Vector (2).svg"></img>115 </li>
        </ul>
        <div className="buttons">
          <div className="rezerv box">Резерв онлайн</div>
          <div className="kupit box"> Купить</div>
          <div className="podrobnee box"> Подробнее</div>
        </div>
      </div>
  

  )
}
export default CARD;