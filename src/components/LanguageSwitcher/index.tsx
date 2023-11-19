import { useRouter } from "next/router";
import { BoldText, LanguageOption } from "./styled";

export const LanguageSwitcher = () => {
  const { asPath, locale, pathname, push, query } = useRouter();

  const changeLocale = (locale: "en" | "de") => {
    push({ pathname, query }, asPath, { locale });
  };

  return locale === "en" ? (
    <LanguageOption onClick={() => changeLocale("de")}>
      DE / <BoldText>EN</BoldText>
    </LanguageOption>
  ) : (
    <LanguageOption onClick={() => changeLocale("en")}>
      <BoldText>DE</BoldText> / EN
    </LanguageOption>
  );
};
