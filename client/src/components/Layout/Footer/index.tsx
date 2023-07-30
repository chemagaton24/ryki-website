import { useDispatch } from "react-redux";
import { open } from "../../../redux/features/modalSlice";
import "./style.css";

const Footer = () => {
  const dispatch = useDispatch();

  const openTermsOfUseModal = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(open("terms-of-use"));
  };

  const openPrivacyPolicyModal = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(open("privacy-policy"));
  };

  return (
    <footer className="footer-block">
      <div className="container">
        <div className="row">
          <nav className="footer-block__nav">
            <ul className="footer-block__nav-ul">
              <li>
                <a
                  href="/#"
                  role="button"
                  className="footer-block__nav-link"
                  onClick={openTermsOfUseModal}
                >
                  Terms of use
                </a>
              </li>
              <li>
                <a href="/cookies" className="footer-block__nav-link">
                  Cookies
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="footer-block__nav-link"
                  onClick={openPrivacyPolicyModal}
                >
                  Privacy
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="row">
          <p className="footer-block__long-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sem
            mauris, condimentum ut tincidunt sed, dapibus vel lacus. Aliquam
            volutpat eros diam, ut volutpat elit vehicula vel. Morbi bibendum
            pellentesque mollis. Morbi quis libero viverra, ullamcorper elit
            vel, sollicitudin magna. Vestibulum imperdiet vitae tellus laoreet
            posuere.
          </p>
          <br />
          <div className="footer-block__copyright">
            © 2023. For information, contact Ryki Inc.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
