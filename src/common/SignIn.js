import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Nav from "./Nav";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
/* import state from "sweetalert/typings/modules/state"; */

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        NftPlace.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const [auth, setAuth] = useState();
  let history = useHistory();
  const change = (e) => {
    const attr = e.target.name;
    const val = e.target.value;
    setAuth({ ...auth, [attr]: val });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    console.log(auth);
    fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      body: JSON.stringify(auth),
    })
      .then((res) => res.json())
      .then((result) => {
        sessionStorage.setItem("userid", result["id"]);
        sessionStorage.setItem("useremail", result["email"]);
        sessionStorage.setItem("name", result["name"]);
        sessionStorage.setItem("usertype", result["usertype"]);
        sessionStorage.setItem("phone", result["phone"]);
        sessionStorage.setItem("profileImage", result["profileImage"]);
        sessionStorage.setItem("dob", result["dob"]);
        sessionStorage.setItem("address", result["address"]);
        sessionStorage.setItem("gender", result["gender"]);
        console.log(sessionStorage.getItem("address"));
        setAuth("");
        if (result["usertype"] == "collector") {
          history.push({pathname:'/collectorHome', state:result["id"]});
          swal({
            title: "Welcome " + result["name"],
            icon: "success",
          });
        } else if (result["usertype"] == "collector") {
          history.push("collector/home");
        } else if (result["usertype"] == "admin") {
          history.push("admin/home");
        } else if (result["usertype"] == "dataAnalyst") {
          history.push("dataAnalyst/home");
        } else {
          swal({
            title: "Wrong Credentials!",
            icon: "error",
          });
        }
      })
      .catch((err) => console.log("error"));
  };

  const classes = useStyles();
  useEffect(() => {
    document.title = "Signin";
  }, []);

  useEffect(() => {
    console.log();
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Nav></Nav>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login to NftPlace
        </Typography>
        <form onSubmit={onsubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onInput={change}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onInput={change}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}