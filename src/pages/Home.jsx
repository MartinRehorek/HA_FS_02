import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import imgUrl from "../img/shopping center.jpeg";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  lineHeight: '0px',
}));

export default function Home() {
  return (
      <Box sx={{ flexGrow: 1 }} >
        <Grid container spacing={3} display="flex">
          <Grid xs={6} md={6} display="flex">
            <Item>
              <Typography variant="h1" gutterBottom>
                Welcome to the shopping center app
              </Typography>
            </Item>
          </Grid>
          <Grid xs={6} md={6}>
            <Item>
              <Box
                component="img"
                
                alt="Shopping center."
                src={imgUrl}
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
  );
}
