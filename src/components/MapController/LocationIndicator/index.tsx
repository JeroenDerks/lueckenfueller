import { Box } from "@mui/material";
import { Container, Wrapper } from "./styled";
import { Zoom } from "@/types";

export const LocationIndicator = ({ zoom }: Zoom) => (
  <Wrapper>
    <Container {...{ zoom }}></Container>
  </Wrapper>
);
