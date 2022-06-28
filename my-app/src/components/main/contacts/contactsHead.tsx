import React from "react";
import Grid from "@mui/material/Grid/Grid";
import { Box, Container } from "@mui/system";

export const ContactsHead: React.FC = () => {
  return (
    <Box sx={{ boxShadow: "0px 5px 15px rgba(0,0,0,0.6)" }}>
      <Container
        sx={{
          marginTop: 2,
          fontSize: "20px",
          color: "#4f4f4f",
        }}
      >
        <Grid
          container
          spacing={1}
          sx={{
            width: "100%",
            padding: "0 40px 0 20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid item xs={1}>
            <p>Photo</p>
          </Grid>
          <Grid item xs={5}>
            <p>Name</p>
          </Grid>
          <Grid item xs={5}>
            <p>Phone number</p>
          </Grid>
          <Grid item xs={1}>
            Delete
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
