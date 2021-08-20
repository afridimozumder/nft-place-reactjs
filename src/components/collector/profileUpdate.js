import { useFetch } from './useFetch';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import swal from "sweetalert";

import './css/profileUpdate.css';
import Navbar from './Navber';

const useStyles = makeStyles((theme) => ({
    field: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },

  }));

const ProfileUpdate=()=>{

    const classes = useStyles();
    const [auth, setAuth] = useState();
    let history = useHistory();
  
    const url = `http://localhost:8000/api/profile/${sessionStorage.getItem("userid")}`;
    const [user, setUser] = useState([]);
    useFetch(url, setUser);

    const change = (e) => {
        const attr = e.target.name;
        const val = e.target.value;
        setAuth({ ...auth, [attr]: val });
      };

    const onsubmit = (e) => {
        e.preventDefault();
        console.log(auth);
        fetch(`http://127.0.0.1:8000/api/collector/profileUpdate/${sessionStorage.getItem("userid")}`, {
          method: "POST",
          body: JSON.stringify(auth),
        })
        
        history.push({pathname:'/collector-profile'});
            swal({
              title: "Profile Updated for " + auth.name,
              icon: "success",
            });

    }

    return(
    <>
        <Navbar/>

        <div class="card">
            <div class="txt">Edit Profile</div>
            
            <form className={classes.field} onSubmit={onsubmit} noValidate autoComplete="off">
                    <TextField
                        required
                        id="name"
                        label="Name"
                        placeholder={user.name}
                        multiline
                        variant="filled"
                        name="name"
                        onInput={change}
                    />
                    <TextField
                        required
                        id="email"
                        label="Email"
                        placeholder={user.email}
                        multiline
                        variant="filled"
                        name="email"
                        onInput={change}
                    />
                    <TextField
                        required
                        id="phone"
                        label="Phone"
                        placeholder={user.phone}
                        multiline
                        variant="filled"
                        name="phone"
                        onInput={change}
                    />
                    <TextField
                        required
                        id="address"
                        label="Address"
                        placeholder={user.address}
                        multiline
                        variant="filled"
                        name="address"
                        onInput={change}
                    />
                    <TextField
                        required
                        id="dob"
                        label="Date of Birth"
                        placeholder={user.dob}
                        multiline
                        variant="filled"
                        name="dob"
                        onInput={change}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Submit
                    </Button>
            </form>
        </div>
    </>
);
}

export default ProfileUpdate;