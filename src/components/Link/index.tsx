import { StyledLink } from "./styled";

export const Link = ({
  children,
  href,
  target,
}: {
  children: React.ReactNode;
  href: string;
  target?: string;
  rel?: string;
}) => <StyledLink {...{ href, target }}>{children}</StyledLink>;
