import React, { useEffect, useState } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import { useTranslation } from "next-i18next";

import { PageLayout } from "@/components/PageLayout";
import { theme } from "@/styles/theme";
import { Need } from "@/types";

import { NeedSelector } from "../NeedSelector";
import Button from "@mui/material/Button";
import { Container, FilterContainer } from "./styled";
import { OverviewMapMap } from "./OverviewMapMap";

export const OverviewMap = () => {
  const [needs, setNeeds] = useState<Need[]>();
  const [category, setCategory] = useState<string>();
  const { t } = useTranslation();

  useEffect(() => {
    const listNeeds = async () => {
      const response = await fetch("/api/list-needs", {
        method: "POST",
        body: JSON.stringify({ category }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data) {
          setNeeds(data as Need[]);
        }
      }
    };

    listNeeds();
  }, [category]);

  return (
    <PageLayout backgroundColor={theme.palette.primary.main}>
      <Box position="relative" width={1}>
        <Box
          position="absolute"
          width={1}
          zIndex={3}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection={["column-reverse", "row", "row"]}
          p={[0, 0, 2]}
          gap={1}
        >
          <FilterContainer>
            <NeedSelector
              handleChange={(v: string) => setCategory(v)}
              value={category}
              labelText={t("OverviewMap.filterMapText") || "Filter map"}
            />
          </FilterContainer>
          <Container>
            <Button component={Link} href="/add" variant="contained" fullWidth>
              {t("OverviewMap.addNeedButtonText")}
            </Button>
          </Container>
        </Box>
      </Box>
      <OverviewMapMap needs={needs} />
    </PageLayout>
  );
};
