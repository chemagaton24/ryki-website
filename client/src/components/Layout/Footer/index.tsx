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
          <div className="footer-block__long-text">
            RYKI INC.
            <br />
            (226) 240-7189
            <br />
            139 Northfield Drive W. Suite 3<br />
            Waterloo, ON, Canada, N2L 5A6
            <br />
            FINTRAC MSB Registration #M19525430
          </div>
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
