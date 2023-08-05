export type OurPartnersType = {
  logo: string;
  alt: string;
};

export type GetInTouchType = {
  registrationInfo?: string;
  phone: string;
  address: string;
};

export type LocationsType =
  | "canada"
  | "cayman-island"
  | "british-virgin-islands";

export type LocationDataType = {
  location: LocationsType;
  ourPartners: OurPartnersType[];
  getInTouch: GetInTouchType;
};
