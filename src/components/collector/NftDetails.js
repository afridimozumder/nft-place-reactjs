import { useParams } from "react-router";
import { useFetch } from './useFetch';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {BasicTextFields } from './metarial';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './css/details.css';
import Navbar from './Navber';


const useStyles = makeStyles((theme) => ({
    text: {
        width: '100%',
        maxWidth: 500,
      },

    field: {
      '& > *': {
        margin: theme.spacing(1),
        width: '20ch',
      },
    },
    button: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const NftDetails = ({itemList}) =>{
    const {id:eid} = useParams();
    const classes = useStyles();
    
    const url = `http://localhost:8000/api/details/${eid}`;
    const [nft, setNftDetails] = useState([]);
    useFetch(url, setNftDetails);
    
/*     const deleteUser = (id)=>{
        const List = userList.filter((user)=>user.id !== id);
        setUserList(List);
      } */


    return(
        <div class='body'>
            <div class="grid-container">
                <div class="Navbar"><Navbar/></div>
                <div class="left"></div>
                
                <div class="main">
                    <div class='photo'>
                        <img src={`/image/${nft.image}`}/>
                    </div>

                    <div class='details'>

                        <Typography variant="h4" gutterBottom>
                            {nft.name}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {nft.desc}
                        </Typography>

                        Creator : {nft.creator}<br/>
                        Edition : {nft.edition}<br/><br/>

                        <Button color="secondary" href={`/proof/${eid}`}>See Proof of Authenticity</Button>
{/*                         <Button variant="secondary" gutterBottom>
                            <Link to={`/proof/${eid}`}>See Proof of Authenticity</Link><br/>
                        </Button> */}
                        
                        <h5>Ctagory : Art, Abstract</h5>

                        <Typography variant="h6" gutterBottom>
                            Initial Price : {nft.value} ETH<br/>
                        </Typography>
                        
                        <BasicTextFields/>
                        <div className={classes.button}>
                            <Button variant="outlined" color="secondary" href={`/purchase/${eid}`}>
                                Submit
                            </Button>
                        </div>
                        
                    </div>

                </div>  
                
                <div class="rignt"></div>            
                <div class="footer">Footer</div>
            </div>
        </div>
    );
}

export default NftDetails;