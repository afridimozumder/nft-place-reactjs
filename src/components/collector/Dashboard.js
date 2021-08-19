import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './css/dashboard.css';
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

const Dashboard = ()=>{
    const classes = useStyles();
    
    return(
        <>
        <Navbar/>
            <section class="grid-section">
                <div class="admin-grid">
                    <div class="admin-img">
                    <img src="/image/icon1.jpg" class="image"/>
                    <div class="middle">
                        <div className={classes.button}>
                            <Button variant="contained" color="default" href={`/collector-profile`}>
                                <b>PROFILE</b>
                            </Button>
                        </div>
                    </div>
                    </div>      
                </div>

                <div class="admin-grid">
                    <div class="admin-img">
                    <img src="/image/icon2.jpg" class="image"/>
                        <div class="middle">
{/*                             <div class="text">
                                <a href="/myCollection"> COLLECTION </a>
                            </div> */}
                            <div className={classes.button}>
                                <Button variant="contained" color="default" href={`/collectors-collection`}>
                                    <b>COLLECTION</b>
                                </Button>
                            </div>
                        </div>
                    </div>       
                </div>

                <div class="admin-grid">
                    <div class="admin-img">
                    <img src="/image/icon4.jpg" class="image"/>
                    <div class="middle">
                        {/* <div class="text"><a href="#history">HISTORY</a></div> */}
                        <div className={classes.button}>
                            <Button variant="contained" color="default" href={`/history/`}>
                                <b>HISTORY</b>
                            </Button>
                        </div>
                    
                    </div>
                    </div>
                </div>

                <div class="admin-grid">
                    <div class="admin-img">
                    <img src="/image/icon3.jpg" class="image"/>
                    <div class="middle">
                        <div className={classes.button}>
                            <Button variant="contained" color="default" href={`/collector-wallet`}>
                                <b>WALLET</b>
                            </Button>
                        </div>
                    </div>  
                    </div>     
                </div>
            </section>
        </>
    );
}
export default Dashboard;