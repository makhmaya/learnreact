import group from "./../img/Group 2.png"
const FOOTERMAIN = (props) => {
  return (  
  <div className="container">
    <div className="footer__main">
      <div className="footer__item">
        <h3>KATALOG AVTO</h3>
        <span>Подробнее</span>
        <span>Карта сайта</span>
        <ul className="footer__main-list">
          <li>ford</li>
          <li>mazdaa</li>
          <li>mersedes</li>
          <li>chevrolet</li>
          <li>honda</li>
        </ul>
      </div>
      <div className="footer__contact">
     
        <div className="footer__rasrochka">
          <h3>Кредит и рассрочка</h3>
          <ul className="footer__adress-list">
            <li>Экспресс-кредит</li>
            <li> Семейный автомобиль  </li>
            <li> Первый автомобиль    </li>
            <li> Работникам медицины   </li>
            <li> Рассрочка</li>


          </ul>
        </div>
        <div className="footer__adress">
          <h3>Contacts</h3>
          <ul className="footer__adress-list">
            <li><img src={group}></img><span>+7 (800) 551-94-31</span>
              <p>+7 (495) 292-18-67</p></li>
            <li><img src={group}></img><span>Ежедневно с 08:00 до 21:00</span></li>
            <li><img src={group}></img><span>Россия, Москва, 38КМ МКАД, 6Бс1 </span>
              <p>Схема проезда</p></li>
          </ul>
          <select>
            <option disabled selected>MOSCOW</option>
          </select>
        </div>
      </div>
  
    </div>
  </div>
  
 );
}
 
export default FOOTERMAIN;