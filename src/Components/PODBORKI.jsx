

const PODBORKI = (props) => {
  return (
  <div className="podborki__item">
    <div className="podborki__item-title">
      <h3>{props.title}</h3>
      <button className="podborki__butt">Посмотреть</button>
    </div>
  </div> 
  );
}
 
export default PODBORKI;