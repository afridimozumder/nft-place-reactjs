import React from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Box,
  Typography,
  Button,
  AppBar,
  Toolbar,
  Link,
  CssBaseline,
} from "@material-ui/core";

export default function Nav() {
  return (
    <div>
      <CssBaseline />
      <AppBar>
        <Toolbar variant="dense">
          <Box display="flex" flexGrow={1}>
            <Link color="inherit" href="/">
              <Typography variant="h4" component="h4" allign="center">
                NftPlace
              </Typography>
            </Link>
          </Box>
          <Typography variant="h5" component="h6">
            <Link component={RouterLink} to="/signup" color="inherit">
              SignUp
            </Link>
          </Typography>
          <Typography variant="h5" component="h6">
            <Link component={RouterLink} to="/signin" color="inherit">
              SignIn
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      ;
    </div>
  );
}