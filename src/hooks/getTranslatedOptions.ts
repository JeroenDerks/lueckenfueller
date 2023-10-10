import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";

type Option = {
  label: string;
  value: string;
};

const options = [
  { value: "Alteration tailoring" },
  { value: "Doctor" },
  { value: "Barista bar" },
  { value: "Cosmetic studio" },
  { value: "Driving school" },
  { value: "Fitness studio" },
  { value: "Hairdresser" },
  { value: "Pet care" },
  { value: "Car repair shop" },
  { value: "Kindergarten" },
  { value: "Massage" },
  { value: "Tutoring" },
  { value: "Public transport stop" },
  { value: "Cleaning" },
  { value: "Veterinarian" },
];

export default function useTranslatedOptions() {
  const [translatedOptions, setTranslationOptions] = useState<Option[]>();
  const router = useRouter();
  const { t, ready } = useTranslation();

  useEffect(() => {
    if (ready && router.locale) {
      const translatedOptions = options
        .map(({ value }) => {
          return { label: t(`needOptions.${value}`), value };
        })
        .sort((a, b) => (a.label < b.label ? -1 : 1));
      const otherOption = { label: t("needOptions.Other"), value: "Other" };
      const allOptions = [...translatedOptions, otherOption];

      setTranslationOptions(allOptions);
    }
  }, [router.locale, t, ready]);

  return { translatedOptions };
}
