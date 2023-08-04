import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ContactForm from "../ContactForm";
import Modal from "../Modal";
import TermsOfUse from "../TermsOfUse";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import KycAmlPolicy from "../KycAmlPolicy";
import PrivacyPolicy from "../PrivacyPolicy";

const Layout = () => {
  const isModalOpen = useSelector((state: RootState) => state.modal.modalOpen);
  const modals = useSelector((state: RootState) => state.modal.modalsList);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {isModalOpen &&
        modals.map((modal, key) => {
          if (modal.name === "contact-form" && modal.state === true)
            return (
              <Modal classes="contact-form-modal" key={key}>
                <ContactForm />
              </Modal>
            );
          if (modal.name === "terms-of-use" && modal.state === true)
            return (
              <Modal classes="terms-of-use-modal" hasScroll={true} key={key}>
                <TermsOfUse />
              </Modal>
            );
          if (modal.name === "kyc-aml-policy" && modal.state === true)
            return (
              <Modal classes="kyc-aml-policy-modal" hasScroll={true} key={key}>
                <KycAmlPolicy />
              </Modal>
            );
          if (modal.name === "privacy-policy" && modal.state === true)
            return (
              <Modal classes="privacy-policy-modal" hasScroll={true} key={key}>
                <PrivacyPolicy />
              </Modal>
            );
        })}
    </>
  );
};

export default Layout;
