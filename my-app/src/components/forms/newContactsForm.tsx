import { Grid, Paper } from "@mui/material";
import Button from "@mui/material/Button/Button";
import TextField from "@mui/material/TextField/TextField";
import { Container } from "@mui/system";
import React, { useState } from "react";

type Inputs = {
  values: string;
};

export const NewContactsForm: React.FC = () => {
  const [namedata, setNameData] = useState<string>("");
  const [numberdata, setNumberData] = useState<string>("");

  const getName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameData(event.target.value);
    console.log(event.currentTarget.value);
  };
  const getNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberData(event.target.value);
    console.log(event.target.value);
  };
  const showState = () => {
    alert(namedata);
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Paper
        elevation={2}
        sx={{
          width: "50%",
          boxShadow: "1px 1px 15px rgba(0,0,0,0.6)",
          margin: "100px 0 0 0 ",
        }}
      >
        <form>
          <Grid
            container
            spacing={1}
            sx={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Grid item xs={10}>
              <TextField
                onChange={getName}
                label="Name"
                variant="standard"
                sx={{ width: "100%", margin: "40px 0 30px 0" }}
              />

              <TextField
                onChange={getNumber}
                label="Number"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <Button
                onClick={showState}
                sx={{
                  margin: "30px 0 30px 0",
                }}
              >
                ADD
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};
