import "./Service-Card.css";

function ServiceCard(props) {
  return (
    <div className="service-card">
      <div className="service-card-inside">
        <h1>{props.title}</h1>
        <h4>{props.content}</h4>
      </div>
    </div>
  );
}

export default ServiceCard;