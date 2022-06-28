import { Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { data } from "../../../customData/data";
import { useSelector } from "react-redux";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     mainContainer: {
//       width: "100%",
//       padding: "0 40px 0 20px",
//       "&:hover": {
//         backgroundColor: "rgba(0,0,0,0.1)",
//       },
//     },
//   })
// );

export const ContactsReturn: React.FC = () => {
  const state = useSelector((state) => state);
  console.log("Stattteee - ", state);
  const contactsData = data.map((item) => {
    return (
      <Grid
        key={item.id}
        container
        spacing={1}
        sx={{
          width: "100%",
          padding: "0 40px 0 20px",
          display: "flex",
          alignItems: "center",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.1)",
          },
        }}
      >
        <Grid item xs={1}>
          <p>{item.image}</p>
        </Grid>
        <Grid item xs={5}>
          <p>{item.name}</p>
        </Grid>
        <Grid item xs={5}>
          <p>{item.phone}</p>
        </Grid>
        <Grid item xs={1}>
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </Grid>
      </Grid>
    );
  });

  return (
    <Container sx={{ marginTop: 3, fontSize: "18px" }}>
      {contactsData}
      {/* <Grid
        container
        spacing={1}
        sx={{
          width: "100%",
          padding: "0 40px 0 20px",
          display: "flex",
          alignItems: "center",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.1)",
          },
        }}
      >
        <Grid item xs={1}>
          <p>img</p>
        </Grid>
        <Grid item xs={5}>
          <p>Name Naname3</p>
        </Grid>
        <Grid item xs={5}>
          <p>+996-770-591-666</p>
        </Grid>
        <Grid item xs={1}>
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </Grid>
      </Grid> */}
    </Container>
  );
};
