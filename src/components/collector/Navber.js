import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
    const history = useHistory();
    const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar position="static" color='primary'>
        <Toolbar>
          <IconButton onClick={() => { history.push('/collectorHome'); }}>
            <HomeRoundedIcon/>
          </IconButton>

          <Typography variant="h6" className={classes.title}>           
            NFT_Place
          </Typography>

          <Button color="inherit" onClick={() => { history.push('/collector-dashboard'); }}>DashBoard</Button>
          <Button color="inherit" onClick={() => { history.push('/collector-wallet'); }}>Wallet</Button>
          <Button color="inherit" onClick={() => { history.push('/collector-profile'); }}>Profile</Button>
          <Button color="inherit" onClick={() => { history.push('/login'); }}>logout</Button>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
