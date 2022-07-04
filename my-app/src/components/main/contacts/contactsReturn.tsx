import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Grid, List, ListItem, ListItemText } from "@mui/material";
import { Container } from "@mui/system";
import { Users } from "../../../app/types/users";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface Props {
  contacts: Users;
}

export const ContactsReturn: React.FC<Props> = ({ contacts }) => {
  // const state = useSelector((state) => state);
  // console.log("Stattteee - ", state);

  return (
    <Container sx={{ marginTop: 3, fontSize: "18px", marginBottom: 3 }}>
      <Grid
        container
        spacing={1}
        sx={{
          width: "100%",
          padding: "0 40px 5px 20px",
          display: "flex",
          alignItems: "center",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.1)",
          },
        }}
      >
        <Grid item xs={1}>
          <p>{contacts.id}</p>
        </Grid>
        <Grid item xs={5}>
          {contacts.name}
        </Grid>
        <Grid item xs={5}>
          {contacts.phone}
        </Grid>
        <Grid item xs={1}>
          <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
