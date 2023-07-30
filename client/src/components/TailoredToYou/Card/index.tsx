import "./style.css";

const TailoredToYouCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="tailored-to-you-card-block">
    <img src={icon} alt={title} className="tailored-to-you-card-block__icon" />
    <div className="tailored-to-you-card-block__large-text">{title}</div>
    <p className="tailored-to-you-card-block__description">{description}</p>
  </div>
);

export default TailoredToYouCard;
