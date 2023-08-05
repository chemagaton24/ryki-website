import { LocationDataType } from "../types/getInTouch";

import MnpLogo from "./images/partners/mnp.logo.svg";
import AmlShopLogo from "./images/partners/aml-shop.logo.svg";
import FaskenLogo from "./images/partners/fasken.logo.svg";
import FintracCanafeLogo from "./images/partners/fintrac-canafe.logo.svg";

import ProvenanceLogo from "./images/partners/provenance.logo.svg";
import DentonsLogo from "./images/partners/dentons.logo.svg";
import RSMLogo from "./images/partners/rsm.logo.svg";
import CIMALogo from "./images/partners/cima.logo.svg";

import AppleByLogo from "./images/partners/appleby.logo.svg";

import KycAmlPolicyIcon from "./images/useful-links/kyc-aml-policy.icon.svg";
import PrivacyPolicyIcon from "./images/useful-links/privacy-policy.icon.svg";
import TermsConditionsIcon from "./images/useful-links/terms-conditions.icon.svg";

export const usefulLinksList = [
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

export const locationData: LocationDataType[] = [
  {
    location: "canada",
    ourPartners: [
      {
        logo: MnpLogo,
        alt: "MNP Logo",
      },
      {
        logo: AmlShopLogo,
        alt: "The AML Shop Logo",
      },
      {
        logo: FaskenLogo,
        alt: "Fasken Logo",
      },
      {
        logo: FintracCanafeLogo,
        alt: "Fintrac Canafe Logo",
      },
    ],
    getInTouch: {
      registrationInfo: "RYKI INC. | FINTRAC MSB Registration #M19525430",
      phone: "(226) 240-7189",
      address: "139 Northfield Drive W. Suite 3. Waterloo, ON, Canada, N2L 5A6",
    },
    isActive: true,
  },
  {
    location: "cayman-islands",
    ourPartners: [
      {
        logo: ProvenanceLogo,
        alt: "Provenance Logo",
      },
      {
        logo: DentonsLogo,
        alt: "Dentons Logo",
      },
      {
        logo: RSMLogo,
        alt: "RSM Logo",
      },
      {
        logo: CIMALogo,
        alt: "Cayman Island Monetary Authority Logo",
      },
    ],
    getInTouch: {
      registrationInfo: "RYKI Ltd. | CIMA VASP no. 1917020",
      phone: "(226) 240-7189",
      address:
        "DDM Corporate Ltd, 3rd Floor One Capital Place, PO Box 10190 Grand Cayman, Cayman Islands",
    },
    isActive: false,
  },
  {
    location: "british-virgin-islands",
    ourPartners: [
      {
        logo: AppleByLogo,
        alt: "Appleby Logo",
      },
      {
        logo: ProvenanceLogo,
        alt: "Provenance Logo",
      },
    ],
    getInTouch: {
      phone: "(226) 240-7189",
      address:
        "Trinity Chambers, PO 4031 Road Town, Tortola, British Virgin Islands",
    },
    isActive: false,
  },
];
