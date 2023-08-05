import "./style.css";
import UsefulLinksItem from "./UsefulLinksItem";
import PhoneIcon from "./images/get-in-touch/phone.icon.svg";
import LocationIcon from "./images/get-in-touch/location.icon.svg";
import Button from "../Button";
import { open } from "../../redux/features/modalSlice";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { LocationDataType, LocationsType } from "../types/getInTouch";
import { locationData, usefulLinksList } from "./data";

const FindUs = () => {
  const dispatch = useDispatch();
  const canadaPinRef = useRef<HTMLButtonElement | null>(null);
  const camayanIslandRef = useRef<HTMLButtonElement | null>(null);
  const britishVirginIslandsRef = useRef<HTMLButtonElement | null>(null);
  const [currentLocation, setCurrentLocation] = useState<LocationDataType>(
    locationData[0]
  );

  const activatePinLocationFn = (location: LocationsType) => {
    const locationIndex = locationData.findIndex(
      (a) => a.location === location
    );
    for (let i = 0; i < locationData.length; i++) {
      if (locationIndex === i) {
        locationData[locationIndex].isActive = true;
      } else {
        locationData[i].isActive = false;
      }
    }
    setCurrentLocation(locationData[locationIndex]);
  };

  return (
    <div className="find-us-block">
      <div className="find-us-block__map">
        <div className="find-us-block__map-bg">
          <button
            aria-label="pin"
            type="button"
            className={`find-us-block__map-pin-btn find-us-block__map-pin-btn--pin-1${
              currentLocation.location === "canada" && currentLocation.isActive
                ? " find-us-block__map-pin-btn--active"
                : ""
            }`}
            onClick={() => activatePinLocationFn("canada")}
            ref={canadaPinRef}
          >
            <span className="icon icon-pin"></span>
            <span className="find-us-block__map-pin-btn-location find-us-block__map-pin-btn-location--canada">
              Canada
            </span>
          </button>
          <button
            aria-label="pin"
            type="button"
            className={`find-us-block__map-pin-btn find-us-block__map-pin-btn--pin-2${
              currentLocation.location === "cayman-islands" &&
              currentLocation.isActive
                ? " find-us-block__map-pin-btn--active"
                : ""
            }`}
            onClick={() => activatePinLocationFn("cayman-islands")}
            ref={camayanIslandRef}
          >
            <span className="icon icon-pin"></span>
            <span className="find-us-block__map-pin-btn-location find-us-block__map-pin-btn-location--canada">
              Cayman Islands
            </span>
          </button>
          <button
            aria-label="pin"
            type="button"
            className={`find-us-block__map-pin-btn find-us-block__map-pin-btn--pin-3${
              currentLocation.location === "british-virgin-islands" &&
              currentLocation.isActive
                ? " find-us-block__map-pin-btn--active"
                : ""
            }`}
            onClick={() => activatePinLocationFn("british-virgin-islands")}
            ref={britishVirginIslandsRef}
          >
            <span className="icon icon-pin"></span>
            <span className="find-us-block__map-pin-btn-location find-us-block__map-pin-btn-location--canada">
              <span>British Virgin</span> Islands
            </span>
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
            {currentLocation.ourPartners.map((item, key) => (
              <div className="find-us-block__partners-logos-item" key={key}>
                <img src={item.logo} alt={item.alt} />
              </div>
            ))}
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
          {currentLocation.getInTouch.registrationInfo && (
            <div className="find-us-block__get-in-touch-sub-text">
              {currentLocation.getInTouch.registrationInfo}
            </div>
          )}
          <ul className="find-us-block__get-in-touch-list">
            <li>
              <div className="find-us-block__get-in-touch-item find-us-block__get-in-touch-item--phone">
                <img src={PhoneIcon} alt="phone icon" />
                <span>{currentLocation.getInTouch.phone}</span>
              </div>
            </li>
            <li>
              <div className="find-us-block__get-in-touch-item find-us-block__get-in-touch-item--address">
                <img src={LocationIcon} alt="location icon" />
                <span>{currentLocation.getInTouch.address}</span>
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
