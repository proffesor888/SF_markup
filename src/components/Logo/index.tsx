import CompanyLogo from "@assets/company_logo.svg";
import CompanyTitle from "@assets/company_title.svg";
import { StyledCompanyLogo, StyledCompanyTitle } from "./styled";

export const Logo = () => {
  return (
    <>
      <StyledCompanyLogo src={CompanyLogo} alt="Company log" />
      <StyledCompanyTitle src={CompanyTitle} alt="Company title" />
    </>
  );
};
