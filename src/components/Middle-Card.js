import "./Middle-Card.css";

function MiddleCard(props) {
  return (
    <div className="card">
      <div className="card-left">
        <h1>{props.title}</h1>
        <h4>{props.content}</h4>
      </div>
      <div className="card-right">
        <img src={props.image} className="card-image"></img>
      </div>
    </div>
  );
}

export default MiddleCard;
