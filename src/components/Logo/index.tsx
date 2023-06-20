import CompanyLogo from "@images/company_logo.svg";
import CompanyTitle from "@images/company_title.svg";
import { StyledCompanyLogo, StyledCompanyTitle } from "./styled";

export const Logo = () => {
  return (
    <>
      <StyledCompanyLogo src={CompanyLogo} alt="Company log" />
      <StyledCompanyTitle src={CompanyTitle} alt="Company title" />
    </>
  );
};
