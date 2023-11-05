import { useRouter } from "next/router";
import { BoldText, StyledLink } from "./styled";

export const LanguageSwitcher = () => {
  const router = useRouter();

  return router.locale === "en" ? (
    <StyledLink href={router.pathname} locale="de">
      DE / <BoldText>EN</BoldText>
    </StyledLink>
  ) : (
    <StyledLink href={router.pathname} locale="en">
      <BoldText>DE</BoldText> / EN
    </StyledLink>
  );
};
