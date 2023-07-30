import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ContactForm from "../ContactForm";
import Modal from "../Modal";
import TermsOfUse from "../TermsOfUse";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { open, close } from "../../redux/features/modalSlice";
import KycAmlPolicy from "../KycAmlPolicy";
import PrivacyPolicy from "../PrivacyPolicy";

const Layout = () => {
  const isModalOpen = useSelector((state: RootState) => state.modal.modalOpen);
  const modals = useSelector((state: RootState) => state.modal.modalsList);
  const dispatch = useDispatch();

  const activaasdas = () => {
    dispatch(open("contact-form"));
  };

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {isModalOpen &&
        modals.map((modal, key) => {
          if (modal.name === "contact-form" && modal.state === true)
            return (
              <Modal classes="contact-form-modal">
                <ContactForm key={key} />
              </Modal>
            );
          if (modal.name === "terms-of-use" && modal.state === true)
            return (
              <Modal classes="terms-of-use-modal">
                <TermsOfUse />
              </Modal>
            );
          if (modal.name === "kyc-aml-policy" && modal.state === true)
            return (
              <Modal classes="kyc-aml-policy-modal">
                <KycAmlPolicy />
              </Modal>
            );
          if (modal.name === "privacy-policy" && modal.state === true)
            return (
              <Modal classes="privacy-policy-modal">
                <PrivacyPolicy />
              </Modal>
            );
        })}
    </>
  );
};

export default Layout;
