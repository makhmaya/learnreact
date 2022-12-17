import vector from "./img/Vector.png";
const OTZIV = (props) => {

  return ( 
  
<div className="Otziv__item">
  <img src={props.img}/>
  <div className="otziv__title">
          <h4>{props.title}</h4>
          <blockquote>«Я нахожусь в салоне ALTERA, всем советую, хороший коллектив, добрые люди, приветствуют, это не обман, вам гарантия 100 % точно, чисто от меня, приезжайте! Мы приехали приобрести автомобиль в салон ALTERA...</blockquote>
        <p><a href="#"><span>Подробнее</span> <img src={vector}></img></a></p>
  </div>
    
</div>

    );
}
 
export default OTZIV;