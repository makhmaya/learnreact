import React from 'react';
import './Main.css';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink} from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CARD from './CARD.jsx';
import { CARDLIST } from './CardList';
import PODBORKI from './PODBORKI';
import PARTNER from './PARTNERS.jsx';
import OTZIV from './OTZIV.jsx';
import otziv from "./img/otziv (2).png";
import comp from "./img/Comp.png";
import ABOUT from "./ABOUT";
import TRADE from "./TRADE";
import BUY from "./BUY";
import AboutLink from "./ABOUTLINK";

const Main=()=>{
  let data=[
    { title: 'mazda', src:"./img/icon (1).svg"},
    { title: 'kia', src: "./img/icon (2).svg" },
    { title: 'mersedes', src: "./img/icon (3).svg" },
    { title: 'ford', src: "./img/icon (4).svg" },
    { title: 'lexus', src: "./img/icon (5).svg" },
    { title: 'chevrolet', src: "./img/caricon (1).svg" },
    { title: 'mazda', src: "./img/caricon (2).png" },
    { title: 'kia', src: "./img/caricon (3).png" },
    { title: 'mersedes', src: "./img/caricon (4).png" },
    { title: 'ford', src: "./img/caricon (5).png "},
    { title: 'lexus', src: "./img/caricon (6).png "},
    { title: 'chevrolet', src: "./img/caricon (6).png "},
    { title: 'chevrolet', src: "./img/caricon (1).svg" },
    { title: 'mazda', src: "./img/caricon (2).png" },
    { title: 'kia', src: "./img/caricon (3).png" },
    { title: 'mersedes', src: "./img/caricon (4).png" },
    { title: 'ford', src: "./img/caricon (5).png " },
    { title: 'lexus', src: "./img/caricon (6).png " },
    { title: 'chevrolet', src: "./img/caricon (5).png " },
    { title: 'chevrolet', src: "./img/caricon (1).svg " },
    { title: 'chevrolet', src: "./img/caricon (1).svg" },
    { title: 'mazda', src: "./img/caricon (2).png" },
    { title: 'kia', src: "./img/caricon (3).png" },
 
  ]
  const dataPodborki = [
    { title: 'Семейные автомобили' },
    { title: 'Авто для путешествий' },
    { title: 'Городской авто' },
  ]
  let dataOtziv = [
    { title: "Сергей Василиевич", img: otziv },
    { title: "Анна Каренина", img: otziv },
    { title: "Иван Иванович", img: otziv },
  ]
  return(
    <main>
<section className="banner">
  <div className="container">
    <Carousel>
      <Carousel.Item>
  <div className="banner__element">
    <img src="./img/banner.png"/>
    <div className="banner__title">
      <p>осталось всего 10 авто</p>
              <h1>Грандиозная распродажа<br/>
                тестового парка!</h1>
              <p>Узнай свою цену!</p>
    </div>
    <div className="banner__img">
              <img src="./img/car (1).svg"/>
              <img src="./img/car (3).svg" />
              <img src="./img/car (2).svg" />
          
    </div>
  </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="banner__element">
                <img src="./img/banner.png" />
                <div className="banner__title">
                  <p>Осталось всего 10 авто</p>
                  <h1>Грандиозная распродажа<br />
                    тестового парка!</h1>
                  <p>Узнай свою цену!</p>
                </div>
                <div className="banner__img">
                  <img src="./img/car (1).svg" />
                  <img src="./img/car (3).svg" />
                  <img src="./img/car (2).svg" />

                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="banner__element">
                <img src="./img/banner.png" />
                <div className="banner__title">
                  <p>ostalos' vsego 10 auto</p>
                  <h1>Грандиозная распродажа<br />
                    тестового парка!</h1>
                  <p>Узнай свою цену!</p>
                </div>
                <div className="banner__img">
                  <img src="./img/car (1).svg" />
                  <img src="./img/car (3).svg" />
                  <img src="./img/car (2).svg" />

                </div>
              </div>
            </Carousel.Item>
          </Carousel>
</div>
</section>
<section className="choose">
  <div className="container">
    <div className="choose__items">
      <ul className='choose__list'>
            {data.map(item=><li><img src={item.src}/>{item.title}</li>)}
             
      </ul>
      <div className="range">
              <h3>Быстрый подбор авто</h3>
              <p className='range__desc'><span> Цена</span>    <span>0 - 500т </span></p> 
        <div >
                <input type="range" className="form-range" min="0" max="2.4" step="0.5" id="customRange3"></input>
        </div>
        <ul className="range__list">
          <li>0</li>
          <li>500</li>
          <li>800t</li>
          <li>1.1m</li>
          <li>1.4m</li>
          <li>1.7m</li>
          <li>2m</li>
          <li>2.4m</li>
        </ul>
        <div className="range__select">
          <select>
            <option>tip kuzova</option>
                  <option></option>
                  <option></option>
          </select>
                <select placeholder="korobka">
                  <option>korobka</option>
                  <option></option>
                  <option></option>
                </select>
        </div>
        <button>SEE ALL</button>
      </div>
    </div>
  </div>
</section>
      <section>
        <div className="cards container">
          <h2>Автомобили в наличии с ПТС</h2>
          <div className="cards__items">
            {CARDLIST.map(item=>{
              return(
                <CARD key="id" title={item.title} price={item.price} img={item.img}/>
              )
            })}
               
     
          </div>
          <div className="cards__items-btn">
            <button className="cards__items-see">SEE ALL</button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="podborki">
            <div className="podborki__title">
              <h2>Наши подборки</h2>
        
              <a href="/" className="podborki__link">Все подборки</a>
           
            </div>
            <div className="podbroki__items">
       {dataPodborki.map(item=>{
        return(
          <PODBORKI title={item.title}/>
        )
       })}
            
              </div>
            </div>
<div className="content">
  <div className="container">
    <div className="content__form">
                  <h3>Перебьем предложения от конкурентов!</h3>
                  <p>Скидки <span>от 10 до 25%</span> на стоимость автомобиля </p>
                  <form>
                    <input type="text" placeholder="Ваш номер"/>
                    <button className='content__btn'>Получить предложение</button>
                  </form>
                  <p>Нажимая кнопку “Отправить” Вы даете согласие на обработку своих персональных данных</p>
    </div>
   

  </div>
</div>
       
          </div>
          </section>
          <section>
          <div className="special">
            <div className="container">
            <h2>     Спецпредложения</h2>
            <div className="special__items">
              <div className="special__item">
                <h4>Первый автомобиль</h4>
                <p>1,9% по льготной ставке</p>
                <p>Узнать больше</p>
              </div>
              <div className="special__item">
                <h4>Первый автомобиль</h4>
                <p>1,9% по льготной ставке</p>
                <p>Узнать больше</p>
              </div>
              <div className="special__item">
                <h4>Первый автомобиль</h4>
                <p>1,9% по льготной ставке</p>
                <p>Узнать больше</p>
              </div>
            </div>
            </div>
           
        
          </div>
     
   
      </section>
      <section>
        <div className="request">
          <div className="container">
            <div className="request__items">
              <h1>Заявка на автокредит           
              </h1>
              <div className="request__item">
                <div className="request__block">
                  <div className="request__block-form">
                    <select>
                      <option disabled="true">Марка</option>
                    </select>
                    <select>
                      <option value="Марка" disabled="true">Модель</option>
                    </select>
                    <select>
                      <option value="Марка" disabled="true">Комплектация</option>
                    </select>
                  </div>
                  <div className="request__block-content">
                    <div className="request__block-img">
                      <img src="./img/150502082 1 1.png">
                      </img>
                      <div className="request__block-range">
                        <p><span>0</span><span>0</span></p>
                        <div className="request__block-line">
                          <input type="range" className="form-range" min="0" max="2.4" step="0.5" id="customRange3"></input>
                        </div>
                        <p><span>Первоначальный взнос</span><span>Остаток
                          по кредиту</span></p>
                      </div>

                    </div>
                    <div className="request__block-debet">
                      <div className="request__block-item"> <p><span>Сумма кредита, руб</span> <span>0</span></p>
                        <div className="request__block-line">
                          <input type="range" className="form-range" min="0" max="2.4" step="0.5" id="customRange3"></input>
                        </div>
                        <ul className='request__block-list'>
                          <li>0</li>
                          <li>500t</li>
                          <li>800t</li>
                          <li>1.1tmln</li>
                          <li>1.7mln</li>
                          <li>1.8mln</li>
                          <li>2mln</li>
                          <li>2.3mln</li>
                          <li>2.7tmln</li>
                          <li>3mln</li>
                        </ul></div>
                      <div className="request__block-item"> <p><span>Сумма кредита, руб</span> <span>0</span></p>
                        <div className="request__block-line">
                          <input type="range" className="form-range" min="0" max="2.4" step="0.5" id="customRange3"></input>
                        </div>
                        <ul className='request__block-list'>
                          <li>6</li>
                          <li>12</li>
                          <li>24</li>
                          <li>36</li>
                          <li>48</li>
                          <li>60</li>
                          <li>72</li>
                          <li>84</li>
                        </ul></div>
                      <div className="vznos">  <p>Первоначальный<br/> взнос, руб</p>
                        <input type="text" placeholder="0" /></div>
                    
                    </div>
                  </div>

                </div>
                <div className="request__item-element">
                  <h3>Получить выгоду
                    </h3>
                  <p> 300 000 ₽</p>
                  <form>
                    <input type="text" placeholder="name"/>
                    <input type="text" placeholder="phone"/>
                    <input type="submit"/>

                  </form>
                  <p>Нажимая кнопку “Получить скидку” Вы даете согласие на обработку своих персональных данных</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
   <PARTNER/>
   <section>
    <div className="container">
      <div className="otziv">
            <h2>Отзывы</h2>
            <div className="otziv__itemS">
            {dataOtziv.map(item=>{
              return (
                <OTZIV title={item.title} img={item.img}/>
              )
            })}
       
      </div>
      </div>
    </div>
   </section>
   <section>
    <div className="container">
      <div className="aboutCompany">
            <h2>О компании
</h2>
            <p>Мы располагаем огромной торговой площадкой более 5000 квадратных метров, у нас в наличии не менее 200 автомобилей как отечественного, так и иностранного производства. В штате автосалона «Альтера» работают настоящие профессионалы, которые знают особенности каждого конкретного автомобиля.</p>
            <div><img src={comp} /></div>
      </div>
    </div>
   </section>
 <section>
  <div className="container">
    
      <div className="description">
              <BrowserRouter>
                <AboutLink />
                <Routes>
                  <Route path="/about" element={<ABOUT />} />
                  <Route path="/trade" element={<TRADE />} />
                  <Route path="/buy" element={<BUY />} />
                </Routes>
              </BrowserRouter>
      </div>
  </div>
 </section>
 <section>
        <iframe src="https://www.google.com/maps/@43.2839181,76.8144185,15z" width="100%" height="500px"></iframe>
 </section>
    </main>
  )
}
export default Main;