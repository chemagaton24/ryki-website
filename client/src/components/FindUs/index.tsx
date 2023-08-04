import "./style.css";
import MnpLogo from "./images/partners/mnp.logo.svg";
import AmlShopLogo from "./images/partners/aml-shop.logo.svg";
import FaskenLogo from "./images/partners/fasken.logo.svg";
import FintracCanafeLogo from "./images/partners/fintrac-canafe.logo.svg";
import UsefulLinksItem from "./UsefulLinksItem";
import KycAmlPolicyIcon from "./images/useful-links/kyc-aml-policy.icon.svg";
import PrivacyPolicyIcon from "./images/useful-links/privacy-policy.icon.svg";
import TermsConditionsIcon from "./images/useful-links/terms-conditions.icon.svg";
import PhoneIcon from "./images/get-in-touch/phone.icon.svg";
import LocationIcon from "./images/get-in-touch/location.icon.svg";
import Button from "../Button";
import { open } from "../../redux/features/modalSlice";
import { useDispatch } from "react-redux";
import { MutableRefObject, useRef } from "react";

const usefulLinksList = [
  {
    icon: KycAmlPolicyIcon,
    title: "KYC & AML Policy",
    modal: "kyc-aml-policy",
  },
  {
    icon: PrivacyPolicyIcon,
    title: "Privacy Policy",
    modal: "privacy-policy",
  },
  {
    icon: TermsConditionsIcon,
    title: "Terms & Conditions",
    modal: "terms-of-use",
  },
];

const FindUs = () => {
  const dispatch = useDispatch();
  const canadaPinRef = useRef<HTMLButtonElement | null>(null);
  const camayanIslandRef = useRef<HTMLButtonElement | null>(null);
  const britishVirginIslandsRef = useRef<HTMLButtonElement | null>(null);

  const activatePinLocationFn = (
    a: MutableRefObject<HTMLButtonElement | null>
  ) => {
    console.log(a);
  };

  return (
    <div className="find-us-block">
      <div className="find-us-block__map">
        <div className="find-us-block__map-bg">
          <button
            aria-label="pin"
            type="button"
            className="find-us-block__map-pin-btn find-us-block__map-pin-btn--active find-us-block__map-pin-btn--pin-1"
            onClick={() => activatePinLocationFn(canadaPinRef)}
            ref={canadaPinRef}
          >
            <span className="icon icon-pin"></span>
            <span className="find-us-block__map-pin-location find-us-block__map-pin-location--canada">
              Canada
            </span>
          </button>
          <button
            aria-label="pin"
            type="button"
            className="find-us-block__map-pin-btn find-us-block__map-pin-btn--pin-2"
            onClick={() => activatePinLocationFn(camayanIslandRef)}
            ref={camayanIslandRef}
          >
            <span className="icon icon-pin"></span>
          </button>
          <button
            aria-label="pin"
            type="button"
            className="find-us-block__map-pin-btn find-us-block__map-pin-btn--pin-3"
            onClick={() => activatePinLocationFn(britishVirginIslandsRef)}
            ref={britishVirginIslandsRef}
          >
            <span className="icon icon-pin"></span>
          </button>
        </div>
      </div>
      <div className="container">
        <div className="row content-row">
          <div className="find-us-block__large-text">Where to</div>
          <h2 className="find-us-block__heading">find us</h2>
          <p className="find-us-block__description">
            Select Juristiction to check details of our offices and partners.
          </p>
        </div>
        <div className="row content-row">
          <h3 className="find-us-block__partners-heading">Our Partners</h3>
          <div className="find-us-block__partners-logos">
            <div className="find-us-block__partners-logos-item">
              <img src={MnpLogo} alt="MNP Logo" />
            </div>
            <div className="find-us-block__partners-logos-item">
              <img src={AmlShopLogo} alt="The AML Shop Logo" />
            </div>
            <div className="find-us-block__partners-logos-item">
              <img src={FaskenLogo} alt="Fasken Logo" />
            </div>
            <div className="find-us-block__partners-logos-item">
              <img src={FintracCanafeLogo} alt="Fintrac Canafe Logo" />
            </div>
          </div>
        </div>
        <div className="row content-row">
          <h3 className="find-us-block__useful-links-heading">Useful links</h3>
          <ul className="find-us-block__useful-links-list">
            {usefulLinksList.map((item, key) => (
              <li key={key}>
                <UsefulLinksItem {...item} />
              </li>
            ))}
          </ul>
        </div>
        <div className="row content-row">
          <h3 className="find-us-block__get-in-touch-heading">Get in touch</h3>
          <div className="find-us-block__get-in-touch-sub-text">
            RYKI INC. | FINTRAC MSB Registration #M19525430
          </div>
          <ul className="find-us-block__get-in-touch-list">
            <li>
              <div className="find-us-block__get-in-touch-item find-us-block__get-in-touch-item--phone">
                <img src={PhoneIcon} alt="phone icon" />
                <span>(226) 240-7189</span>
              </div>
            </li>
            <li>
              <div className="find-us-block__get-in-touch-item find-us-block__get-in-touch-item--address">
                <img src={LocationIcon} alt="location icon" />
                <span>
                  139 Northfield Drive W. Suite 3. Waterloo, ON, Canada, N2L 5A6
                </span>
              </div>
            </li>
          </ul>
          <Button
            className="find-us-block__get-in-touch-contact-us-btn"
            onClick={() => dispatch(open("contact-form"))}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
