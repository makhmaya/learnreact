import bank from './img/banks.png';
import bank1 from './img/banks (1).png';
import bank2 from './img/banks (3).png';
import bank3 from './img/1280px-Sberbank 1.png';
import SLIDER from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#ADADB0", width: "20px", height: "20px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#ADADB0", width: "20px", height: "20px", }}
      onClick={onClick}
    />
  );
}
const PARTNER = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow />
  };
  return ( 
  <section className="partner">
    <div className="container">
        <h2>Банки-партнеры</h2>
       
        <div className="partners">
          <SLIDER {...settings}>
            <div className="partners__list"><img className="partners__img" src={bank}/></div>
            <div className="partners__list"><img className="partners__img" src={bank1} /></div>
            <div className="partners__list"><img className="partners__img" src={bank2} /></div>
            <div className="partners__list"><img className="partners__img" src={bank3} /></div>
          </SLIDER>
        </div>
  
        
    </div>
   
  </section> );
}
 
export default PARTNER;