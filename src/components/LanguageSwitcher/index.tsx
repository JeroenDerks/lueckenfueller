import { useRouter } from "next/router";
import Link from "next/link";

export const LanguageSwitcher = () => {
  const router = useRouter();

  return router.locale === "en" ? (
    <Link href="/" locale="de">
      de
    </Link>
  ) : (
    <Link href="/" locale="en">
      en
    </Link>
  );
};
