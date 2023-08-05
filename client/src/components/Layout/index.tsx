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
import { useEffect } from "react";

const Layout = () => {
  const isModalOpen = useSelector((state: RootState) => state.modal.modalOpen);
  const modals = useSelector((state: RootState) => state.modal.modalsList);

  const scrollFn = () => {
    const sections = document.querySelectorAll("section");
    if (sections !== null) {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const viewHeight = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight
        );
        if (!(rect.bottom < 0 || rect.top - viewHeight / 2 >= 0)) {
          console.log(section);
          section.classList.add("section-visible");
        }
      });
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollFn);
    scrollFn();

    return () => document.removeEventListener("scroll", scrollFn);
  }, []);

  document.addEventListener("scroll", scrollFn);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
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
