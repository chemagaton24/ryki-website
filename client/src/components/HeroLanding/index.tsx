import { useDispatch } from "react-redux";
import Button from "../Button";
import { open } from "../../redux/features/modalSlice";
import "./style.css";

const HeroLanding = () => {
  const dispatch = useDispatch();

  return (
    <section className="hero-landing-block">
      <div className="container">
        <div className="hero-landing-block__intro scroll-animate scroll-animate__left-origin">
          <h1 className="hero-landing-block__heading">
            Premium digital asset trading
          </h1>
          <div className="hero-landing-block__sub-heading">has arrived</div>
          <p className="hero-landing-block__description">
            A personalized concierge service to help you securely trade digital
            assets.
          </p>
          <Button type="button" onClick={() => dispatch(open("contact-form"))}>
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroLanding;
