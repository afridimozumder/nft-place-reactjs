import {Link} from 'react-router-dom';
//import React from 'react';
//import { Button } from '@material-ui/core';
import React from 'react';


const Nft = ({name,id,image, callback})=>{
    return(
        <>
                <div class='content'>
                <Link to={`/nftDetails/${id}`}> 
                    <img src={`/image/${image}`} width='100%'/>
                </Link>
                    <div class="artName">
                    <h3>{name}</h3>
                    </div>
                </div>


        </>
    );
}

/* const Nft = ({name,id,dept,image, callback})=>{
    return(
        <>
                <a href={`/details/${id}`} target="_blank"> 
                    <img src={`/image/${image}`} width='100%'/>
                    <div class="caption">
                    <p>name</p>
                    </div>
                    <h3>Name : {name}</h3>
                    <p>ID : {id}</p>
                    <p>Dept : {dept}</p>
                </a>


        </>
    );
} */

export default Nft;