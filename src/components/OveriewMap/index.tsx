import React, { useEffect, useState } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import { Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { PageLayout } from "@/components/PageLayout";
import { theme } from "@/styles/theme";
import { Need } from "@/types";

import { NeedSelector } from "../NeedSelector";
import Button from "@mui/material/Button";
import { MapControlContainer } from "./styled";
import { OverviewMapMap } from "./OverviewMapMap";

export const OverviewMap = () => {
  const [needs, setNeeds] = useState<Need[]>();
  const [category, setCategory] = useState<string>();

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
      <Box position="relative" width={1} display="flex" justifyContent="center">
        <MapControlContainer>
          <NeedSelector
            handleChange={(v: string) => setCategory(v)}
            labelText="Filter map"
          />
          <Tooltip title="Add your need">
            <Button component={Link} href="/add">
              <AddIcon />
            </Button>
          </Tooltip>
        </MapControlContainer>
      </Box>
      <OverviewMapMap needs={needs} />
    </PageLayout>
  );
};
