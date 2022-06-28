import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  createTheme,
  ThemeProvider,
  Grid,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const darkTheme = createTheme({
  palette: { mode: "dark" },
});

export function Header() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Toolbar>
          <Grid container sx={{ display: "flex", alignItems: "center" }}>
            <Grid item xs={2}>
              <Typography variant="h5" sx={{}}>
                Contacts
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <TextField
                variant="standard"
                placeholder="Search..."
                size="small"
                sx={{ width: "100%" }}
                inputProps={{
                  style: { color: "orange" },
                }}
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button>Main</Button>
              </Link>
              <Link to="/newContacts" style={{ textDecoration: "none" }}>
                <Button>new contact</Button>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
